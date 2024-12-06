ISIMIP3 simulation protocol
===========================

This project builds sector-specific ISIMIP protocols from a common data source.
Machine-readable data are under [definitions](definitions/), and text under [protocol](protocol/).

The rendered protocols are found at https://protocol.isimip.org.

You can clone this repository and work and render the files locally as documented below.

You can also edit the markdown files at github directly. With a delay of minutes,
your updates will be visible at `https://protocol.isimip.org`.

As a rule, the sector-specific text should be kept to a minimum and cover
as much structure as possible by machine-readable code under [definitions](definitions/).

Setup
-----

Building the protocol needs git and a recent Python version (> 3.6). The installation of Python (and its developing packages), however differs from operating system to operating system. Instructions can be found [here](https://github.com/ISI-MIP/isimip-qc/blob/main/README.md#prerequisites).

A `Makefile` is provided to help with the installation process.

If you work with different Python applications, we recommend to create a virtual environment for the protocol:

```bash
python3 -m venv env
source env/bin/activate  # the env needs to be sourced everytime you use a new terminal
```

The Python requirements are installed using:

```bash
make install
```

The JavaScript part of the protocol needs to be build using NodeJS and Webpack. For convenience this can be done by using only:

```bash
make app
```


Build
-----

```bash
make                  # should work on Linux/macOS
make dev              # like make, but lining the front-end assets for development

make serve            # starts a http server on port :8000 so that you can access the protocol in your browser
```

The output files are located in `output`. The files, e.g. `index.html` can opened with a web browser.


Development server
------------------

The command `make serve` will open a local webserver on port `:8000`. The protocol can than be accessed at http://localhost:8080 from a browser.


Editing
-------

Edit the markdown files for each sector under [protocol](protocol).

The interactive tables have the following syntax:

```
::: table number=1 identifier=climate_scenario
```

where `number` is simply the table number to be displayed in the caption and `identifier` will not only connect the table to its definition file (see below), but will also define which JavaScript component to use. Changes of the layout of a table or the creation of new tables require work on the [app](app).

The definition YAML files however can be changed without touching the JavaScript source code. Each definition is a list of objects. Every object must have an attribute `specifier` which is used to refer to it in other objects/tables but also in file names. An example for a relatively simple definition file is [definitions/bias_adjustment.yaml](definitions/bias_adjustment.yaml):

```
- specifier: w5e5
  description: >-
    Refers to W5E5 data used for the bias-correction globally on a 0.5° grid.

- specifier: nobasd
  description: >-
    Indicates that no bias correction was performed on the climate data (e.g. ocean
    data).

- specifier: localbc
  description: >-
    Refers to local data from weather stations used for the bias-correction in e.g.
    the forest sector.
  products:
  - OutputData
  - SecondaryOutputData
  sectors:
  - forestry
```

Here `localbc` only applies to the `forestry` sector, while the other objects are used in every sector. Some attributes (e.g. `frequency` in `definitions/variable`) can have objects as value, which the are evaluated for the particular sector.

In order to add a new sector, the following steps need to be taken:

* Add the sector with `specifier` and `title` to `definitions/sector.yaml`.
* Add `pattern/ISIMIP3a/OutputData/<sector>.yaml` and `pattern/ISIMIP3b/OutputData/<sector>.yaml` with the file patterns for the new sector.
* Add new `variable` group(s) to `definitions/group.yaml`.
* Add sector variables to `definitions/variable.yaml` and/or update existing variables with the new sector.


Printing
--------

The protocol can be printed into a PDF from the browser. This will work best with Chrome.


Test
----

Some tests ensure that edits do not destroy the format and the schema of the json files. They can be manually executed using

```
pytest
```
