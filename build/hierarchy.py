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

    # loop over simulation_round
    for simulation_round in definitions['simulation_round']:
        simulation_round['items'] = []

        # loop over product
        for product in definitions['product']:
            product['items'] = []

            # InputData and SecondaryInputData
            if product['specifier'].endswith('InputData'):
                for category in definitions['category']:
                    category['items'] = []

                    # loop over subcategory
                    for subcategory in definitions['subcategory']:
                        subcategory['items'] = []

                        # only include if subcategory is in category
                        if filter(subcategory, category, 'categories'):
                            # for climate and composition_atmosphere include climate_scenario and climate_forcing layer
                            if category['specifier'] in ['climate', 'composition_atmosphere']:
                                for climate_scenario in definitions['climate_scenario']:
                                    climate_scenario['items'] = []

                                    # only include if climate_scenario is in simulation_round
                                    if filter(climate_scenario, simulation_round, 'simulation_rounds'):

                                        # loop over climate_forcing
                                        for climate_forcing in definitions['climate_forcing']:
                                            climate_forcing['items'] = []

                                            # only include if climate_forcing is in simulation_round
                                            if filter(climate_forcing, simulation_round, 'simulation_rounds') \
                                                    and filter(climate_forcing, product, 'products'):
                                                climate_scenario['items'].append(item(climate_forcing))

                                        subcategory['items'].append(item(climate_scenario))

                            # for socioeconomic include soc_scenario layer
                            elif category['specifier'] in ['socioeconomic']:
                                # skip soc_scenario for reservoirs_dams differently
                                if subcategory['specifier'] not in ['reservoirs_dams']:
                                    # loop over soc_scenario
                                    for soc_scenario in definitions['soc_scenario']:
                                        soc_scenario['items'] = []

                                        # only include if soc_scenario is in simulation_round
                                        if filter(soc_scenario, simulation_round, 'simulation_rounds'):
                                            subcategory['items'].append(item(soc_scenario))

                            # for geo_conditions don't include an additional layer

                            category['items'].append(item(subcategory))

                    product['items'].append(item(category))

            # OutputData and SecondaryOutputData
            # elif product['specifier'].endswith('OutputData'):
            #     for sector in definitions['sector']:
            #         product['items'].append(item(sector))

            simulation_round['items'].append(item(product))

        hierarchy['items'].append(item(simulation_round))

    hierarchy_path = os.path.join('output', 'hierarchy.json')
    os.makedirs(os.path.dirname(hierarchy_path), exist_ok=True)

    with open(hierarchy_path, 'w') as f:
        f.write(json.dumps(hierarchy, indent=2))


def item(definition):
    return {key: definition.get(key) for key in ['title', 'description', 'specifier', 'identifier', 'items']}


def filter(row, filter_row, filter_field):
    # e.g. subcategory.get('categories') or category['specifier'] in subcategory.get('categories')
    return not row.get(filter_field) or filter_row.get('specifier') in row.get(filter_field)


if __name__ == "__main__":
    main()
