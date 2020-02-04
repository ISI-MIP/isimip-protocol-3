all: glossary.py index.py pattern.py protocol.py schema.py

%.py:
	python3 build/$@

gh-pages: all
	ghp-import --no-jekyll --push --force output

clean:
	rm -r output

.PHONY: pattern protocol schema gh-pages clean
