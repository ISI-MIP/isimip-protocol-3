from datetime import datetime
from io import StringIO
from pathlib import Path
from xml.sax.saxutils import XMLGenerator
from xml.dom.minidom import parseString

from utils import read_definitions

definitions = read_definitions()

now = datetime.now()
timestamp = now.isoformat(timespec='seconds') + 'Z'
version = f'ISIMIP-{now.strftime('%Y%m%d')}'

schema_path = Path('output') / 'cf-standard-name-table-isimip.xml'

dimensions = [
    {
        'standard_name': 'time',
        'units': 's'
    },
    {
        'standard_name': 'longitude',
        'units': 'degree_north'
    },
    {
        'standard_name': 'latitude',
        'units': 'degree_east'
    }
]

stream = StringIO()

xml = XMLGenerator(stream, "utf-8")
xml.startDocument()
xml.startElement('standard_name_table', {
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:noNamespaceSchemaLocation': 'https://cfconventions.org/Data/schema-files/cf-standard-name-table-2.0.xsd'
})

xml.startElement('version_number', {})
xml.characters(version)
xml.endElement('version_number')

xml.startElement('conventions', {})
xml.characters(f'CF-StandardNameTable-ISIMIP-{version}')
xml.endElement('conventions')

xml.startElement('first_published', {})
xml.characters(timestamp)
xml.endElement('first_published')

xml.startElement('last_modified', {})
xml.characters(timestamp)
xml.endElement('last_modified')

xml.startElement('institution', {})
xml.characters('Potsdam Institute for Climate Impact Research (PIK)')
xml.endElement('institution')

xml.startElement('contact', {})
xml.characters('isimip-data@pik-potsdam.de')
xml.endElement('contact')

for variable in dimensions + definitions['variable']:
    xml.startElement('entry', {
        'id': variable.get('standard_name', variable.get('specifier'))
    })

    if 'units' in variable:
        xml.startElement('canonical_units', {})
        xml.characters(variable['units'])
        xml.endElement('canonical_units')

    xml.startElement('description', {})
    if 'comment' in variable:
        xml.characters(f'{variable['long_name']}: {variable['comment']}')
    elif 'long_name' in variable:
        xml.characters(variable['long_name'])
    xml.endElement('description')

    xml.endElement('entry')

xml.endElement('standard_name_table')
xml.endDocument()

# prettify xml
xml_string = stream.getvalue()
xml_dom = parseString(xml_string)

# write xml file
with open(schema_path, 'w') as fp:
    fp.write(xml_dom.toprettyxml())
