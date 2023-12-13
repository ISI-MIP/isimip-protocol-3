ISIMIP3 simulation protocol
===========================

This project builds sector-specific ISIMIP protocols from a common data source.
Machine-readable data is under [definitions](definitions/), and text under [protocol](protocol/).

The rendered protocols are found at https://protocol.isimip.org.

You can clone this repository and work and render the files locally as documented below.

You can also edit the markdown files at github directly. With a delay of minutes,
your updates will be visible at `https://protocol.isimip.org`.

As a rule, the sector-specific text should be kept to a minimum and cover
as much structure as possible by machine-readable code under [definitions](definitions/).

The React JavaScript app is build in a seperate step which are described under [app/README.md]([app/README.md]).

Setup
-----

Building the protocol needs git and a recent Python version (> 3.6). The installation of Python (and its developing packages), however differs from operating system to operating system. Instructions can be found [here](https://github.com/ISI-MIP/isimip-qc/blob/main/README.md#prerequisites).

If you work with different Python applications, we recommend to create a virtual enviroment for the protocol.

```bash
# setup venv on Linux/macOS/Windows WSL
python3 -m venv env
source env/bin/activate

# setup venv on Windows cmd
python -m venv env
call env\Scripts\activate.bat
```

The Python dependencies are installed using:

```bash
pip install -r requirements.txt
```


Build
-----

```bash
make                  # should work on Linux/macOS
make dev              # like make, but for development of the JavaScript app

make serve            # starts a http server on port :8000 so that you can access the protocol in your browser

sh tools/build.sh     # Linux/macOS/WSL
sh tools/serve.sh     # Linux/macOS/WSL, start http server
call tools/build.cmd  # Windows cmd
call tools/serve.cmd  # Windows cmd, start http server
```

On Windows, a double click on `tools/build.cmd` should also build the protocol (unless you use a virtual environment).

The output files are located in `output`. The files, e.g. `index.html` can opened with a web browser.


Development server
------------------

The command `make serve` will open a local webserver on port `:8000`. The protocol can than be accessed at http://localhost:8000 from a browser.


Editing
-------

Edit the markdown files for each sector under [protocol](protocol).

The interactive tables have the following syntax:

```
::: table number=1 identifier=climate_scenario
```

where `number` is simply the table number to be displayed in the caption and `identifier` will not only connect the table to its definition file (see below), but will also define which JavaScript component to use. Changes of the layout of a table or the creation of new tables require work on the [app](app).

The definition JSON files however can be changed without touching the JavaScript source code. Each definition is a list of JSON objects. Every object must have an attribute `specifier` which is used to refer to it in other objects/tables but also in file names. An example for a relatively simple definition file is [definitions/bias_correction.json](definitions/bias_correction.json):

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

In order to add a new sector, the following steps need to be taken:

* Add the sector with `specifier` and `title` to `definitions/sector.json`.
* Add `pattern/ISIMIP3a/OutputData/<sector>.json` and `pattern/ISIMIP3b/OutputData/<sector>.json` with the file patterns for the new sector.
* Add new `variable` group(s) to `definitions/group.json`.
* Add sector variables to `definitions/variable.json` and/or update existing variables with the new sector.


Printing
--------

The protocol can be printed into a PDF from the browser. This will work best with Chrome.


Test
----

Some tests ensure that edits do not destroy the format and the schema of the json files. They can be manually executed using

```
pytest
```
