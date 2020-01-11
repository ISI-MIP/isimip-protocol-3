ISIMIP3b protocol
=================

Setup
-----

```bash
pip install -r requirements.txt
```

Usage
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
