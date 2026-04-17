from pathlib import Path

import pytest

from jsonschema import Draft7Validator

from helpers import read_file

schema_paths = sorted(Path('schema').rglob('*.yaml'))


@pytest.mark.parametrize('schema_path', schema_paths, ids=lambda x: str(x))
def test_schema(schema_path):
    schema = read_file(schema_path)

    assert Draft7Validator.check_schema(schema) is None

    assert schema['type'] == 'object'
    assert 'specifiers' in schema['required']
    assert 'specifiers' in schema['properties']

    assert schema['properties']['specifiers']['type'] == 'object'
    assert 'required' in schema['properties']['specifiers']
    assert 'properties' in schema['properties']['specifiers']
