# {{ simulation_round.title }} simulation protocol - {{ sector.title }}

{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

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
        'tnloss'
    ]
}) }}

#### Crops

{{ table('crop', {
    'Major crops': [
        'whe', 'mai', 'soy', 'ric'
    ],
    'Other crops': None
}) }}

#### Irrigation

{{ table('irrigation') }}

#### Harmonization

{{ table('harmonization') }}

{% include 'includes/04.file_conventions.md' %}
