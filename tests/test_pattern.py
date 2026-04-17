import re
from pathlib import Path

import pytest

from helpers import read_file

pattern_keys = ['path', 'dataset', 'file']
pattern_paths = list(Path('pattern').rglob('*.yaml'))


@pytest.mark.parametrize('pattern_key', pattern_keys)
@pytest.mark.parametrize('pattern_path', pattern_paths, ids=lambda x: str(x))
def test_pattern(pattern_key, pattern_path):
    pattern = read_file(pattern_path).get(pattern_key)
    if pattern:
        pattern = re.sub(r'\s+', '', pattern)

        try:
            re.compile(pattern)
        except re.error as e:
            pytest.fail(f'Error with "{pattern_key}" in {pattern_path}: {e}')
