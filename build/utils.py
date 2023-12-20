import csv
import json
import subprocess
from datetime import datetime
from pathlib import Path


def get_commit_hash():
    return subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()


def get_commit_date():
    commit_date = subprocess.check_output(['git', 'show', '-s', '--format=%ci', 'HEAD']).decode().strip()
    return datetime.strptime(commit_date, '%Y-%m-%d %H:%M:%S %z').strftime('%d %B %Y')


def filter_rows(rows, simulation_round, product, category=None, sector=None):
    for row in rows:
        if 'simulation_rounds' not in row or simulation_round in row['simulation_rounds']:
            if 'products' not in row or product in row['products'] \
                    or (simulation_round in row['products'] and product in row['products'][simulation_round]):
                if category is not None:
                    if 'categories' not in row or category in row['categories']:
                        yield row
                elif sector is not None:
                    if 'sectors' not in row or sector == 'index' or sector in row['sectors']:
                        yield row
                else:
                    yield row


def filter_row(row, simulation_round, product, category=None, sector=None):
    values = {}
    for key, value in row.items():
        if isinstance(value, dict):
            values[key] = value.get(simulation_round) or value.get(product)

            if category is not None:
                values[key] = values[key] or value.get(category)

            if sector is not None:
                values[key] = values[key] or value.get(sector)

            if values[key] is None:
                if sector == 'index':
                    # always use the full dict
                    values[key] = value
                else:
                    # try the other key or take the full dict
                    values[key] = value.get('other') or value

        else:
            values[key] = value

    return values


def read_definitions():
    definitions_path = Path('definitions')
    definitions = {}
    for file_path in definitions_path.iterdir():
        with open(file_path, encoding='utf-8') as fp:
            definitions[file_path.stem] = json.loads(fp.read())
    return definitions


def read_patterns(simulation_rounds, sectors):
    patterns = {}

    for simulation_round in simulation_rounds:
        patterns[simulation_round['specifier']] = {}
        for sector in sectors:
            if sector.get('simulation_rounds') is None or simulation_round in sector.get('simulation_rounds'):
                pattern_path = Path('pattern') / simulation_round['specifier'] / 'OutputData' / '{}.json'.format(sector['specifier'])

                try:
                    pattern_list = json.loads(pattern_path.read_text())['file']
                    patterns[simulation_round['specifier']][sector['specifier']] = '_'.join(pattern_list) + '.nc'
                except FileNotFoundError:
                    patterns[simulation_round['specifier']][sector['specifier']] = 'No pattern has been defined for this simulation round and sector, yet.'

    return patterns


def write_json(output_path, output):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as fp:
        fp.write(json.dumps(output, indent=2))


def write_csv(output_path, output, fieldnames):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8', newline='') as fp:
        writer = csv.DictWriter(fp, fieldnames=fieldnames, extrasaction='ignore')
        writer.writeheader()
        writer.writerows(output)
