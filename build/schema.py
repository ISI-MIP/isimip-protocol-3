import json
import os
import subprocess
from collections import OrderedDict
from pathlib import Path

URL = 'https://protocol.isimip.org/schema/'


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    # step 0: read all definitions
    definitions = {}
    for file_name in os.listdir('definitions'):
        file_path = Path('definitions') / file_name
        identifier = file_path.stem
        definition_json = json.loads(open(file_path).read())
        definitions[identifier] = OrderedDict([(row['specifier'], row) for row in definition_json])

    for root, dirs, files in os.walk('schema'):
        for file_name in files:
            schema_path = Path(root) / file_name
            schema_path_components = schema_path.with_suffix('').parts
            output_path = Path('output') / schema_path

            simulation_round = schema_path_components[1]
            product = schema_path_components[2]
            if product.endswith('InputData'):
                category = schema_path_components[3]
                sector = None
            else:
                category = None
                sector = schema_path_components[3]

            # step 1: read schema template
            with open(schema_path) as f:
                schema = {
                    '$schema': 'http://json-schema.org/draft-07/schema#',
                    '$id': URL + schema_path.as_posix(),
                    'commit': commit
                }
                schema.update(json.loads(f.read()))

            # step 4: loop over properties/specifiers/properties and add enums from definition files
            for identifier, properties in schema['properties']['specifiers']['properties'].items():
                if identifier in definitions:
                    enum = []
                    for row in definitions[identifier].values():
                        if 'simulation_rounds' not in row or simulation_round in row['simulation_rounds']:
                            if 'products' not in row or product in row['products']:
                                if product.endswith('InputData'):

                                    if 'categories' not in row or category in row['categories']:
                                        enum.append(row.get('specifier_file') or row.get('specifier'))
                                else:
                                    sector = schema_path_components[3]
                                    if 'sectors' not in row or sector in row['sectors']:
                                        enum.append(row.get('specifier_file') or row.get('specifier'))

                    properties['enum'] = list(set(enum))

            # step 5: write json schema
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(json.dumps(schema, indent=2))


if __name__ == "__main__":
    main()
