import csv
import json
import sys

with open('definitions/experiments.json') as fp:
    experiments = json.load(fp)

with open('definitions/sector.json') as fp:
    sectors_data = json.load(fp)

sectors = [sector['specifier'] for sector in sectors_data]

rows = [[''] + sectors]
for experiment in experiments:
    row = [experiment.get('specifier')]
    for sector in sectors:
        if sector in experiment.get('sectors'):
            row.append('x')
        else:
            row.append('')
    rows.append(row)

writer = csv.writer(sys.stdout)
writer.writerows(rows)
