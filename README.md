ISIMIP3b protocol
=================

[![Build Status](https://travis-ci.org/ISI-MIP/isimip-protocol-3.svg?branch=master)](https://travis-ci.org/ISI-MIP/isimip-protocol-3)

This project builds sector-specific ISIMIP protocols from a common data source.
Machine-readable data is under [definitions](definitions/), and text under [protocol](protocol/).

The rendered protocols are found at https://isi-mip.github.io/isimip-protocol-3.

You can clone this repository and work and render the files locally as documented below.
You can also edit the markdown files at github directly. With a delay of minutes,
your updates will be visible at `https://isi-mip.github.io/isimip-protocol-3/protocol/<simulation_round>/<sector>.html`.

As a rule, the sector-specific text should be kept to a minimum and cover
as much structure as possible by machine-readable code under [definitions](definitions/).


Setup
-----

```bash
pip install -r requirements.txt
```

Editing
-------

Edit the markdown files for each sector under [protocol](protocol). Common included files are located under [protocol/include](protocol/include).

Tables are rendered using the table macro `{{ table(name, order) }}`. This macro combines a json file in `definitions/<name>.json` and a template in `templates/<name>.html`. If the second argument to table is a dict (`{ ... }`), e.g.:

```
{{ table('variable', {
    'Key model output': [
        'yield',
        'pirrww'
    ],
    'Key diagnostic variables': [
        'aet',
        'initr',
        'plantday',
        'anthday',
        'matyday'
    ],
    'Additional output variables (optional)': [
        'biom',
        'sco2',
        'sn2o',
        'tnup',
        'tnin',
        'tnloss'
    ]
}) }}
```

it will create a table with group headers. If the second argument is a list (`[ ... ]`), e.g.:

```
{{ table('variable', [
    'yield',
    'pirrww'
] }}
```

it will use the given order of specifiers to create the table. If no second argument is provided, it will use the order from the json file.

The definition json files themselves are lists of json objects. Every json object should have an attribute `specifier` which is used to refer to it in other objects/tables but also in file names. An example for a relatively simple definition file is [definitions/bias_correction.json](definitions/bias_correction.json):

```
[
  {
    "specifier": "nobc",
    "description": "Indicates that no bias correction was performed on the climate data (e.g. ocean data)."
  },
  {
    "specifier": "localbc",
    "description": "Refers to local data from weather stations used for the bias-correction in e.g. the forest sector.",
    "sectors": [
      "forestry"
    ]
  },
  {
    "specifier": "ewembi",
    "description": "Refers to EWEMBI data used for the bias-correction globally on a 0.5° grid."
  },
  {
    "specifier": "ewembi-isimip3basd",
    "description": "Refers to EWEMBI data used for the bias-correction globally on a 0.5°, using improved bias-correction methods (Lange 2018, doi: 10.5194/esd-9-627-2018), and with statistical downscaling (instead of interpolation) of GCM data to the 0.5° grid prior to bias-correction."
  }
]
```

Here `localbc` only applies to the `forestry` sector, while the other objects are used in every sector. The longest and most complicated definition is [definitions/variable.json](definitions/variable.json):

```
[
  {
    "specifier": "qtot",
    "title": "Runoff",
    "unit": "kg m-2 s-1",
    "resolution": "grid cell",
    "frequency": {
      "biomes": "monthly",
      "permafrost": "monthly",
      "water_global": "daily",
      "water_regional": "daily"
    },
    "comment": "Total runoff leaving the land portion of the grid cell",
    "sectors": [
      "water_global",
      "water_regional",
      "biomes",
      "permafrost"
    ]
  },

  ...
]
```

Some attributes (e.g. `frequency`) can have objects as value, which the are evaluated for the particular sector. For reference, the full list for `simulation_rounds` and `sectors` are:

```
"simulation_rounds": [
  "ISIMIP3a",
  "ISIMIP3b"
],
```

```
"sectors": [
  "agriculture",
  "biodiversity",
  "biomes",
  "coastal",
  "diarrhea",
  "energy",
  "forestry",
  "health",
  "labour",
  "lakes_global",
  "lakes_local",
  "marine-fishery_global",
  "marine-fishery_regional",
  "permafrost",
  "water_global",
  "water_regional"
]
```

Render
------

You can use the `Makefile`:

```bash
make
```

or the Python scripts directly:

```bash
python3 build/protocol.py  # creates the html protocol for each sector
python3 build/schema.py    # creates the json schema for each sector
```

Test
----

Some tests ensure that edits do not destroy the format and the schema of the json files. They can be manually executed using

```
pytest
```

Deploy on GitHub pages
----------------------

The automatic deployment with travis-ci is configured using the [.travis-ci.yml](.travis-ci.yml) file. In order for travis to push back into the repository a deploy key has to be configured and added to the repository (encrypted). The following setup is already deployed and is documented here only for emergencies.

```
# install the travis gem
sudo gem install travis

# create a new ssh-keypair
ssh-keygen -q -t rsa -b 4096 -C '' -N '' -f .id_rsa

# add public key as a deploy key in github

# encrypt the private key
travis login --org
travis encrypt-file .id_rsa

# clean up
rm .id_rsa

# add the keys to the repo and push
git add .id_rsa.enc .id_rsa.pub
git commit -m 'Add ssh keys'
git push
```
