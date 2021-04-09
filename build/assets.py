from pathlib import Path
from shutil import copytree, rmtree


def main():
    src_path = Path('assets')
    dst_path = Path('output') / 'assets'
    dst_path.parent.mkdir(parents=True, exist_ok=True)
    rmtree(dst_path)
    copytree(src_path, dst_path)


if __name__ == "__main__":
    main()
