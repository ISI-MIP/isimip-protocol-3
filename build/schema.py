import json
import os
import subprocess
from pathlib import Path

URL = 'https://isi-mip.github.io/isimip-protocol-3/schema/'

CONSTANTS = {
    'ISIMIP3a': {
        'reference_dates': [
            "%s since 1901-01-01",
            "%s since 1901-01-01 00:00:00",
            "%s since 1901-1-1",
            "%s since 1901-1-1 00:00:00"
        ],
        'min_year': 1901,
        'max_year': 2018
    },
    'ISIMIP3b': {
        'reference_dates': [
            "%s since 1661-01-01",
            "%s since 1661-01-01 00:00:00",
            "%s since 1661-1-1",
            "%s since 1661-1-1 00:00:00"
        ],
        'min_year': 1601,
        'max_year': 2100
    }
}

DIMENSIONS = {
  "type": "object",
  "required": [
    "lat",
    "lon",
    "time"
  ],
  "properties": {
    "lat": {
      "const": 360
    },
    "lon": {
      "const": 720
    }
  }
}

VARIABLES = {
    "type": "object",
    "required": ["lat", "lon", "time"],
    "properties": {
        "lat": {
            "type": "object",
            "required": ["axis", "long_name", "units"],
            "properties": {
                "axis": {
                    "const": "Y"
                },
                "units": {
                    "const": "degrees_north"
                }
            }
        },
        "lon": {
            "type": "object",
            "required": ["axis", "long_name", "units"],
            "properties": {
                "axis": {
                    "const": "X"
                },
                "units": {
                    "const": "degrees_east"
                }
            }
        },
        "time": {
            "type": "object",
            "required": ["long_name", "units"],
            "properties": {
                "axis": {
                    "const": "T"
                },
                "units": {
                    "enum": []
                }
            }
        }
    }
}


def main():
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()

    # step 0: read all definitions
    definitions = {}
    for file_name in os.listdir('definitions'):
        file_path = Path('definitions') / file_name
        identifier = file_path.stem
        definitions[identifier] = json.loads(open(file_path).read())

    for root, dirs, files in os.walk('schema'):
        for file_name in files:
            schema_path = Path(root) / file_name
            schema_path_components = schema_path.with_suffix('').parts
            output_path = Path('output') / schema_path

            simulation_round = schema_path_components[1]
            product = schema_path_components[2]
            if product in ['OutputData', 'SecondaryOutputData']:
                sector = schema_path_components[3]
            else:
                sector = None

            # step 1: read schema template
            with open(schema_path) as f:
                schema = json.loads(f.read())
                schema['commit'] = commit

            # step 2: add dimensions to schema
            schema['properties']['dimensions'] = DIMENSIONS

            # step 3: add variables to schema
            schema['properties']['variables'] = VARIABLES

            # step 3b: update time/properties/unit/enum
            reference_dates = []
            for increment in [row.get('increment') for row in filter(definitions['timestep'], simulation_round, product, sector)]:
                for reference_date_pattern in CONSTANTS[simulation_round]['reference_dates']:
                    reference_dates.append(reference_date_pattern % increment)
            schema['properties']['variables']['properties']['time']['properties']['units']['enum'] = reference_dates

            # step 4: loop over properties/specifiers/properties and add enums from definition files
            for identifier, properties in schema['properties']['specifiers']['properties'].items():
                if properties['type'] == 'string':
                    if identifier in definitions:
                        enum = []
                        for row in filter(definitions[identifier], simulation_round, product, sector):
                            enum.append(row.get('specifier_file') or row.get('specifier'))

                        properties['enum'] = list(set(enum))

                elif properties['type'] == 'number':
                    if product in ['OutputData', 'SecondaryOutputData']:
                        properties['minimum'] = CONSTANTS[simulation_round]['min_year']
                        properties['maximum'] = CONSTANTS[simulation_round]['max_year']

            # step 5: write json schema
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(json.dumps(schema, indent=2))


def filter(rows, simulation_round, product, sector=None):
    for row in rows:
        if 'simulation_rounds' not in row or simulation_round in row['simulation_rounds']:
            if 'products' not in row or product in row['products']:
                if sector is not None:
                    if 'sectors' not in row or sector in row['sectors']:
                        yield row
                else:
                    yield row


if __name__ == "__main__":
    main()
