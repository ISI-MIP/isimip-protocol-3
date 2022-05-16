bibliography.html: bibliography.bib bibliography.md
	pandoc --natbib --citeproc bibliography.md \
	       --bibliography=bibliography.bib \
	       --csl=copernicus-publications.csl \
	       -o bibliography.html
