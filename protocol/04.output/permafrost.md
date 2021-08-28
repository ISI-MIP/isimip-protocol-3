### Output variables

{{ table('variable', {
    'Key permafrost physical variables': [
        'tsl',
        'snd',
        'swe',
        'soilmoist',
        'soilmoistfroz',
        'wetlandfrac',
        'landalbedo',
        'qtot',
        'thawdepth'
    ],
    'Carbon pools': [
        'cveg',
        'cvegag',
        'cvegbg',
        'clitter',
        'clitterag',
        'clitterbg',
        'csoil',
        'csoillayer',
        'cproduct',
        'cleaf',
        'cwood',
        'croot',
        'ccwd'
    ],
    'Nitrogen pools': [
        'nveg',
        'nvegag',
        'cvegbg',
        'nlitterag',
        'nlitterbg',
        'nmineral',
        'nsoil',
        'nproduct'
    ],
    'Carbon fluxes': [
        'gpp',
        'npp',
        'rh',
        'rhlayer',
        'wetlandch4',
        'ch4',
        'rsoil',
        'verticalcflux',
        'ffire',
        'fluc',
        'flitter',
        'flittersoil',
        'flittersoillayer',
        'rlitter',
        'fvegsoil',
        'fvegsoillayer',
        'fgrazing',
        'fcropharvest'
    ],
    'Nitrogen fluxes': [
        'fngasfire',
        'fngas',
        'fnleach',
        'fnproduct',
        'fnanthdisturb',
        'fnveglitter',
        'fnvegsoil',
        'fnlittersoil',
        'fbnf',
        'fnnetmin',
        'fndep',
        'fnfert',
        'fnh3',
        'fn2o',
        'nloss',
        'nleach',
        'fnfert'
        ],
    'Vegetation cover and structure': [
        'fapar',
        'lai',
        'pft',
        'burntarea'
    ],
    'Hydrological variables': [
        'evap',
        'potevap',
        'intercep',
        'esoil',
        'trans',
        'qs',
        'qsb',
        'dis',
        'tws',
        'doc'
    ]
}) }}

### Information about PFT-specific outputs

* Unless otherwise defined, variables in ISIMIP should be reported relative to the grid cell land area.
* The output provided per Plant Functional Type (PFT) should be expressed relative to the respective PFT area so that e.g. sum(gpp-pft\*pft-pft)=gpp-total.
* When your model allows several PFTs to grow on the same area and hence the total cover fraction can be more than one, please scale the PFT area to one and report this step in the model documentation on the ISIMIP homepage.
* When your model grows the same PFT on different land-use classes, e.g. the same c3-grass represents grasses growing on natural grasslands, pasture and possible even as crop, please differentiate this in your output by defining land-use specific PFT such as c3-grass-pasture, c3-grass-natural, c3-grass-crop and report this in model documentation on the ISIMIP homepage.
