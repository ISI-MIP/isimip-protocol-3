from pathlib import Path

from utils import get_commit_hash, read_yaml_file, setup_logs, write_json

setup_logs()


def main():
    commit_hash = get_commit_hash()

    for tree_path in Path('tree').rglob('**/*.yaml'):
        output_path = Path('output') / tree_path

        # open and read tree
        tree_data = read_yaml_file(tree_path)

        # create tree dict
        tree = {
            'commit': commit_hash,
            'identifiers': [identifier.replace(' ', '') for identifier in tree_data],
        }

        # write tree as json
        write_json(output_path, tree)


if __name__ == '__main__':
    main()
