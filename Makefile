prod:
	python3 build/assets.py
	python3 build/definitions.py
	python3 build/glossary.py
	python3 build/pattern.py
	python3 build/protocol.py
	python3 build/schema.py
	python3 build/tree.py

dev:
	python3 build/assets.py --link
	python3 build/definitions.py
	python3 build/glossary.py
	python3 build/pattern.py
	python3 build/protocol.py
	python3 build/schema.py
	python3 build/tree.py

serve: dev
	python3 -m http.server -d output

clean:
	rm -fr output

.PHONY: clean
