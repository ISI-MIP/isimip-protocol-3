import json
import os
import re
from collections import OrderedDict

from jinja2 import Environment, FileSystemLoader, Template
from markdown import markdown
from markdown.extensions.toc import TocExtension
from utils import (filter_row, filter_rows, get_commit_date, get_commit_hash,
                   read_definitions)

URL = 'https://github.com/ISI-MIP/isimip-protocol-3'


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json', encoding='utf-8').read())
    sectors = json.loads(open('definitions/sector.json', encoding='utf-8').read())
    sectors.append({
        'title': 'all sectors combined',
        'specifier': 'index'
    })

    commit_hash = get_commit_hash()
    commit_date = get_commit_date()
    commit_url = URL + '/commit/' + commit_hash

    definitions = read_definitions()

    for simulation_round in simulation_rounds:
        for sector in sectors:
            if 'simulation_rounds' not in sector or simulation_round['specifier'] in sector['simulation_rounds']:
                protocol_path = os.path.join('protocol', '00.base.md')
                pattern_path = os.path.join('pattern', simulation_round['specifier'],
                                            'OutputData', '{}.json'.format(sector['specifier']))
                output_path = os.path.join('output/protocol', simulation_round['specifier'],
                                           '{}.html'.format(sector['specifier']))
                layout_path = os.path.join('templates', 'layout.html')

                os.makedirs(os.path.dirname(output_path), exist_ok=True)

                # step 1: open and read protocol
                with open(protocol_path, encoding='utf-8') as f:
                    template_string = f.read()

                # step 1: open and read protocol
                with open(pattern_path, encoding='utf-8') as f:
                    pattern_list = json.loads(f.read())['file']
                    pattern = '_'.join(pattern_list) + '.nc'
                    pattern_simple = get_pattern_simple(pattern_list)

                # step 2: render the template using jinja2
                enviroment = Environment(loader=FileSystemLoader(['bibliography', 'protocol', 'templates']))
                template = enviroment.from_string(template_string)
                md = template.render(simulation_round=simulation_round, sector=sector, definitions=definitions,
                                     pattern=pattern, pattern_simple=pattern_simple,
                                     commit_url=commit_url, commit_hash=commit_hash, commit_date=commit_date,
                                     table=Table(simulation_round, sector, Counter()))

                # step 3: convert markdown to html
                html = markdown(md, extensions=['fenced_code', 'attr_list', TocExtension(toc_depth='2-3')])

                # step 4: replace shortcodes
                html = html.replace('[mandatory]', '<span class="badge badge-success">mandatory</span>')

                # step 5: render content into layout template
                with open(layout_path, encoding='utf-8') as f:
                    template = Template(f.read(), trim_blocks=True, lstrip_blocks=True)
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(template.render(content=html, simulation_round=simulation_round, sector=sector, base_path='../..',
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
        p = p.replace('_', '-')
        pattern_simple_list.append(p)

    return '_'.join(pattern_simple_list) + '.nc'


class Table(object):

    def __init__(self, simulation_round, sector, counter):
        self.simulation_round = simulation_round
        self.product = {
            'specifier': 'OutputData'
        }
        self.sector = sector
        self.counter = counter

    def __call__(self, template, order=None):
        definition_path = os.path.join('definitions', '{}.json'.format(template))
        template_path = os.path.join('templates', 'definitions', '{}.html'.format(template))

        simulation_round = self.simulation_round['specifier']
        product = self.product['specifier']
        sector = self.sector['specifier']

        # open the definition file and read in every row from the sector
        with open(definition_path, encoding='utf-8') as f:
            definitions = json.loads(f.read())

        # filter rows by simulation_round, product, and/or sector
        rows = list(filter_rows(definitions, simulation_round, product, sector=sector))

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
                                table[group].append(filter_row(row, simulation_round, product, sector=sector))
                                rows.remove(row)
                                break
                else:
                    # if specifiers is None or [], add everything
                    table[group] = [filter_row(row, simulation_round, product, sector=sector) for row in rows]
                    rows = []

            # append everything which was not appended yet in a special group 'Other'
            if rows:
                table['Other'] = [filter_row(row, simulation_round, product, sector=sector) for row in rows]

        elif isinstance(order, list):
            # if order is a list, it determines the order of rows
            table = []
            for specifier in order:
                # loop over rows, add row to table and remove it from rows
                for row in rows:
                    if specifier == row['specifier']:
                        table.append(filter_row(row, simulation_round, product, sector=sector))
                        rows.remove(row)
                        break

                # append everything which was not appended yet at the end
                table += [filter_row(row, simulation_round, product, sector=sector) for row in rows]

        else:
            # if order is not given, just use the rows in the order of the file
            table = [filter_row(row, simulation_round, product, sector=sector) for row in rows]

        with open(template_path, encoding='utf-8') as f:
            template = Template(f.read(), trim_blocks=True, lstrip_blocks=True, autoescape=True)

        return template.render(table=table, counter=self.counter, markdown=markdown,
                               simulation_round=self.simulation_round, sector=self.sector)


class Counter(object):

    def __init__(self):
        self.counter = 0

    def __call__(self):
        self.counter += 1
        return self.counter


if __name__ == "__main__":
    main()
