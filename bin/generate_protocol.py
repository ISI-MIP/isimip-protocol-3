import argparse
import json
import os
import subprocess

from jinja2 import Environment, FileSystemLoader, Template
from markdown import markdown


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('sectors', type=str, nargs='+', help='sectors to process')

    args = parser.parse_args()

    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode()

    for sector in args.sectors:
        input_path = os.path.join('protocol', '{}.md'.format(sector))
        output_path = os.path.join('output/protocol', '{}.html'.format(sector))
        layout_path = os.path.join('templates', 'layout.html')

        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        # step 1: open protocol and render using jinja2
        with open(input_path) as f:
            template_string = f.read()

        # step 2: render the template using jinja2
        enviroment = Environment(loader=FileSystemLoader(['protocol', 'templates']))
        template = enviroment.from_string(template_string)
        md = template.render(sector=sector, definition=Definition())

        # step 3: convert markdown to html
        html = markdown(md)

        # step 4: render content into layout template
        with open(layout_path) as f:
            template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)
        with open(output_path, 'w') as f:
            f.write(template.render(sector=sector, content=html, commit=commit))


class Definition(object):

    def __call__(self, sector, template):
        definition_path = os.path.join('definitions', '{}.json'.format(template))
        template_path = os.path.join('templates', 'definitions', '{}.html'.format(template))

        with open(definition_path) as f:
            rows = []
            for row in json.loads(f.read()):
                if 'sectors' not in row or sector in row['sectors']:
                    rows.append(row)

        with open(template_path) as f:
            template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)

        return template.render(rows=rows)


if __name__ == "__main__":
    main()
