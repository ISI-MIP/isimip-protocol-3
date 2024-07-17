import json
from pathlib import Path

from jinja2 import Environment, FileSystemLoader
from markdown import markdown
from markdown.extensions.toc import TocExtension
from utils import get_commit_date, get_commit_hash, read_definitions, read_patterns

from customblocks import CustomBlocksExtension
from customblocks.utils import E, Markdown


URL = 'https://github.com/ISI-MIP/isimip-protocol-3'


def config_generator(ctx):
    return E('div', {
        'data-component': 'config'
    }, Markdown(ctx.content, ctx.parser))


def show_generator(ctx, simulation_round=None, sector=None):
    return E('div', {
        'data-component': 'show',
        'data-simulation-round': simulation_round,
        'data-sector': sector
    }, Markdown(ctx.content, ctx.parser))


def hide_generator(ctx, simulation_round=None, sector=None):
    return E('div', {
        'data-component': 'hide',
        'data-simulation-round': simulation_round,
        'data-sector': sector
    }, Markdown(ctx.content, ctx.parser))


def table_generator(ctx, identifier, caption):
    return E('div', {
        'data-component': 'table',
        'data-identifier': identifier,
        'data-caption': caption,
    }, Markdown(ctx.content, ctx.parser))


def pattern_generator(ctx):
    return E('div', {
        'data-component': 'pattern'
    })


def main():
    commit_hash = get_commit_hash()
    commit_date = get_commit_date()
    commit_url = URL + '/commit/' + commit_hash

    # read definitions
    definitions = read_definitions()

    # read patterns
    patterns = read_patterns(definitions['simulation_round'], definitions['sector'])

    protocol_path = Path('protocol') / '00.base.md'
    template_string = protocol_path.read_text()

    environment = Environment(loader=FileSystemLoader(['bibliography', 'protocol', 'templates']))
    template = environment.from_string(template_string)

    md = template.render(commit_url=commit_url, commit_hash=commit_hash, commit_date=commit_date)
    html = markdown(md, extensions=[
        'fenced_code',
        'attr_list',
        'tables',
        TocExtension(toc_depth='2-3', title='Table of Contents'),
        CustomBlocksExtension(generators={
            'config': config_generator,
            'show': show_generator,
            'hide': hide_generator,
            'table': table_generator,
            'pattern': pattern_generator
        })
    ])
    html = html.replace('[mandatory]', '<span class="badge badge-info">mandatory</span>')

    template_path = Path('templates') / 'layout.html'
    output_path = Path('output') / 'index.html'
    output_path.parent.mkdir(parents=True, exist_ok=True)
    environment = Environment(loader=FileSystemLoader(['templates']))

    with open(template_path, encoding='utf-8') as f:
        template = environment.from_string(f.read())

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template.render(html=html, definitions=json.dumps(definitions, indent=2), patterns=json.dumps(patterns, indent=2)))


if __name__ == "__main__":
    main()
