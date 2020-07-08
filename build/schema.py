import json
import os
import subprocess

URL = 'https://isi-mip.github.io/isimip-protocol-3/schema/'

MIN_YEAR = 1600
MAX_YEAR = 2100


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    for root, dirs, files in os.walk('schema'):
        for file_name in files:
            schema_path = os.path.join(root, file_name)
            schema_path_components = schema_path.split(os.sep)
            output_path = schema_path.replace('schema', os.path.join('output', 'schema'))

            # step 1: read schema template
            with open(schema_path) as f:
                schema = json.loads(f.read())
                schema['commit'] = commit

            # step 2: loop over properties and add enums from definition files
            for identifier, properties in schema['properties'].items():
                definition_path = os.path.join('definitions', '{}.json'.format(identifier))

                if properties['type'] == 'string':
                    if os.path.exists(definition_path):
                        with open(definition_path) as f:
                            rows = json.loads(f.read())

                        enum = []
                        for row in rows:
                            identifier = None
                            simulation_round = schema_path_components[1]
                            if 'simulation_rounds' not in row or simulation_round in row['simulation_rounds']:
                                product = schema_path_components[2]
                                if 'products' not in row or product in row['products']:
                                    if product.startswith('OutputData'):
                                        sector = schema_path_components[3]
                                        if 'sectors' not in row or sector in row['sectors']:
                                            identifier = row.get('identifier') or row.get('specifier')
                                    else:
                                        identifier = row.get('identifier') or row.get('specifier')

                            if identifier and identifier not in enum:
                                enum.append(identifier)

                        properties['enum'] = enum

                elif properties['type'] == 'number':
                    properties['minimum'] = MIN_YEAR
                    properties['maximum'] = MAX_YEAR

            # step 3: write json schema
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            with open(output_path, 'w') as f:
                f.write(json.dumps(schema, indent=2))


if __name__ == "__main__":
    main()
