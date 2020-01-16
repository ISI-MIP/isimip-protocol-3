ISIMIP3b protocol - Permafrost
==============================

Scenario specification
----------------------

{{ table('scenarios', sector) }}

Forcing data
------------

### Climate forcing data

{{ table('climate_forcing', sector) }}

### Socio-economic forcing data

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

### Conventions for File Names and Formats

{% include 'includes/file_conventions.md' %}
