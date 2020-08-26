import json
import os

from jsonschema import Draft7Validator


def test_patterns():
    for root, dirs, files in os.walk('schema'):
        for file_name in files:
            if file_name.endswith('.json'):
                file_path = os.path.join(root, file_name)

                with open(file_path) as f:
                    schema = json.loads(f.read())

                assert Draft7Validator.check_schema(schema) is None
