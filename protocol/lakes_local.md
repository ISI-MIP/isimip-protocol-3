{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', {
    'Hydrothermal Variables': [
        'strat',
        'thermodepth',
        'watertemp',
        'surftemp',
        'bottemp',
        'ice',
        'lakeicefrac',
        'icethick',
        'snowthick',
        'icetemp',
        'snowtemp',
        'sensheatf',
        'latentheatf',
        'momf',
        'swup',
        'lwup',
        'lakeheatf',
        'turbdiffheat',
        'albedo',
        'extcoeff',
        'sedheatf'
    ],
    'Water Quality Variables': [
        'chl',
        'phytobio',
        'zoobio',
        'tp',
        'pp',
        'tpd',
        'tn',
        'pn',
        'tdn',
        'do',
        'doc',
        'si'
    ]
}) }}

### Lake sites

{{ table('lake') }}

{% include 'includes/04.file_conventions.md' %}
