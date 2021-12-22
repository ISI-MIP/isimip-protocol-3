import os
import argparse

from pathlib import Path
from shutil import copytree, rmtree


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--link', action='store_true', default=False)

    args = parser.parse_args()

    src_path = Path('assets')
    dst_path = Path('output') / 'assets'
    dst_path.mkdir(parents=True, exist_ok=True)

    if dst_path.is_symlink():
        os.remove(dst_path)
    else:
        rmtree(dst_path)

    if args.link:
        os.symlink(Path('..') / src_path, dst_path, target_is_directory=True)
    else:
        copytree(src_path, dst_path)


if __name__ == "__main__":
    main()
