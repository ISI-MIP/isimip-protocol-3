import json
import os

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
            sectors = row.get('sectors')
            if sectors:
                for key, value in row.items():
                    if isinstance(value, dict):
                        for sector in value:
                            assert sector in sectors, row.get('specifier')
