import json
import os
import re

import pytest


def test_patterns():
    for root, dirs, files in os.walk('pattern'):
        for file_name in files:
            if file_name.endswith('.json'):
                file_path = os.path.join(root, file_name)

                with open(file_path) as f:
                    pattern_json = json.loads(f.read())
                    pattern = os.linesep.join(pattern_json)

                    try:
                        re.compile(pattern)
                    except re.error:
                        pytest.fail(file_path)
