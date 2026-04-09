import json
import logging
from pathlib import Path

from utils import get_commit_hash, setup_logs, write_json

setup_logs()


def main():
    for tree_path in Path('tree').rglob('**/*.json'):
        output_path = Path('output') / tree_path

        # open and read tree
        logging.debug('read %s', tree_path)
        with open(tree_path, encoding='utf-8') as f:
            identifiers = json.loads(f.read())

        # create tree dict
        tree = {
            'commit': get_commit_hash(),
            'identifiers': [identifier.replace(' ', '') for identifier in identifiers],
        }

        # write tree as json
        write_json(output_path, tree)


if __name__ == '__main__':
    main()
