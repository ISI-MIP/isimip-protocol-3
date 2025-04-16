import argparse
import csv
import yaml
import sys
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('group')

args = parser.parse_args()

variables = []
for file_path in Path('definitions/variable').iterdir():
    with open(file_path) as fp:
        variables += yaml.safe_load(fp)

rows = []
for variable in variables:
    sectors = variable.get('sectors', [])
    if not sectors or args.group in sectors:
        rows.append([
            variable.get('specifier', ''),
            variable.get('long_name', ''),
            variable.get('units', ''),
            ', '.join(sectors),
            variable.get('frequency', ''),
            variable.get('valid_min', ''),
            variable.get('valid_max', ''),
            variable.get('comment', '')
        ])

writer = csv.writer(sys.stdout, quoting=csv.QUOTE_MINIMAL)
writer.writerows(rows)
