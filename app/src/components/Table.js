import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions } from '../store'

import ClimateForcingTable from './tables/ClimateForcingTable'
import ClimateScenarioTable from './tables/ClimateScenarioTable'
import ClimateVariableTable from './tables/ClimateVariableTable'
import CropTable from './tables/CropTable'
import ForestStandTable from './tables/ForestStandTable'
import ExperimentsTable from './tables/ExperimentsTable'
import GeoDatasetTable from './tables/GeoDatasetTable'
import HarmonizationTable from './tables/HarmonizationTable'
import IrrigationTable from './tables/IrrigationTable'
import LakeSiteTable from './tables/LakeSiteTable'
import OceanRegionTable from './tables/OceanRegionTable'
import RiverBasinTable from './tables/RiverBasinTable'
import SensScenarioTable from './tables/SensScenarioTable'
import SocDatasetTable from './tables/SocDatasetTable'
import SocScenarioTable from './tables/SocScenarioTable'
import SpeciesTable from './tables/SpeciesTable'
import VariableTable from './tables/VariableTable'


const Table = ({ definitions, config, identifier, caption, actions }) => {
  const groups = definitions.group.filter(group => group.identifier == identifier)
  const rows = definitions[identifier]

  switch (identifier) {
    case 'climate_forcing':
      return <ClimateForcingTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'climate_scenario':
      return <ClimateScenarioTable config={config} caption={caption} rows={rows} />
    case 'climate_variable':
      return <ClimateVariableTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
    case 'crop':
      return <CropTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
    case 'experiments':
      return <ExperimentsTable definitions={definitions} config={config} caption={caption} rows={rows} actions={actions} />
    case 'forest_stand':
      return <ForestStandTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'geo_dataset':
      return <GeoDatasetTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
    case 'harmonization':
      return <HarmonizationTable config={config} caption={caption} rows={rows} />
    case 'irrigation':
      return <IrrigationTable config={config} caption={caption} rows={rows} />
    case 'lake_site':
      return <LakeSiteTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'ocean_region':
      return <OceanRegionTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'river_basin':
      return <RiverBasinTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'sens_scenario':
      return <SensScenarioTable config={config} caption={caption} rows={rows} />
    case 'soc_dataset':
      return <SocDatasetTable config={config} caption={caption} rows={rows} groups={groups} actions={actions}/>
    case 'soc_scenario':
      return <SocScenarioTable config={config} caption={caption} rows={rows} />
    case 'species':
      return <SpeciesTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'variable':
      return <VariableTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
    default:
      return null
  }
}

Table.propTypes = {
  definitions: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
    definitions: state.definitions,
    config: state.config
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
