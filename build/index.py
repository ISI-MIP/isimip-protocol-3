import json
import os
import subprocess
from datetime import datetime

from jinja2 import Environment, FileSystemLoader

URL = 'https://github.com/ISI-MIP/isimip-protocol-3'


def main():
    simulation_rounds = json.loads(open('definitions/simulation_round.json').read())
    products = json.loads(open('definitions/product.json').read())
    sectors = json.loads(open('definitions/sector.json').read())

    commit_hash = subprocess.check_output(['git', 'rev-parse', 'HEAD']).decode().strip()
    commit_url = URL + '/commit/' + commit_hash
    commit_date = subprocess.check_output(['git', 'show', '-s', '--format=%ci', 'HEAD']).decode().strip()
    commit_date = datetime.strptime(commit_date, '%Y-%m-%d %H:%M:%S %z').strftime('%d %B %Y')

    # step 1: create hierarchy of simulation_rounds, products, and sectors
    pages = []
    for simulation_round in simulation_rounds:
        simulation_round['sectors'] = sectors
        simulation_round['products'] = []

        for product in products:
            product['sectors'] = sectors
            simulation_round['products'].append(product)

        pages.append(simulation_round)

    # step 2: render content into layout template
    template_path = os.path.join('templates', 'index.html')
    output_path = os.path.join('output', 'index.html')
    enviroment = Environment(loader=FileSystemLoader(['templates']))
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(template_path) as f:
        template = enviroment.from_string(f.read())
    with open(output_path, 'w') as f:
        f.write(template.render(commit_url=commit_url, commit_hash=commit_hash, commit_date=commit_date,
                                pages=pages))


if __name__ == "__main__":
    main()
