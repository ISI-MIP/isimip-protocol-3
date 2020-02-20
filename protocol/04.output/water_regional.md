### Output variables

{{ table('variable', {
    'Hydrological variables': [
        'qr',
        'dis',
        'evap',
        'potevap',
        'soilmoist',
        'rootmoist'
    ],
    'Water management variables (for models that consider water management/human impacts)': [
        'pirrww',
        'airrww',
        'pirruse',
        'airruse',
        'airrusegreen',
        'pirrusegreen',
        'arainfusegreen'
    ]
}) }}

### Catchment gauging stations

{{ table('river_basin') }}
