ISIMIP3b protocol - Fisheries and Marine Ecosystems
===================================================

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
    'Mandatory output from global and regional models (provide as many as possible)': [
        'tsb',
        'tcb',
        'b10cm',
        'b30cm',
        'tc',
        'tla'
    ],
    'Optional output from global and regional models': [
        'bcom',
        'blarge',
        'bmed',
        'bsmall',
        'b',
        'clarge',
        'cmed',
        'csmall',
        'c',
        'tc10cm',
        'tc30cm'
    ]
}) }}

### Conventions for File Names and Formats

{% include 'includes/file_conventions.md' %}
