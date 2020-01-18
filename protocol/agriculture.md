ISIMIP3b protocol - Agriculture
===============================

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

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

{% include 'includes/04.file_conventions.md' %}
