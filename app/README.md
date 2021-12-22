ISIMIP3 simulation protocol React app
=====================================

The interactive part of the protocol is build using JavaScript and the React Framework. The code for this resides in this directory. Since the output of the front-end build (the app) will only change little over time, it is checked in into the git repository as a static asset.

In order to rebuild the app or work on the code, the following setup needs to be done:

1. Install nodejs using [nvm](https://github.com/nvm-sh/nvm):

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```

    Then add:

    ```
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    ```

    to your `.bashrc`.

2. Run `nvm install` in this directory to install the node version given in `.nvmrc`.

3. Run `npm install` to install the node dependencies.

4. Run `npm run watch` or `make watch` to build the app and rebuild it when changing the source.

5. Run `python3 build/assets.py --link` or `make dev` in the main protocol directory to link the assets instead of copying them.

6. Before commiting any changes, run `npm run build:prod` or just `make` to create a production version of the app, which then will be part of the repository.
