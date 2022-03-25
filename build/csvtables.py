from pathlib import Path

from utils import (filter_row, filter_rows, read_definitions, write_csv)


def main():
    definitions = read_definitions()

    simulation_rounds = [definition['specifier'] for definition in definitions['simulation_round']]
    sectors = [definition['specifier'] for definition in definitions['sector']]
    groups = [definition['specifier'] for definition in definitions['group']]

    for simulation_round in simulation_rounds:
        for sector in sectors:
            output_path = Path('output').joinpath('csv') \
                                        .joinpath(simulation_round).joinpath('OutputData').joinpath(sector) \
                                        .with_suffix('.csv')

            variable_definitions = []
            variable_fieldnames = ['group', 'specifier', 'long_name', 'units', 'resolution', 'frequency',
                                   'valid_min', 'valid_max', 'comment']
            for row in filter_rows(definitions['variable'], simulation_round, 'OutputData', sector=sector):
                variable_definitions.append(filter_row(row, simulation_round, 'OutputData', sector=sector))

            # sort by group
            variable_definitions = sorted(variable_definitions, key=lambda v: groups.index(v['group']))

            write_csv(output_path, variable_definitions, variable_fieldnames)


if __name__ == "__main__":
    main()
