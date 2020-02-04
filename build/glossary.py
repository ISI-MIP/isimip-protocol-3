import json
import os
import subprocess
from collections import OrderedDict


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    terms = {}
    directory = 'definitions'
    for file_name in os.listdir(directory):
        file_path = os.path.join(directory, file_name)
        identifier = os.path.splitext(file_name)[0]

        with open(file_path) as f:
            rows = json.loads(f.read())

            for row in rows:
                specifier = row.pop('specifier')
                if row:
                    row['identifier'] = identifier

                    if specifier not in terms:
                        terms[specifier] = []

                    terms[specifier].append(row)

    sorted_terms = OrderedDict(sorted([(key, terms[key]) for key in sorted(terms.keys())]))

    # create glossary
    glossary = OrderedDict()
    glossary['commit'] = commit
    glossary['terms'] = sorted_terms

    glossary_path = os.path.join('output', 'glossary.json')
    os.makedirs(os.path.dirname(glossary_path), exist_ok=True)

    with open(glossary_path, 'w') as f:
        f.write(json.dumps(glossary, indent=2))


if __name__ == "__main__":
    main()
