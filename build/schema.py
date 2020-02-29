import json
import os
import subprocess

URL = 'https://isi-mip.github.io/isimip-protocol-3/schema/'

MIN_YEAR = 1600
MAX_YEAR = 2100


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json').read())
    products = json.loads(open('definitions/product.json').read())
    sectors = json.loads(open('definitions/sector.json').read())

    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    for simulation_round in simulation_rounds:
        for product in products:
            for sector in sectors:
                schema_path = os.path.join('schema', simulation_round['specifier'],
                                           product['specifier'], '{}.json'.format(sector['specifier']))
                output_path = os.path.join('output', 'schema', simulation_round['specifier'],
                                           product['specifier'], '{}.json'.format(sector['specifier']))

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
                                if 'simulation_rounds' not in row or simulation_round['specifier'] in row['simulation_rounds']:

                                    if 'sectors' not in row or sector['specifier'] in row['sectors']:
                                        enum.append(row['specifier'])

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
