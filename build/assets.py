import argparse
import os
import shutil

from pathlib import Path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--link', action='store_true', default=False)

    args = parser.parse_args()

    src_path = Path('assets')
    app_path = Path('app/output/app.js')
    dst_path = Path('output') / 'assets'

    shutil.rmtree(dst_path, ignore_errors=True)
    dst_path.mkdir(parents=True, exist_ok=True)

    if args.link:
        for file_path in src_path.iterdir():
            os.symlink(Path('../..') / file_path, dst_path / file_path.name)
        os.symlink(Path('../..') / app_path, dst_path / app_path.name)
    else:
        for file_path in src_path.iterdir():
            shutil.copy(file_path, dst_path / file_path.name)
        shutil.copy(app_path, dst_path / app_path.name)


if __name__ == "__main__":
    main()
