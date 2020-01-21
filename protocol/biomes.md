# ISIMIP3b protocol - Biomes

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', sector, {
    'Pools': [
        'cveg',
        'cvegag',
        'cvegbg',
        'clitter',
        'csoil'
    ],
    'Fluxes': [
        'gpp',
        'ra',
        'npp',
        'npplandleaf',
        'npplandroot',
        'nppabovegroundwood',
        'nppbelowgroundwood',
        'rh',
        'fireint',
        'firefrac',
        'ecoatmflux',
        'rr'
    ],
    'Structure': [
        'fapar',
        'lai',
        'pft'
    ],
    'Hydrological variables': [
        'evap',
        'intercep',
        'esoil',
        'trans',
        'qtot',
        'qs',
        'soilmoist',
        'soilmoistfroz',
        'snd',
        'swe',
        'thawdepth'
    ],
    'Optional output': [
        'cleaf',
        'cwood',
        'croot'
    ],
    'Other variables': [
        'tsl',
        'burntarea'
    ]
}) }}

{% include 'includes/04.file_conventions.md' %}