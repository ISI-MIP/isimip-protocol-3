import argparse

import yaml

parser = argparse.ArgumentParser()
parser.add_argument('file_path')

args = parser.parse_args()

try:
    from netCDF4 import Dataset
except ImportError:
    parser.error('No module named "netCDF4" Use "pip install netCDF4" to install it.')

definitions = []
with Dataset(args.file_path) as ds:
    for variable_name, variable in ds.variables.items():
        definition = {
            'specifier': variable_name
        }

        for attribute_name in ['long_name', 'units']:
            if attribute_name in variable.ncattrs():
                definition[attribute_name] = variable.getncattr(attribute_name)

        definitions.append(definition)

yaml_string = yaml.dump(definitions, sort_keys=False)
yaml_string = yaml_string.replace('\n- ', '\n\n- ')

print(yaml_string)
