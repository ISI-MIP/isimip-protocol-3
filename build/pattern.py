import json
import os
import subprocess


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    for root, dirs, files in os.walk('pattern'):
        for file_name in files:
            pattern_path = os.path.join(root, file_name)
            output_path = pattern_path.replace('pattern', os.path.join('output', 'pattern'))

            # create a pattern json from scratch
            pattern_json = {
                'commit': commit
            }

            # step 2: open and read pattern
            with open(pattern_path, encoding='utf-8') as f:
                pattern = json.loads(f.read())

                path = pattern.get('path') or [
                    "(?P<simulation_round>[A-Za-z0-9]+)",
                    "(?P<product>[A-Za-z]+)",
                    "(?P<sector>[a-z0-9-_]+)",
                    "(?P<model>[A-Za-z0-9-+.]+)",
                    "(?P<climate_forcing>[a-z0-9-]+)",
                    "(?P<period>[a-z0-9-_]+)"
                ]
                dataset = pattern.get('dataset') or pattern['file'][:-2]
                file = pattern['file']
                suffix = pattern.get('suffix') or ['.nc']

                pattern_json['path'] = os.path.sep.join(path) + '$'
                pattern_json['dataset'] = '^' + '_'.join(dataset)
                pattern_json['file'] = '^' + '_'.join(file) + '({})'.format('|'.join(suffix))
                pattern_json['suffix'] = suffix

            # step 3: write json file
            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(json.dumps(pattern_json, indent=2))


if __name__ == "__main__":
    main()
