import os
import re
from pathlib import Path

from utils import get_commit_hash, write_json, read_yaml_file


def main():
    for root, dirs, files in os.walk('pattern'):
        for file_name in files:
            pattern_path = Path(root) / file_name
            output_path = (Path('output') / pattern_path).with_suffix('.json')

            # create a pattern json from scratch
            pattern_json = {
                'commit': get_commit_hash()
            }

            # step 2: open and read pattern
            pattern = read_yaml_file(pattern_path)

            suffix = pattern.get('suffix') or ['.nc']

            path_pattern = pattern.get('path', '''
                (?P<simulation_round>[A-Za-z0-9]+)
                /(?P<product>[A-Za-z]+)
                /(?P<sector>[a-z0-9-_]+)
                /(?P<model>[A-Za-z0-9-+._]+)
                /(?P<climate_forcing>[a-z0-9-]+)
                /(?P<period>[a-z0-9-_]+)
            ''') + '$'
            dataset_pattern = '^' + pattern['dataset']
            file_pattern = '^' + pattern['file'] + '(' + '|'.join(suffix) + ')$'

            # remove whitespaces
            path_pattern = re.sub(r'\s+', '', path_pattern)
            dataset_pattern = re.sub(r'\s+', '', dataset_pattern)
            file_pattern = re.sub(r'\s+', '', file_pattern)

            pattern_json = {
                'path': path_pattern,
                'dataset': dataset_pattern,
                'file': file_pattern,
                'suffix': suffix,
                'specifiers': pattern.get('specifiers', {}),
                'specifiers_map': pattern.get('specifiers_map', {})
            }

            # step 3: write json file
            write_json(output_path, pattern_json)


if __name__ == "__main__":
    main()
