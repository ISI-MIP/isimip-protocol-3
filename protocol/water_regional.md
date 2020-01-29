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

### Catchment gauging stations

{{ table('basin') }}

#### Crop priority and naming

The reporting of the crop yield-related outputs differs from the reporting of other variables in the water sector, as it is not done according to calendar years but according to growing seasons to resolve potential multiple harvests. See the [agriculture](agriculture.html) sector for details.

Simulations should be provided for the four major crops (wheat, maize, soy, and rice) but output for other crops and also bioenergy crops is highly welcome, too.

{{ table('crop', {
    'Major crops': [
        'whe', 'mai', 'soy', 'ric'
    ],
    'Other crops': None
}) }}

Yields simulations provided in the water sector should account for irrigation water constraints. For each crop, yields should be reported separately for irrigated land (`cirr` for *constrained irrigation*) and rainfed land (`noirr`). This complements the full irrigation (`firr`) pure crop runs requested in the agriculture part of the protocol.

{{ table('irrigation') }}

Those models that cannot simulate time varying management/human impacts/fertilizer input should keep these fixed at year 2000 levels throughout the simulations.

{% include 'includes/04.file_conventions.md' %}
