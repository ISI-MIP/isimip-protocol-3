{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', {
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

{% include 'includes/04.file_conventions.md' %}
