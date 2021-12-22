ISIMIP3 simulation protocol bibliography
========================================

The bibliography of the protocol is build using [Pandoc](https://pandoc.org/). The code for this resides in this directory. Since the output of the build (`bibliography.html`) will only change little over time, it is checked in into the git repository as a static asset.

In order to rebuild the bibliography or work on it, the following setup needs to be done:

1. Install Pandoc:

    ```
    sudo apt-get install python3 python3-dev python3-venv git pandoc pandoc-citeproc  # Ubuntu/Debian
    sudo yum install python3 python3-devel git pandoc pandoc-citeproc                 # CentOS/RHEL
    zypper install python3 python3-devel git pandoc pandoc-citeproc                   # openSUSE/SLES
    brew install python git pandoc pandoc-citeproc                                    # macOS
    ```

    For Windows, download Pandoc from https://github.com/jgm/pandoc/releases/.

2. Run `make` in this directory to build `bibliography.html`.

3. Commit the created `bibliography.html` to the git repo.
