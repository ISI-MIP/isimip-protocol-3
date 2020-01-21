# {{ simulation_round.title }} simulation protocol - {{ sector.title }}

{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', {
    'Key variable': [
        'tsl'
    ],
    'Pools (as in Biomes sector)': [
        'cveg',
        'cvegag',
        'cvegbg',
        'clitter',
        'csoil'
    ],
    'Fluxes (as in Biomes sector)': [
        'gpp',
        'ra',
        'npp',
        'rh',
        'fireint',
        'firefrac',
        'ecoatmflux'
    ],
    'Structure (as in Biomes sector)': [
        'fapar',
        'lai',
        'pft',
        'soilmoist',
        'soilmoistfroz',
        'snd',
        'thawdepth',
        'swe',
        'qtot'
    ],
    'Optional outputs': [
        'cleaf',
        'cwood',
        'croot',
        'burntarea'
    ]
}) }}

{% include 'includes/04.file_conventions.md' %}
