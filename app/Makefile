export NVM_DIR=$(dir $(realpath $(lastword $(MAKEFILE_LIST))))/nvm

.PHONY: prod build watch

prod: nvm node_modules
	. "${NVM_DIR}/nvm.sh"; nvm use; npm run build:prod

build: nvm node_modules
	. "${NVM_DIR}/nvm.sh"; nvm use; npm run build

watch: nvm node_modules
	. "${NVM_DIR}/nvm.sh"; nvm use; npm run watch

nvm:
	mkdir -p ${NVM_DIR}
	NVM_DIR=${NVM_DIR} PROFILE=/dev/null \
		bash -c 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash > /dev/null'
	. "${NVM_DIR}/nvm.sh"; nvm install

node_modules:
	. "${NVM_DIR}/nvm.sh"; nvm use; npm ci

clean:
	rm -rf nvm node_modules
