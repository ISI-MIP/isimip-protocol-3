{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', {
    'Essential outputs': [
        'dbh',
        'dbhdomhei',
        'hei',
        'domhei',
        'density',
        'ba',
        'mort',
        'harv',
        'stemno',
        'vol',
        'cveg',
        'cvegag',
        'cvegbg',
        'clitter',
        'csoil',
        'age',
        'gpp',
        'npp',
        'ra',
        'rh',
        'nee',
        'mai',
        'fapar',
        'lai',
        'species',
        'evap',
        'intercep',
        'esoil',
        'trans',
        'soilmoist'
    ],
    'Optional outputs': [
        'mortstemno',
        'harvstemno',
        'dist',
        'nlit',
        'nsoil',
        'nppleaf',
        'npproot',
        'nppagwood',
        'nppbgwood',
        'rr',
        'cleaf',
        'cwood',
        'croot',
        'tsl'
    ]
}) }}

#### Species

{{ table('species', sector) }}

#### Stands

{{ table('stand', sector) }}

{% include 'includes/04.file_conventions.md' %}
