# {{ simulation_round.title }} simulation protocol - {{ sector.title }}

{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', {
    'Hydrological variables': [
        'qtot',
        'qs',
        'qsb',
        'qr',
        'qg',
        'dis',
        'maxdis',
        'mindis',
        'evap',
        'potevap',
        'soilmoist',
        'rootmoist',
        'soilmoistfroz',
        'tsl',
        'snd',
        'swe',
        'tws',
        'canopystor',
        'glacierstor',
        'groundwstor',
        'lakestor',
        'wetlandstor',
        'reservoirstor',
        'riverstor',
        'thawdepth',
        'triver',
        'rainf',
        'snowf'
    ],
    'Water management variables (for models that consider water management/human impacts)': [
        'pirrww',
        'airrww',
        'pirruse',
        'airruse',
        'airrusegreen',
        'pirrusegreen',
        'arainfusegreen',
        'adomww',
        'adomuse',
        'amanww',
        'amanuse',
        'aelecww',
        'aelecuse',
        'aliveww',
        'aliveuse',
        'atotuse',
        'atotww',
        'ptotww',
        'ptotuse'
    ],
    'Other variables': None
}) }}

### Additional information for regional hydrological models

{{ table('basin') }}

{% include 'includes/04.file_conventions.md' %}
