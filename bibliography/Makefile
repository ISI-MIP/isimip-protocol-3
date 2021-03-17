bibliography.html: bibliography.bib bibliography.md
	pandoc --natbib --filter pandoc-citeproc bibliography.md \
	       --bibliography=bibliography.bib \
	       --csl=copernicus-publications.csl \
	       -o bibliography.html
