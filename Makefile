prod: assets csvtables definitions glossary pattern protocol schema tree

dev: links csvtables definitions glossary pattern protocol schema tree

serve:
	python3 -m http.server -b 127.0.0.1 8080 -d output

clean:
	rm -fr output

assets:
	python3 build/assets.py

links:
	python3 build/assets.py --link

csvtables:
	python3 build/csvtables.py

definitions:
	python3 build/definitions.py

glossary:
	python3 build/glossary.py

pattern:
	python3 build/pattern.py

protocol:
	python3 build/protocol.py

schema:
	python3 build/schema.py

tree:
	python3 build/tree.py

.PHONY: prod dev serve clean assets links csvtables definitions glossary pattern protocol schema tree
