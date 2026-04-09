import re
from pathlib import Path

from utils import get_commit_hash, read_yaml_file, setup_logs, write_json

setup_logs()


def main():
    for pattern_path in Path('pattern').rglob('**/*.yaml'):
        output_path = (Path('output') / pattern_path).with_suffix('.json')

        # open and read pattern
        pattern = read_yaml_file(pattern_path)

        suffix = pattern.get('suffix') or ['.nc']

        default_path_pattern = """
            (?P<simulation_round>[A-Za-z0-9]+)
            /(?P<product>[A-Za-z]+)
            /(?P<sector>[a-z0-9-_]+)
            /(?P<model>[A-Za-z0-9-+._]+)
            /(?P<climate_forcing>[a-z0-9-]+)
            /(?P<period>[a-z0-9-_]+)"""

        path_pattern = pattern.get('path', default_path_pattern) + '$'
        dataset_pattern = '^' + pattern['dataset']
        file_pattern = '^' + pattern['file'] + '(' + '|'.join(suffix) + ')$'

        # remove whitespaces
        path_pattern = re.sub(r'\s+', '', path_pattern)
        dataset_pattern = re.sub(r'\s+', '', dataset_pattern)
        file_pattern = re.sub(r'\s+', '', file_pattern)

        pattern_dict = {
            'commit': get_commit_hash(),
            'path': path_pattern,
            'dataset': dataset_pattern,
            'file': file_pattern,
            'suffix': suffix,
            'specifiers': pattern.get('specifiers', {}),
            'specifiers_map': pattern.get('specifiers_map', {}),
        }

        # write pattern as json
        write_json(output_path, pattern_dict)


if __name__ == '__main__':
    main()
