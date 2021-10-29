all: assets.py definitions.py glossary.py pattern.py protocol.py schema.py tree.py

%.py:
	python3 build/$@

clean:
	rm -fr output

.PHONY: clean
