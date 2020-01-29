all: pattern protocol schema

pattern:
	python3 build/pattern.py

protocol:
	python3 build/protocol.py

schema:
	python3 build/schema.py

gh-pages: all
	ghp-import --no-jekyll --push --force output

clean:
	rm -r output

.PHONY: pattern protocol schema gh-pages clean
