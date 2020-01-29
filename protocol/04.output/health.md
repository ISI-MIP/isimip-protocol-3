### Output variables

{{ table('variable', {
    'Key variables': [
        'ancold',
        'anheat',
        'btm',
        'pop'
    ]
}) }}


Additional instructions:

* If different realizations of the model are applied, then these should be indicated by the specifier `<r>`.
    E.g. to reflect a central, upper, and lower estimate of the ERF: `<r> = lower, central, upper`.
    Please explain the meaning of these realizations in the online model documentation; contact the ISIMIP coordination team in case of questions.
* If data are disaggregated e.g. by age group, gender, etc., they should be reported along an additional
    dimension, described by an auxiliary coordinate variable, in the NetCDF files. See the example provided
    at <https://www.isimip.org/protocol/preparing-simulation-files/>.
* For local (non-gridded) data, locations (cities/regions/countries) should be reported along an additional
    dimension called location, with the location name given as string in an auxiliary coordinate variable
    called location_name, in the NetCDF files. In addition, coordinates of the location should be reported
    in auxiliary variables called location_lat and location_lon. See the example provided at
    <https://www.isimip.org/protocol/preparing-simulation-files/>. The `<region>` specifier in the
    file name should be set to `local`. For gridded data, the `<region>` specifier in the file name 
    should be `global` or indicate a region or country.
