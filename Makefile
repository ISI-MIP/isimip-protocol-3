SHELL := bash

export NVM_DIR=$(PWD)/nvm
export NVM_VERSION=v0.40.4

export ISIMIP_LOG_LEVEL=WARNING

.PHONY: all csvtables definitions glossary pattern protocol schema tree \
	serve typos app watch lint clean cleannode cleanenv distclean

all: csvtables definitions glossary pattern protocol schema tree

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

serve:
	python3 -m http.server -b 127.0.0.1 8080 -d output

typos:
	typos --write-changes --force-exclude

app: nvm node_modules
	. $(NVM_DIR)/nvm.sh; nvm use && npm run build

watch: nvm node_modules
	. $(NVM_DIR)/nvm.sh; nvm use && npm run watch

lint: nvm node_modules
	. $(NVM_DIR)/nvm.sh; nvm use && npm run lint

nvm:
	mkdir -p $(NVM_DIR)
	NVM_DIR=$(NVM_DIR) PROFILE=/dev/null \
		bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/$(NVM_VERSION)/install.sh | bash > /dev/null'
	. $(NVM_DIR)/nvm.sh; nvm install

node_modules:
	. $(NVM_DIR)/nvm.sh; nvm use && npm ci

clean:
	rm -fr output

cleannode:
	rm -rf nvm node_modules

cleanenv:
	rm -fr env

distclean:
	rm -fr output
	rm -rf nvm node_modules
	rm -fr env
