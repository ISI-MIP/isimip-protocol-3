all: definitions.py glossary.py index.py pattern.py protocol.py schema.py tree.py

bibliography/bibliography.html: bibliography/bibliography.bib bibliography/bibliography.md
	pandoc --natbib --filter pandoc-citeproc bibliography/bibliography.md \
	       --bibliography=bibliography/bibliography.bib \
	       --csl=bibliography/copernicus-publications.csl \
	       -o bibliography/bibliography.html

%.py: bibliography/bibliography.html
	python3 build/$@

clean:
	rm -fr output; rm -f bibliography/bibliography.html

.PHONY: clean
