import json
import os
import subprocess


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json').read())
    products = json.loads(open('definitions/product.json').read())
    sectors = json.loads(open('definitions/sector.json').read())

    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    for simulation_round in simulation_rounds:
        for product in products:
            for sector in sectors:
                pattern_path = os.path.join('patterns', '{}.json'.format(sector['specifier']))
                output_path = os.path.join('output', 'pattern', simulation_round['specifier'],
                                           product['specifier'], '{}.json'.format(sector['specifier']))

                # create a pattern json from scratch
                pattern_json = {
                    'commit': commit,
                    'path': [
                        '(?P<simulation_round>[A-Za-z0-9]+)',
                        '(?P<product>[A-Za-z]+)',
                        '(?P<sector>[a-z0-9-_]+)',
                        '(?P<model>[A-Za-z0-9-+.]+)',
                        '(?P<climate_forcing>[a-z0-9-]+)',
                        '(?P<period>[a-z0-9-_]+)'
                    ],
                    'dataset': [],
                    'file': [],
                }

                # step 2: open and read pattern
                with open(pattern_path) as f:
                    pattern = json.loads(f.read())
                    pattern_json['dataset'] = pattern[:-2]
                    pattern_json['file'] = pattern

                # step 3: write json file
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                with open(output_path, 'w') as f:
                    f.write(json.dumps(pattern_json, indent=2))


if __name__ == "__main__":
    main()
