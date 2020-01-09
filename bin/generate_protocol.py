import argparse
import json
import os
import re

import pypandoc
from jinja2 import Template

pattern = re.compile(r'\[\[\s*(\w+)\s*\]\]')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('sectors', type=str, nargs='+', help='sectors to process')

    args = parser.parse_args()

    for sector in args.sectors:
        input_path = os.path.join('protocol', '{}.md'.format(sector))
        output_path = os.path.join('output/protocol', '{}.html'.format(sector))
        layout_path = os.path.join('templates', 'layout.html')

        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        with open(input_path) as f:
            content = f.read()
            matches = pattern.finditer(content)

            for match in matches:
                template = match.group(1)
                definition_path = os.path.join('definitions', '{}.json'.format(template))
                template_path = os.path.join('templates', 'definitions', '{}.html'.format(template))

                with open(definition_path) as f:
                    rows = []
                    for row in json.loads(f.read()):
                        if 'sectors' not in row or sector in row['sectors']:
                            rows.append(row)

                with open(template_path) as f:
                    template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)

                content = content.replace(match.group(0), template.render(rows=rows))

        html = pypandoc.convert_text(content, 'html', format='md')

        with open(layout_path) as f:
            template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)

        with open(output_path, 'w') as f:
            f.write(template.render(sector=sector, content=html))


if __name__ == "__main__":
    main()
