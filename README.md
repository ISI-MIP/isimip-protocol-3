ISIMIP3b protocol
=================

This project builds sector-specific ISIMIP protocols from a common data source.
Machine-readable data is under [definitions](definitions/), and text under [protocol](protocol/).

The rendered protocols are found at isimip.github.io. For example,
the [agriculture protocol](https://isi-mip.github.io/isimip-protocol-3/protocol/ISIMIP3b/agriculture.html).

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

The automatic deployment with travis-ci is configured using the [.travis-ci.yml](.travis-ci.yml) file. In order for travis to push back into the repository the following setup is already deployed and is documented here only for emergencies.

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
