import json

from pathlib import Path

import jsonschema
import yaml


def read_file(file_path):
    if file_path.suffix == '.json':
        return json.loads(file_path.read_text(encoding='utf-8'))
    elif file_path.suffix == '.yaml':
        return [
            dict(specifier=specifier, **definition)
            for specifier, definition in yaml.safe_load(file_path.read_text(encoding='utf-8')).items()
        ]
    else:
        raise AssertionError()


def read_instance(file_path):
    if file_path.is_dir():
        instance = []
        for group_path in file_path.iterdir():
            instance += [
                dict(group=group_path.stem, **definition)
                for definition in read_file(group_path)
            ]
        return instance
    else:
        return read_file(file_path)


def test_definitions():
    with Path(__file__).parent.joinpath('meta.json').open() as fp:
        schema = json.load(fp)

    for file_path in Path('definitions').iterdir():
        # read the instance
        instance = read_instance(file_path)

        # validate json with meta json
        jsonschema.validate(schema=schema, instance=instance)


def test_double_specifiers():
    for file_path in Path('definitions').iterdir():
        if file_path.stem not in ['subcategory']:
            # read the instance
            definitions = read_instance(file_path)

            # check for double specifiers
            seen = set()
            doubles = []
            for definition in definitions:
                if definition['specifier'] in seen:
                    doubles.append(definition['specifier'])
                else:
                    seen.add(definition['specifier'])

            assert not doubles, '{} {}'.format(file_path, doubles)


def test_variable():
    simulation_rounds = read_instance(Path('definitions') / 'simulation_round.json')
    simulation_round_specifiers = [simulation_round['specifier'] for simulation_round in simulation_rounds]

    # read the instance
    instance = read_instance(Path('definitions') / 'variable.json')

    for row in instance:
        sectors = row.get('sectors') + ['other']
        if sectors:
            for key, value in row.items():
                if isinstance(value, dict):
                    field = '{}.{}'.format(row.get('specifier'), key)
                    for key in value:
                        if key in simulation_round_specifiers:
                            for k in value[key]:
                                assert k in sectors, field
                        else:
                            assert key in sectors, field


def test_dataset_groups():
    for file in ['soc_dataset.json', 'geo_dataset.json']:
        groups = read_instance(Path('definitions') / 'group.json')
        datasets = read_instance(Path('definitions') / file)

        group_specifiers = [group['specifier'] for group in groups]

        for dataset in datasets:
            group = dataset.get('group')
            assert group, dataset.get('specifier')
            assert group in group_specifiers


def test_variable_groups():
    groups = read_instance(Path('definitions') / 'group.json')
    variables = read_instance(Path('definitions') / 'variable.json')

    group_specifiers = [group['specifier'] for group in groups]

    for variable in variables:
        group = variable.get('group')
        assert group, variable.get('specifier')
        assert group in group_specifiers


def test_nested_simulation_rounds():
    simulation_rounds = read_instance(Path('definitions') / 'simulation_round.json')
    simulation_round_specifiers = [simulation_round['specifier'] for simulation_round in simulation_rounds]

    for file_path in Path('definitions').iterdir():
        if file_path.name not in ['experiments.json']:
            # read the instance
            instance = read_instance(file_path)

            for row in instance:
                simulation_rounds = row.get('simulation_rounds', simulation_round_specifiers)
                for value in row.values():
                    if isinstance(value, dict):
                        if simulation_rounds[0] in value.keys():
                            # assert that all (both simulation_round_specifiers) are there
                            for simulation_round in simulation_rounds[1:]:
                                assert simulation_round in value.keys(), row.get('specifier')
