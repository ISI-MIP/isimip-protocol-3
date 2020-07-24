### Output variables

{{ table('variable', {
    'Hydrological variables': [
        'qtot',
        'qs',
        'qsb',
        'qr',
        'qg',
        'dis',
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
        'ptotuse',
        'pdomww',
        'pdomuse',
        'pmanww',
        'pmanuse',
        'pelecww',
        'pelecuse',
        'pliveww',
        'pliveuse',
        'ainduse',
        'aindww'
    ],
    'Agricultural variables': [
        'yield',
        'plantday',
        'plantyear',
        'anthday',
        'anthyear',
        'matyday',
        'matyyear',
        'initr',
        'biom',
        'sco2',
        'sn2o'
    ],
    'Static output': [
        'soil',
        'lai',
        'cellarea',
        'contfrac'
    ]
}) }}

### Instructions on agricultural outputs

#### Crop types

The reporting of the crop yield-related outputs differs from the reporting of other variables in the water sector, as it is not done according to calendar years but according to growing seasons to resolve potential multiple harvests. See the [agriculture](agriculture.html) sector for details.

Simulations should be provided for the four major crops (wheat, maize, soy, and rice) but output for other crops and also bioenergy crops is highly welcome, too.

{{ table('crop', {
    'Major crops': [
        'whe', 'mai', 'soy', 'ric'
    ],
    'Other crops': None
}) }}

#### Irrigation water constraints

Yields simulations provided in the water sector should account for irrigation water constraints. For each crop, yields should be reported separately for irrigated land (`cirr` for *constrained irrigation*) and rainfed land (`noirr`). This complements the full irrigation (`firr`) pure crop runs requested in the agriculture part of the protocol.

{{ table('irrigation') }}
