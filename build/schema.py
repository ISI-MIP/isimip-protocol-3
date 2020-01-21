import json
import os
import subprocess

IDENTIFIERS = [
    'basin',
    'bias_correction',
    'climate_forcing',
    'climate_scenario',
    'co2sens_scenario',
    'crop',
    'harmonization',
    'irrigation',
    'lake',
    'ocean',
    'product',
    'sector',
    'simulation_round',
    'soc_scenario',
    'species',
    'stand',
    'timestep',
    'variable'
]


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json').read())
    products = json.loads(open('definitions/product.json').read())
    sectors = json.loads(open('definitions/sector.json').read())

    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    for simulation_round in simulation_rounds:
        for product in products:
            for sector in sectors:
                # create a json schema from scratch
                schema = {
                    '$schema': 'http://json-schema.org/draft-07/schema#',
                    '$id': 'http://schema.isimip.org/schema/{}/{}/{}.json'.format(
                        simulation_round['specifier'],
                        product['specifier'],
                        sector['specifier']
                    ),
                    'commit': commit,
                    'type': 'object',
                    'properties': {
                        'identifiers': {
                            'properties': {}
                        }
                    }
                }

                # step 2: loop over properties/identifiers/properties and add enums from definition files
                for identifier in IDENTIFIERS:
                    definition_path = os.path.join('definitions', '{}.json'.format(identifier))

                    try:
                        with open(definition_path) as f:
                            enum = []
                            for row in json.loads(f.read()):
                                if 'simulation_rounds' not in row or simulation_round['specifier'] in row['simulation_rounds']:
                                    if 'sectors' not in row or sector['specifier'] in row['sectors']:
                                        enum.append(row['specifier'])

                            schema['properties']['identifiers']['properties'][identifier] = {
                                'type': 'string',
                                'enum': enum
                            }

                    except IOError:
                        pass

                # step 3: write json schema
                schema_path = os.path.join('output', 'schema', simulation_round['specifier'],
                                           product['specifier'], '{}.json'.format(sector['specifier']))

                os.makedirs(os.path.dirname(schema_path), exist_ok=True)

                with open(schema_path, 'w') as f:
                    f.write(json.dumps(schema, indent=2))


if __name__ == "__main__":
    main()
