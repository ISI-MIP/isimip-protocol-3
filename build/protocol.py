import json
import os
import re
import subprocess
from collections import OrderedDict
from datetime import datetime

from jinja2 import Environment, FileSystemLoader, Template
from markdown import markdown
from markdown.extensions.toc import TocExtension

URL = 'https://github.com/ISI-MIP/isimip-protocol-3'


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json').read())
    sectors = json.loads(open('definitions/sector.json').read())
    sectors.append({
        'title': 'all sectors combined',
        'specifier': 'index'
    })

    commit_hash = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()
    commit_url = URL + '/commit/' + commit_hash
    commit_date = subprocess.check_output(['git', 'show', '-s', '--format=%ci', 'HEAD']).decode().strip()
    commit_date = datetime.strptime(commit_date, '%Y-%m-%d %H:%M:%S %z').strftime('%d %B %Y')

    for simulation_round in simulation_rounds:
        for sector in sectors:
            protocol_path = os.path.join('protocol', '00.base.md')
            pattern_path = os.path.join('pattern', simulation_round['specifier'],
                                        'OutputData', '{}.json'.format(sector['specifier']))
            output_path = os.path.join('output/protocol', simulation_round['specifier'],
                                       '{}.html'.format(sector['specifier']))
            layout_path = os.path.join('templates', 'layout.html')

            os.makedirs(os.path.dirname(output_path), exist_ok=True)

            # step 1: open and read protocol
            with open(protocol_path) as f:
                template_string = f.read()

            # step 1: open and read protocol
            with open(pattern_path) as f:
                pattern_list = json.loads(f.read())
                pattern = '_'.join(pattern_list) + '.nc'
                pattern_simple = get_pattern_simple(pattern_list)

            # step 2: render the template using jinja2
            enviroment = Environment(loader=FileSystemLoader(['bibliography', 'protocol', 'templates']))
            template = enviroment.from_string(template_string)
            md = template.render(simulation_round=simulation_round, sector=sector,
                                 pattern=pattern, pattern_simple=pattern_simple,
                                 commit_url=commit_url, commit_hash=commit_hash, commit_date=commit_date,
                                 table=Table(simulation_round, sector, Counter()))

            # step 3: convert markdown to html
            html = markdown(md, extensions=['fenced_code', TocExtension(toc_depth='2-3')])

            # step 4: render content into layout template
            with open(layout_path) as f:
                template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)
            with open(output_path, 'w') as f:
                f.write(template.render(content=html, simulation_round=simulation_round, sector=sector,
                                        commit_url=commit_url, commit_hash=commit_hash, commit_date=commit_date))


def get_pattern_simple(pattern_list):
    # sorry fo this ...
    pattern_simple_list = []
    for p in pattern_list:
        p = re.sub(r'\[.*?\]\+', '', p)
        p = re.sub(r'\([a-z\|]*?\)', '', p)
        p = p.replace('\d{4}', '')
        p = p.replace('P', '').replace('?', '')
        p = p.replace('(<', '<').replace('>)', '>')

        pattern_simple_list.append(p)

    return '_'.join(pattern_simple_list) + '.nc'


class Table(object):

    def __init__(self, simulation_round, sector, counter):
        self.simulation_round = simulation_round
        self.sector = sector
        self.counter = counter

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
                if 'sectors' not in row or self.sector['specifier'] in row['sectors'] or self.sector['specifier'] == 'index':
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
                                table[group].append(self.get_row(row))
                                rows.remove(row)
                                break
                else:
                    # if specifiers is None or [], add everything
                    table[group] = [self.get_row(row) for row in rows]
                    rows = []

            # append everything which was not appended yet in a special group 'Other'
            if rows:
                table['Other'] = [self.get_row(row) for row in rows]

        elif isinstance(order, list):
            # if order is a list, it determines the order of rows
            table = []
            for specifier in order:
                # loop over rows, add row to table and remove it from rows
                for row in rows:
                    if specifier == row['specifier']:
                        table.append(self.get_row(row))
                        rows.remove(row)
                        break

                # append everything which was not appended yet at the end
                table += [self.get_row(row) for row in rows]

        else:
            # if order is not given, just use the rows in the order of the file
            table = [self.get_row(row) for row in rows]

        with open(template_path) as f:
            template = Template(f.read(), trim_blocks=True, lstrip_blocks=True, autoescape=True)

        return template.render(table=table, counter=self.counter, markdown=markdown,
                               simulation_round=self.simulation_round, sector=self.sector)

    def get_row(self, row):
        values = {}
        for key, value in row.items():
            if isinstance(value, dict):
                values[key] = value.get(self.simulation_round['specifier']) or \
                                 value.get(self.sector['specifier'])

                if values[key] is None:
                    values[key] = value
            else:
                values[key] = value

        return values


class Counter(object):

    def __init__(self):
        self.counter = 0

    def __call__(self):
        self.counter += 1
        return self.counter


if __name__ == "__main__":
    main()
