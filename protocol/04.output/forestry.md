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
    'Additional variables': [
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
        'tsl',
        'clitterag',
        'clitterbg',
        'cproduct',
        'ccwd'
    ],
    'Static output': [
        'soil'
    ]
}) }}

### Species

{{ table('species') }}

### Forest stands

{{ table('forest_stand') }}
