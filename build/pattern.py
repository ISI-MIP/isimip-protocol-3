import json
import os
from pathlib import Path

from utils import get_commit_hash, write_json


def main():
    for root, dirs, files in os.walk('pattern'):
        for file_name in files:
            pattern_path = Path(root) / file_name
            output_path = Path('output') / pattern_path

            # create a pattern json from scratch
            pattern_json = {
                'commit': get_commit_hash()
            }

            # step 2: open and read pattern
            with open(pattern_path, encoding='utf-8') as f:
                pattern = json.loads(f.read())

                path = pattern.get('path') or [
                    "(?P<simulation_round>[A-Za-z0-9]+)",
                    "(?P<product>[A-Za-z]+)",
                    "(?P<sector>[a-z0-9-_]+)",
                    "(?P<model>[A-Za-z0-9-+._]+)",
                    "(?P<climate_forcing>[a-z0-9-]+)",
                    "(?P<period>[a-z0-9-_]+)"
                ]
                dataset = pattern.get('dataset') or pattern['file'][:-2]
                file = pattern['file']
                suffix = pattern.get('suffix') or ['.nc']

                pattern_json['path'] = '/'.join(path) + '$'
                pattern_json['dataset'] = '^' + '_'.join(dataset)
                pattern_json['file'] = '^' + '_'.join(file) + '({})'.format('|'.join(suffix))
                pattern_json['suffix'] = suffix
                pattern_json['specifiers'] = pattern.get('specifiers', {})
                pattern_json['specifiers_map'] = pattern.get('specifiers_map', {})

            # step 3: write json file
            write_json(output_path, pattern_json)


if __name__ == "__main__":
    main()
