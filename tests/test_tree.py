from pathlib import Path

import pytest

from helpers import read_file

tree_paths = list(Path('tree').rglob('*.yaml'))


@pytest.mark.parametrize('tree_path', tree_paths, ids=lambda x: str(x))
def test_tree(tree_path):
    tree = read_file(tree_path)

    assert isinstance(tree, list)
    assert tree[0] == 'simulation_round'
    assert tree[1] == 'product'
    assert tree[2] in ['category', 'sector', 'publication']
