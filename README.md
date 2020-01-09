ISIMIP3b protocol
=================

Setup
-----

```bash
pip install -r requirements.txt
```

Usage
-----

You can use the `Makefile`:

```bash
make
```

or the Python scripts directly:

```bash
python3 bin/generate_protocol.py <sector>            # creates the html protocol for a sector
python3 bin/generate_schema.py <product> <sector>    # creates the json schema for a sector
```
