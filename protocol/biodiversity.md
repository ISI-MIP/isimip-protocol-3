ISIMIP3b protocol - Terrestrial biodiversity
============================================

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
    'Species probability of occurrence': [
        'amphibianprob',
        'birdprob',
        'mammalprob'
    ],
    'Summed probability of occurrence': [
        'amphibiansumprob',
        'birdsumprob',
        'mammalsumprob'
    ],
    'Endemic summed probability of occurrence': [
        'endamphibiansumprob',
        'endbirdsumprob',
        'endmammalsumprob'
    ],
    'Threatened summed probability of occurrence': [
        'thramphibiansumprob',
        'thrbirdsumprob',
        'thrmammalsumprob'
    ],
    'Species richness': [
        'amphibiansr',
        'birdsr',
        'mammalsr'
    ]
}) }}

### Conventions for File Names and Formats

{% include 'includes/file_conventions.md' %}
