from pathlib import Path

from utils import get_commit_hash, read_definitions, write_json


def main():
    glossary = {
        'commit': get_commit_hash(),
        'terms': {}
    }

    for identifier, rows in read_definitions().items():
        if identifier not in glossary['terms']:
            glossary['terms'][identifier] = {}

        for row in rows:
            specifier = row.pop('specifier')
            glossary['terms'][identifier][specifier] = row

    glossary_path = Path('output') / 'glossary.json'
    write_json(glossary_path, glossary)


if __name__ == "__main__":
    main()
