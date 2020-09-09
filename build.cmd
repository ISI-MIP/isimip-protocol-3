pandoc --natbib --filter pandoc-citeproc bibliography/bibliography.md ^
       --bibliography=bibliography/bibliography.bib ^
       --csl=bibliography/copernicus-publications.csl ^
       -o bibliography/bibliography.html

python build\definitions.py
python build\glossary.py
python build\index.py
python build\pattern.py
python build\protocol.py
python build\schema.py
