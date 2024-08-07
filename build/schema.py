import json
import os
from pathlib import Path

from utils import filter_rows, get_commit_hash, read_definitions, read_yaml_file, write_json

URL = 'https://protocol.isimip.org/schema/'
EXCLUDE = ['model']


def main():
    definitions = read_definitions()

    for root, dirs, files in os.walk('schema'):
        for file_name in files:
            schema_path = Path(root) / file_name
            schema_path_components = schema_path.with_suffix('').parts
            output_path = (Path('output') / schema_path).with_suffix('.json')

            simulation_round = schema_path_components[1]
            product = schema_path_components[2]
            if product.endswith('InputData'):
                category = schema_path_components[3]
                sector = None
            else:
                category = None
                sector = schema_path_components[3]

            # step 1: read schema template
            schema_template = read_yaml_file(schema_path)

            schema = {
                '$schema': 'http://json-schema.org/draft-07/schema#',
                '$id': URL + schema_path.as_posix(),
                'commit': get_commit_hash()
            }
            schema.update(schema_template)

            # step 2: loop over properties/specifiers/properties and add enums from definition files
            for identifier, properties in schema['properties']['specifiers']['properties'].items():
                if identifier in definitions:
                    if identifier not in EXCLUDE:
                        rows = definitions[identifier]
                        enum = []
                        if product.endswith('InputData'):
                            for row in filter_rows(rows, simulation_round, product, category=category):
                                enum.append(row.get('specifier_file') or row.get('specifier'))
                        elif product == 'DerivedOutputData':
                            for row in filter_rows(rows, simulation_round, product):
                                enum.append(row.get('specifier_file') or row.get('specifier'))
                        else:
                            for row in filter_rows(rows, simulation_round, product, sector=sector):
                                enum.append(row.get('specifier_file') or row.get('specifier'))

                        properties['enum'] = list(set(enum))

            # step 3: write json schema
            write_json(output_path, schema)


if __name__ == "__main__":
    main()
