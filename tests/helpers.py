import yaml


def read_file(file_path):
    return yaml.safe_load(file_path.read_text(encoding='utf-8'))


def read_instance(file_path):
    if file_path.is_dir():
        instance = []
        for group_path in file_path.iterdir():
            if group_path.suffix == '.yaml':
                instance += read_file(group_path)
        return instance
    elif file_path.suffix == '.yaml':
        return read_file(file_path)
