ISIMIP3 simulation protocol
===========================

This project builds sector-specific ISIMIP protocols from a common data source.
Machine-readable data is under [definitions](definitions/), and text under [protocol](protocol/).

The rendered protocols are found at https://protocol.isimip.org.

You can clone this repository and work and render the files locally as documented below.

You can also edit the markdown files at github directly. With a delay of minutes,
your updates will be visible at `https://protocol.isimip.org/<simulation_round>/<sector>.html`.

As a rule, the sector-specific text should be kept to a minimum and cover
as much structure as possible by machine-readable code under [definitions](definitions/).


Prerequisites
-------------

The installation of Python (and its developing packages), however differs from operating system to operating system. In addition Git and Pandoc is need is needed.

### Linux

On Linux, Python3 is probably already installed, but the development packages are usually not. You should be able to install them using:

```
# Ubuntu/Debian
sudo apt-get install python3 python3-dev python3-venv git pandoc pandoc-citeproc

# CentOS/RHEL
sudo yum install python3 python3-devel git pandoc pandoc-citeproc

# openSUSE/SLES
zypper install python3 python3-devel git pandoc pandoc-citeproc
```

### macOS

While we reccoment using [Homebrew](https://brew.sh) to install Python3 on a Mac, other means of obtaining Python like [Anaconda](https://www.anaconda.com/products/individual), [MacPorts](https://www.macports.org/), or [Fink](https://www.finkproject.org/) should work just as fine:

```
brew install python git pandoc pandoc-citeproc
```

### Windows

#### Regular installation

The software prerequisites need to be downloaded and installed from their particular web sites.

For python:
* download from <https://www.python.org/downloads/windows/>
* use the 64bit version if your system is not very old
* **don't forget to check 'Add Python to PATH' during setup**

For git:
* download from <https://git-for-windows.github.io/>
* use the 64bit version if your system is not very old

For pandoc:
* download from <https://github.com/jgm/pandoc/releases/>

All further steps need to be performed using the windows shell `cmd.exe`. You can open it from the Start-Menu.

#### Using the Windows Subsystem for Linux (WSL)

As an alternative for advanced users, you can use the Windows Subsystem for Linux (WSL) to install a Linux distribution whithin Windows 10. The installation is explained in the [Microsoft documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10). When using WSL, please install Python3 as explained in the Linux section.


Setup
-----

Optionally, if you work with multiple, different Python applications, create a virtual enviroment.

```bash
# setup venv on Linux/macOS/Windows WSL
python3 -m venv env
source env/bin/activate

# setup venv on Windows cmd
python -m venv env
call env\Scripts\activate.bat
```

Install the Python requirements:

```bash
pip install -r requirements.txt
```

Edit
----

Edit the markdown files for each sector under [protocol](protocol). Common included files are located under [protocol/include](protocol/include).

Tables are rendered using the table macro `{{ table(name, order) }}`. This macro combines a json file in `definitions/<name>.json` and a template in `templates/<name>.html`. If the second argument to table is a dict (`{ ... }`), e.g.:

```
{{ table('variable', {
    'Key model output': [
        'yield',
        'pirnreqcum',
        'evapcum',
        'initrcum',
        'soilmoist'
    ],
    'Key diagnostic variables': [
        'plantday',
        'plantyear',
        'anthday',
        'matyday',
  'harvyear'
    ],
    'Additional output variables (optional)': [
        'biom',
        'nupcum',
        'nincum',
        'nlosscum',
        'nleachcum'
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

Build
-----

```bash
make            # should work on Linux/macOS

sh build.sh     # Linux/macOS/WSL
call build.cmd  # Windows cmd
```

On Windows, a double click on `build.cmd` should also build the protocol (unless you use a virtual environment).

The output files are located in `output`. The files, e.g. `index.html` can opened with a web browser.


Test
----

Some tests ensure that edits do not destroy the format and the schema of the json files. They can be manually executed using

```
pytest
```
