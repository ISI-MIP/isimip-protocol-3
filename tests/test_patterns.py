import json
import os
import re

import pytest


def test_patterns():
    path = 'patterns'
    for file_name in os.listdir('patterns'):
        file_path = os.path.join(path, file_name)

        with open(file_path) as f:
            pattern_json = json.loads(f.read())
            pattern = os.linesep.join(pattern_json)

            try:
                re.compile(pattern)
            except re.error:
                pytest.fail(file_path)
