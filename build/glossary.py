from pathlib import Path

from utils import clean_dict, get_commit_hash, read_definitions, setup_logs, write_json

setup_logs()


def main():
    glossary = {
        'commit': get_commit_hash(),
        'terms': {},
    }

    for identifier, rows in read_definitions().items():
        if identifier not in glossary['terms']:
            glossary['terms'][identifier] = {}

        for row in rows:
            specifier = row.pop('specifier')
            specifier_file = row.pop('specifier_file', None)

            glossary['terms'][identifier][specifier_file or specifier] = clean_dict(
                {
                    'title': row.get('title_glossary') or row.get('title'),
                    'long_name': row.get('long_name'),
                    'description': row.get('description'),
                    'warning': row.get('warning'),
                    'urls': row.get('urls'),
                }
            )

    glossary_path = Path('output') / 'glossary.json'
    write_json(glossary_path, glossary)


if __name__ == '__main__':
    main()
