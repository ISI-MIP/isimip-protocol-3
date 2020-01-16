ISIMIP3b protocol - Agriculture
===============================

Scenario specification
----------------------

{{ table('scenarios', sector) }}

Forcing data
------------

### Climate forcing data

{{ table('climate_forcing', sector) }}

### Socio-economic forcing data

Output data
-----------

### Output variables

{{ table('variable', sector, {
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
        'tnloss'
    ]
}) }}

### Conventions for File Names and Formats

{% include 'includes/file_conventions.md' %}
