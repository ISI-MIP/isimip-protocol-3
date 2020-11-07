import json
import os
from pathlib import Path

from utils import get_commit_hash, write_json


def main():
    for root, dirs, files in os.walk('tree'):
        for file_name in files:
            tree_path = Path(root) / file_name
            output_path = Path('output') / tree_path

            # step 2: open and read pattern
            with open(tree_path, encoding='utf-8') as f:
                identifiers = json.loads(f.read())

            # create a pattern json from scratch
            tree_json = {
                'commit': get_commit_hash(),
                'identifiers': [identifier.replace(' ', '') for identifier in identifiers]
            }

            # step 3: write json file
            write_json(output_path, tree_json)


if __name__ == "__main__":
    main()
