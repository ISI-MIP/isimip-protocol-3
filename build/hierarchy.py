import json
import os
import subprocess
from pathlib import Path


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    # create glossary
    hierarchy = {
        'commit': commit,
        'items': []
    }

    definitions = {}
    for file_name in os.listdir('definitions'):
        file_path = Path('definitions') / file_name
        identifier = file_path.stem
        definitions[identifier] = json.loads(open(file_path).read())
        for row in definitions[identifier]:
            row['identifier'] = identifier

    for simulation_round in definitions['simulation_round']:
        simulation_round['items'] = []

        for product in definitions['product']:
            product['items'] = []

            if product['specifier'].endswith('InputData'):
                for category in definitions['category']:
                    category['items'] = []

                    for subcategory in definitions['subcategory']:
                        subcategory['items'] = []

                        if filter(subcategory, category, 'categories'):
                            if category['specifier'] in ['climate', 'composition_atmosphere']:

                                for climate_scenario in definitions['climate_scenario']:
                                    if filter(climate_scenario, simulation_round, 'simulation_rounds'):
                                        climate_scenario['items'] = []

                                        for climate_forcing in definitions['climate_forcing']:
                                            if filter(climate_forcing, simulation_round, 'simulation_rounds') \
                                                    and filter(climate_forcing, product, 'products'):
                                                climate_scenario['items'].append(item(climate_forcing))

                                        subcategory['items'].append(item(climate_scenario))

                            category['items'].append(item(subcategory))

                    product['items'].append(item(category))

            else:
                for sector in definitions['sector']:
                    product['items'].append(item(sector))

            simulation_round['items'].append(item(product))

        hierarchy['items'].append(item(simulation_round))

    hierarchy_path = os.path.join('output', 'hierarchy.json')
    os.makedirs(os.path.dirname(hierarchy_path), exist_ok=True)

    with open(hierarchy_path, 'w') as f:
        f.write(json.dumps(hierarchy, indent=2))


def item(definition):
    return {key: definition.get(key) for key in ['title', 'specifier', 'identifier', 'items']}


def filter(row, filter_row, filter_field):
    # e.g. subcategory.get('categories') or category['specifier'] in subcategory.get('categories')
    return not row.get(filter_field) or filter_row.get('specifier') in row.get(filter_field)


if __name__ == "__main__":
    main()
