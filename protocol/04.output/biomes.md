### Output variables

{{ table('variable', {
    'Carbon Pools': [
        'cveg',
        'cvegag',
        'cvegbg',
        'csoil',
        'clitter',
        'clitterag',
        'clitterbg',
        'cproduct'
    ],
    'Carbon Fluxes': [
        'gpp',
        'npp',
        'nbp',
        'ra',
        'rh',
        'rr',
        'ffire',
        'fluc',
        'fgrazing',
        'fcropharvest',
        'flitter',
        'flittersoil',
        'fvegsoil'
    ],
    'Vegetation Cover & Structure': [
        'fapar',
        'lai',
        'pft',
        'tsl',
        'burntarea'
    ],
    'Hydrological variables': [
        'evap',
        'intercep',
        'esoil',
        'trans',
        'qtot',
        'qs',
        'soilmoist',
        'soilmoistfroz',
        'snd',
        'swe',
        'thawdepth'
    ],
    'Agricultural variables': [
        'yield',
        'plantday',
        'plantyear',
        'anthday',
        'anthyear',
        'matyday',
        'harvyear',
        'initrcum',
        'biom',
        'sco2',
        'sn2o'
    ],
    'Optional output': [
        'cleaf',
        'cwood',
        'croot',
        'ccwd'
    ],
}) }}

### Information about PFT-specific outputs

* Unless otherwise defined, variables in ISIMIP should be reported relative to the grid cell land area.
* The output provided per Plant Functional Type (PFT) should be expressed relative to the respective PFT area so that e.g. sum(gpp-pft\*pft-pft)=gpp-total.
* When your model allows several PFTs to grow on the same area and hence the total cover fraction can be more than one, please scale the PFT area to one and report this step in the model documentation on the ISIMIP homepage.
* When your model grows the same PFT on different land-use classes, e.g. the same c3-grass represents grasses growing on natural grasslands, pasture and possible even as crop, please differentiate this in your output by defining land-use specific PFT such as c3-grass-pasture, c3-grass-natural, c3-grass-crop and report this in model documentation on the ISIMIP homepage.
