#!/bin/sh
pandoc --natbib --filter pandoc-citeproc bibliography/bibliography.md \
       --bibliography=bibliography/bibliography.bib \
       --csl=bibliography/copernicus-publications.csl \
       -o bibliography/bibliography.html

python3 build/definitions.py
python3 build/glossary.py
python3 build/index.py
python3 build/pattern.py
python3 build/protocol.py
python3 build/schema.py
python3 build/tree.py
