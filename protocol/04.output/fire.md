### Output variables

{{ table('variable', {
    'Key variables': [
      'burntarea',
      'ffire'
    ],
    'Other fire variables': [
      'burntarealuc',
      'ffirepeat',
      'ffireluc',
      'fireints',
      'cfuel',
      'ccfuel',
      'mfuel',
      'firenr',
      'firenrperc95',
      'firemortality',
      'firesize',
      'firesizeperc95',
      'fireduration',
      'fireros',
      'ignhuman',
      'ignlight'
    ],
    'Pools (as in Biomes sector)': [
      'cveg',
      'clitterag',
      'clitterbg',
      'csoil'
    ],
    'Fluxes': [
        'gpp',
        'npp',
        'nbp',
        'ra',
        'rh',
        'fluc',
        'fgrazing',
        'fcropharvest',
        'flitter',
        'flittersoil',
        'fvegsoil',
        'sensheatf'
    ],
    'Vegetation Cover & Structure & land surface': [
        'fapar',
        'lai',
        'pft',
        'tsl',
        'landalbedo',
        'canopyheight',
        'lowcover',
        'highcover'
    ],
    'Hydrological variables (as in biomes sector)': [
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
    ]
}) }}

### Information about PFT-specific outputs

* Unless otherwise defined, variables in ISIMIP should be reported relative to the grid cell land area.
* The output provided per Plant Functional Type (PFT) should be expressed relative to the respective PFT area so that e.g. sum(gpp-pft\*pft-pft)=gpp-total.
* When your model allows several PFTs to grow on the same area and hence the total cover fraction can be more than one, please scale the PFT area to one and report this step in the model documentation on the ISIMIP homepage.
* When your model grows the same PFT on different land-use classes, e.g. the same c3-grass represents grasses growing on natural grasslands, pasture and possible even as crop, please differentiate this in your output by defining land-use specific PFT such as c3-grass-pasture, c3-grass-natural, c3-grass-crop and report this in model documentation on the ISIMIP homepage.
