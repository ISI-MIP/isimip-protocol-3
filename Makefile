sectors = agriculture biodiversity biomes coastal energy forestry health lakes marine-fishery \
          permafrost water

all: schema html

schema:
	python3 bin/generate_schema.py OutputData $(sectors)

html:
	python3 bin/generate_protocol.py $(sectors)

clean:
	rm -r output

.PHONY: schema html clean
