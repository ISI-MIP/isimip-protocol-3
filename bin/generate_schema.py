import argparse
import json
import os


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('product', type=str, help='product to process')
    parser.add_argument('sectors', type=str, nargs='+', help='sectors to process')

    args = parser.parse_args()

    for sector in args.sectors:
        input_path = os.path.join('schema', args.product, '{}.json'.format(sector))
        output_path = os.path.join('output/schema', args.product, '{}.json'.format(sector))

        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        # step 1: open input schema
        with open(input_path) as f:
            schema = json.loads(f.read())

        # step 2: loop over properties/identifiers/properties and add enums from definition files
        for identifier, properties in schema['properties']['identifiers']['properties'].items():
            definition_path = os.path.join('definitions', '{}.json'.format(identifier))

            try:
                with open(definition_path) as f:
                    for row in json.loads(f.read()):
                        if 'sectors' not in row or sector in row['sectors']:
                            properties['enum'].append(row['specifier'])

            except IOError:
                pass

        # step 3: write json schema
        with open(output_path, 'w') as f:
            f.write(json.dumps(schema, indent=2))


if __name__ == "__main__":
    main()
