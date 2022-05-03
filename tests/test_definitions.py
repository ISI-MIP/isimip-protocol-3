import json
import os

from pathlib import Path

import jsonschema


def test_definitions():
    with open(os.path.join(os.path.dirname(__file__), 'meta.json')) as f:
        schema = json.loads(f.read())

    for file_name in os.listdir('definitions'):
        file_path = os.path.join('definitions', file_name)

        with open(file_path) as f:
            instance = json.loads(f.read())

            # validate json with meta json
            jsonschema.validate(schema=schema, instance=instance)


def test_double_specifiers():
    for file_name in os.listdir('definitions'):
        if file_name not in ['subcategory.json']:
            file_path = os.path.join('definitions', file_name)

            with open(file_path) as f:
                instance = json.loads(f.read())

                # check for double specifiers
                seen = set()
                doubles = []
                for row in instance:
                    if row['specifier'] in seen:
                        doubles.append(row['specifier'])
                    else:
                        seen.add(row['specifier'])

                assert not doubles, '{} {}'.format(file_name, doubles)


def test_variable():
    file_path = os.path.join('definitions', 'variable.json')
    with open(file_path) as f:
        instance = json.loads(f.read())
        for row in instance:
            sectors = row.get('sectors') + ['other']
            if sectors:
                for key, value in row.items():
                    if isinstance(value, dict):
                        field = '{}.{}'.format(row.get('specifier'), key)

                        for sector in value:
                            assert sector in sectors, field


def test_dataset_groups():
    for file in ['soc_dataset.json', 'geo_dataset.json']:
        groups = json.loads(Path('definitions').joinpath('group.json').read_text())
        datasets = json.loads(Path('definitions').joinpath(file).read_text())

        group_specifiers = [group['specifier'] for group in groups]

        for dataset in datasets:
            group = dataset.get('group')
            assert group, dataset.get('specifier')
            assert group in group_specifiers


def test_variable_groups():
    groups = json.loads(Path('definitions').joinpath('group.json').read_text())
    variables = json.loads(Path('definitions').joinpath('variable.json').read_text())

    group_specifiers = [group['specifier'] for group in groups]

    for variable in variables:
        group = variable.get('group')
        assert group, variable.get('specifier')
        assert group in group_specifiers
