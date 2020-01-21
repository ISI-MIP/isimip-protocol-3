import json
import os


def test_definitions():
    path = 'definitions'
    for file_name in os.listdir(path):
        file_path = os.path.join(path, file_name)

        with open(file_path) as f:
            rows = json.loads(f.read())

            assert isinstance(rows, list), file_name

            specifiers = []
            for row in rows:
                assert isinstance(row, dict), file_name

                if 'specifier' in row:
                    specifiers.append(row['specifier'])

            seen = set()
            doubles = []
            for specifier in specifiers:
                if specifier in seen:
                    doubles.append(specifier)
                else:
                    seen.add(specifier)

            assert not doubles, '{} {}'.format(file_name, doubles)
