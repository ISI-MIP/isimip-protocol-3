export NVM_DIR="${PWD}/app/nvm"

.PHONY: prod dev serve assets links csvtables definitions glossary pattern protocol schema tree \
	typos app watch clean distclean

prod: assets csvtables definitions glossary pattern protocol schema tree

dev: links csvtables definitions glossary pattern protocol schema tree

serve:
	python3 -m http.server -b 127.0.0.1 8080 -d output

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

typos:
	typos --write-changes --force-exclude

app:
	make -C app

watch:
	make -C app watch

clean:
	rm -fr output

distclean:
	rm -fr output
	rm -fr env
	make -C app clean
