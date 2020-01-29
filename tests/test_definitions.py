import json
import os

import jsonschema


def test_definitions():
    with open(os.path.join(os.path.dirname(__file__), 'meta.json')) as f:
        schema = json.loads(f.read())

    path = 'definitions'
    for file_name in os.listdir('definitions'):
        file_path = os.path.join(path, file_name)

        with open(file_path) as f:
            instance = json.loads(f.read())

            # validate json with meta json
            jsonschema.validate(schema=schema, instance=instance)

            # check for double specifiers
            seen = set()
            doubles = []
            for row in instance:
                if row['specifier'] in seen:
                    doubles.append(row['specifier'])
                else:
                    seen.add(row['specifier'])

            assert not doubles, '{} {}'.format(file_name, doubles)
