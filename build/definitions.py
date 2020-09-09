import json
import os
from pathlib import Path


def main():
    directory = Path('definitions')
    definitions = {}
    for file_name in os.listdir(directory):
        file_path = directory / file_name

        with open(file_path, encoding='utf-8') as f:
            definitions[file_path.stem] = json.loads(f.read())

    simulation_rounds = [definition['specifier'] for definition in definitions['simulation_round']]
    products = [definition['specifier'] for definition in definitions['product']]
    categories = [definition['specifier'] for definition in definitions['category']]
    sectors = [definition['specifier'] for definition in definitions['sector']]

    for simulation_round in simulation_rounds:
        for product in products:
            if product.endswith('InputData'):
                for category in categories:
                    output_path = Path('output').joinpath('definitions') \
                                                .joinpath(simulation_round).joinpath(product).joinpath(category) \
                                                .with_suffix('.json')

                    output_definitions = {}
                    for definition_name, rows in definitions.items():
                        output_definitions[definition_name] = []
                        for row in rows:
                            if 'simulation_rounds' not in row or simulation_round in row['simulation_rounds']:
                                if 'products' not in row or product in row['products']:
                                    if 'categories' not in row or category in row['categories']:
                                        output_definitions[definition_name].append(row)

                    output_path.parent.mkdir(parents=True, exist_ok=True)
                    with open(output_path, 'w', encoding='utf-8') as f:
                        f.write(json.dumps(output_definitions, indent=2))

            else:
                for sector in sectors:
                    output_path = Path('output').joinpath('definitions') \
                                                .joinpath(simulation_round).joinpath(product).joinpath(sector) \
                                                .with_suffix('.json')

                    output_definitions = {}
                    for definition_name, rows in definitions.items():
                        output_definitions[definition_name] = []
                        for row in rows:
                            if 'simulation_rounds' not in row or simulation_round in row['simulation_rounds']:
                                if 'products' not in row or product in row['products']:
                                    if 'sectors' not in row or sector in row['sectors']:
                                        output_definitions[definition_name].append(row)

                    output_path.parent.mkdir(parents=True, exist_ok=True)
                    with open(output_path, 'w', encoding='utf-8') as f:
                        f.write(json.dumps(output_definitions, indent=2))


if __name__ == "__main__":
    main()
