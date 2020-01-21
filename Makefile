all: protocol schema

protocol:
	python3 build/protocol.py

schema:
	python3 build/schema.py

gh-pages: all
	ghp-import --no-jekyll --push --force output

clean:
	rm -r output

.PHONY: protocol schema gh-pages clean
