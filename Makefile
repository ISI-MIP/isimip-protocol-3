sectors = agriculture biodiversity biomes coastal energy forestry health \
          lakes_global lakes_local marine-fishery_global marine-fishery_regional \
          permafrost water_global water_regional

all: schema html

schema:
	python3 bin/generate_schema.py OutputData $(sectors)

html:
	python3 bin/generate_protocol.py $(sectors)

gh-pages: all
	ghp-import --no-jekyll --push --force output

clean:
	rm -r output

.PHONY: schema html gh-pages clean
