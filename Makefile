sectors = agriculture biodiversity biomes coastal energy forestry health lakes marine-fishery \
          permafrost water

all: schema html

schema:
	python3 bin/schema.py OutputData $(sectors)

html:
	python3 bin/protocol.py $(sectors)

clean:
	rm -r output

.PHONY: schema html clean
