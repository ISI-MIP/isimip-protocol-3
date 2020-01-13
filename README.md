ISIMIP3b protocol
=================

This project builds sector-specific ISIMIP protocols from a common data source.
Machine-readable data is under [definitions](definitions/), and text under [protocol](protocol/).

The rendered protocols are found at isimip.github.io. For example,
the [agriculture protocol](https://isi-mip.github.io/isimip-protocol-3b/protocol/agriculture.html).


Setup
-----

```bash
pip install -r requirements.txt
```

Usage
-----

Edit the markdown files for each sector under [protocol](protocol).
Edit [file_conventions.md](protocol/includes/file_conventions.md) to
add common text to all sectors. Edit definitions under [definitions](definitions/).

You can clone this repository and work and render the files locally.
You can also edit the markdown files at github directly. With a delay of minutes,
your updates will be visible at `https://isi-mip.github.io/isimip-protocol-3b/protocol/<sector>.html`.

As a rule, we should keep sector-specific text to a minimum and cover
as much structure as possible by machine-readable code under [definitions](definitions/).

Render
-----

You can use the `Makefile`:

```bash
make
```

or the Python scripts directly:

```bash
python3 bin/generate_protocol.py <sector>            # creates the html protocol for a sector
python3 bin/generate_schema.py <product> <sector>    # creates the json schema for a sector
```

Deploy on GitHub pages
----------------------

```
# install the travis gem
sudo gem install travis

# create a new ssh-keypair
ssh-keygen -q -t rsa -b 4096 -C '' -N '' -f .id_rsa

# add public key as a deploy key in github

# encrypt the private key
travis login --org
travis encrypt-file .id_rsa

# clean up
rm .id_rsa

# add the keys to the repo and push
git add .id_rsa.enc .id_rsa.pub
git commit -m 'Add ssh keys'
git push
```
