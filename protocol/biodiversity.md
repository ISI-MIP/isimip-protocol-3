# {{ simulation_round.title }} simulation protocol - {{ sector.title }}

{% include 'includes/00.introduction.md' %}

{% include 'includes/01.scenario.md' %}

{% include 'includes/02.forcing.md' %}

Output data
-----------

### Output variables

{{ table('variable', {
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

{% include 'includes/04.file_conventions.md' %}
