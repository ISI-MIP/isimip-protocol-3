from pathlib import Path

from utils import filter_row, filter_rows, get_commit_hash, read_definitions, setup_logs, write_json

setup_logs()


def main():
    commit_hash = get_commit_hash()

    definitions = read_definitions()
    simulation_rounds = [definition['specifier'] for definition in definitions['simulation_round']]
    products = [definition['specifier'] for definition in definitions['product']]
    categories = [definition['specifier'] for definition in definitions['category']]
    sectors = [definition['specifier'] for definition in definitions['sector']]

    for simulation_round in simulation_rounds:
        for product in products:
            if product.endswith('InputData'):
                for category in categories:
                    output_path = (
                        Path('output')
                        .joinpath('definitions')
                        .joinpath(simulation_round)
                        .joinpath(product)
                        .joinpath(category)
                        .with_suffix('.json')
                    )

                    output_definitions = {'commit': commit_hash}
                    for definition_name, rows in definitions.items():
                        output_definitions[definition_name] = []
                        for row in filter_rows(rows, simulation_round, product, category=category):
                            output_definitions[definition_name].append(
                                filter_row(row, simulation_round, product, category=category)
                            )

                    write_json(output_path, output_definitions)

            else:
                for sector in sectors:
                    output_path = (
                        Path('output')
                        .joinpath('definitions')
                        .joinpath(simulation_round)
                        .joinpath(product)
                        .joinpath(sector)
                        .with_suffix('.json')
                    )

                    output_definitions = {'commit': commit_hash}
                    for definition_name, rows in definitions.items():
                        output_definitions[definition_name] = []
                        for row in filter_rows(rows, simulation_round, product, sector=sector):
                            output_definitions[definition_name].append(
                                filter_row(row, simulation_round, product, sector=sector)
                            )

                    write_json(output_path, output_definitions)


if __name__ == '__main__':
    main()
