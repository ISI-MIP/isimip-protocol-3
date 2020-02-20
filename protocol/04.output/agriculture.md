### Output variables

{{ table('variable', {
    'Key model output': [
        'yield',
        'pirrww'
    ],
    'Key diagnostic variables': [
        'aet',
        'initr',
        'plantday',
        'anthday',
        'matyday'
    ],
    'Additional output variables (optional)': [
        'biom',
        'sco2',
        'sn2o',
        'tnup',
        'tnin',
        'tnloss',
        'sumt',
        'gsrsds',
        'gsprcp',
        'leach'
    ]
}) }}

### Crop priority and naming

{{ table('crop', {
    'Major crops': [
        'whe', 'mai', 'soy', 'ric'
    ],
    'Other crops': None
}) }}

### Irrigation

{{ table('irrigation') }}

### Harmonization

{{ table('harmonization') }}

### Reporting per growing seasons

To resolve potential double harvests within one year, crop yields should be reported per growing season and not per calendar year. Thus, in the NetCDF output files, do not use a time dimension but instead a unitless coordinate variable with integer values; more information on how to construct these files is given below and on the ISIMIP website (<https://www.isimip.org/protocol/preparing-simulation-files/>).

Cumulative growing season variables such as, e.g., actual evapotranspiration or precipitation are to be accumulated over the growing season. The first season in the file (level=0) is then the first complete growing season of the time period provided by the input data without any assumed spin-up data, which equates to the growing season with the first planting after this date. To ensure that data can be matched to individual years in post-processing, it is essential to also provide the actual planting dates (as day of the year), actual planting years (year), anthesis dates (as day of the year), year of anthesis (year), maturity dates (day of the year), and year of maturity (year). This procedure is identical to the GGCMI convention (Elliott, et al., 2015).
