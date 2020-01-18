ISIMIP3b protocol - Permafrost
==============================

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', sector, {
    'Key variables': [
        'tsl'
        'cveg',
        'cvegag',
        'cvegbg',
        'clitter',
        'csoil'
        'gpp',
        'ra',
        'npp',
        'rh',
        'fireint',
        'firefrac',
        'ecoatmfluxc'
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
        'clitter',
        'csoil',
        'burntarea'
    ]
}) }}

{% include 'includes/04.file_conventions.md' %}
