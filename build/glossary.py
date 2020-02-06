import json
import os
import subprocess


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    # create glossary
    glossary = {
        'commit': commit,
        'terms': {}
    }

    directory = 'definitions'
    for file_name in os.listdir(directory):
        file_path = os.path.join(directory, file_name)
        identifier = os.path.splitext(file_name)[0]

        if identifier not in glossary['terms']:
            glossary['terms'][identifier] = {}

        with open(file_path) as f:
            rows = json.loads(f.read())

        for row in rows:
            specifier = row.pop('specifier')
            glossary['terms'][identifier][specifier] = row

    glossary_path = os.path.join('output', 'glossary.json')
    os.makedirs(os.path.dirname(glossary_path), exist_ok=True)

    with open(glossary_path, 'w') as f:
        f.write(json.dumps(glossary, indent=2))


if __name__ == "__main__":
    main()
