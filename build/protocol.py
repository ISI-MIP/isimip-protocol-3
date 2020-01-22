import json
import os
import subprocess
from collections import OrderedDict
from datetime import datetime

from jinja2 import Environment, FileSystemLoader, Template
from markdown import markdown

URL = 'https://github.com/ISI-MIP/isimip-protocol-3b'


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json').read())
    sectors = json.loads(open('definitions/sector.json').read())

    commit_hash = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()
    commit_url = URL + '/commit/' + commit_hash
    commit_date = subprocess.check_output(['git', 'show', '-s', '--format=%ci', 'HEAD']).decode().strip()
    commit_date = datetime.strptime(commit_date, '%Y-%m-%d %H:%M:%S %z').strftime('%d %B %Y')

    for simulation_round in simulation_rounds:
        for sector in sectors:
            input_path = os.path.join('protocol', '{}.md'.format(sector['specifier']))
            output_path = os.path.join('output/protocol', simulation_round['specifier'], '{}.html'.format(sector['specifier']))
            layout_path = os.path.join('templates', 'layout.html')

            os.makedirs(os.path.dirname(output_path), exist_ok=True)

            # step 1: open protocol and render using jinja2
            with open(input_path) as f:
                template_string = f.read()

            # step 2: render the template using jinja2
            enviroment = Environment(loader=FileSystemLoader(['protocol', 'templates']))
            template = enviroment.from_string(template_string)
            md = template.render(simulation_round=simulation_round, sector=sector,
                                 table=Table(simulation_round, sector), counter=Counter())

            # step 3: convert markdown to html
            html = markdown(md)

            # step 4: render content into layout template
            with open(layout_path) as f:
                template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)
            with open(output_path, 'w') as f:
                f.write(template.render(simulation_round=simulation_round, sector=sector, content=html,
                                        commit_url=commit_url, commit_hash=commit_hash, commit_date=commit_date))


class Table(object):

    def __init__(self, simulation_round, sector):
        self.simulation_round = simulation_round
        self.sector = sector

    def __call__(self, template, order=None):
        definition_path = os.path.join('definitions', '{}.json'.format(template))
        template_path = os.path.join('templates', 'definitions', '{}.html'.format(template))

        # open the definition file and read in every row from the sector
        with open(definition_path) as f:
            definitions = json.loads(f.read())

        # filter rows by simulation_round and/or sector
        rows = []
        for row in definitions:
            if 'simulation_rounds' not in row or self.simulation_round['specifier'] in row['simulation_rounds']:
                if 'sectors' not in row or self.sector['specifier'] in row['sectors']:
                    rows.append(row)

        # apply order argument
        if isinstance(order, dict):
            # if order is a dict, it determines groups and rows in these groups
            table = OrderedDict()
            for group, specifiers in order.items():
                table[group] = []

                if specifiers:
                    for specifier in specifiers:
                        # loop over rows, add row to group and remove it from rows
                        for row in rows:
                            if specifier == row['specifier']:
                                table_row = {}
                                for key, value in row.items():
                                    if isinstance(value, dict):
                                        table_row[key] = value.get(self.sector['specifier'], '')
                                    else:
                                        table_row[key] = value

                                table[group].append(table_row)
                                rows.remove(row)
                                break
                else:
                    # if specifiers is None or [], add everything
                    table[group] = rows
                    rows = []

            # append everything which was not appended yet in a special group 'Other'
            if rows:
                table['Other'] = rows

        elif isinstance(order, list):
            # if order is a list, it determines the order of rows
            table = []
            for specifier in order:
                # loop over rows, add row to table and remove it from rows
                for row in rows:
                    if specifier == row['specifier']:
                        table.append(row)
                        rows.remove(row)
                        break

                # append everything which was not appended yet at the end
                table += rows

        else:
            # if order is not given, just use the rows in the order of the file
            table = rows

        with open(template_path) as f:
            template = Template(f.read(), trim_blocks=True, lstrip_blocks=True, autoescape=True)

        return template.render(table=table, simulation_round=self.simulation_round, sector=self.sector)


class Counter(object):

    pass


if __name__ == "__main__":
    main()
