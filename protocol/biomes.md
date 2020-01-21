# ISIMIP3b protocol - Biomes

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', sector, {
    'Essential output': [
        'tsl',
        'cveg',
        'cvegag',
        'cvegbg',
        'clitter',
        'csoil',
        'gpp',
        'ra',
        'npp',
        'rh',
        'fireint',
        'firefrac',
        'ecoatmflux',
        'fapar',
        'lai',
        'pft',
        'soilmost',
        'soilmostfroz',
        'snd',
        'thawdepth',
        'swe',
        'qtot'
    ],
    'Optional output': [
        'cleaf',
        'cwood',
        'croot',
        'clitter',
        'csoil',
        'burntarea'
    ]
}) }}

{% include 'includes/04.file_conventions.md' %}