import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions } from '../store'

import BiasAdjustmentTable from './tables/BiasAdjustmentTable'
import ClimateForcingTable from './tables/ClimateForcingTable'
import InputDatasetTable from './tables/InputDatasetTable'
import InputVariableTable from './tables/InputVariableTable'
import CropTable from './tables/CropTable'
import ForestStandTable from './tables/ForestStandTable'
import ExperimentsTable from './tables/ExperimentsTable'
import HarmonizationTable from './tables/HarmonizationTable'
import IrrigationTable from './tables/IrrigationTable'
import LakeSiteTable from './tables/LakeSiteTable'
import OceanRegionTable from './tables/OceanRegionTable'
import RiverBasinTable from './tables/RiverBasinTable'
import ScenarioTable from './tables/ScenarioTable'
import SpeciesTable from './tables/SpeciesTable'
import VariableTable from './tables/VariableTable'


const Table = ({ definitions, config, identifier, caption, actions }) => {
  const groups = definitions.group.filter(group => group.identifier == identifier)
  const rows = definitions[identifier]

  switch (identifier) {
    case 'bias_adjustment':
      return <BiasAdjustmentTable config={config} caption={caption} rows={rows} />
    case 'climate_forcing':
      return <ClimateForcingTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'climate_scenario':
      return <ScenarioTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'climate_variable':
      return <InputVariableTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
    case 'crop':
      return <CropTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
    case 'experiments':
      return <ExperimentsTable definitions={definitions} config={config} caption={caption} rows={rows} actions={actions} />
    case 'forest_stand':
      return <ForestStandTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'geo_dataset':
      return <InputDatasetTable config={config} caption={caption} rows={rows} groups={groups} actions={actions} />
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
      return <ScenarioTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'soc_dataset':
      return <InputDatasetTable config={config} caption={caption} rows={rows} groups={groups} actions={actions}/>
    case 'soc_scenario':
      return <ScenarioTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'species':
      return <SpeciesTable config={config} caption={caption} rows={rows} actions={actions} />
    case 'upstream_variable':
      return <InputVariableTable config={config} caption={caption} rows={rows} groups={groups} actions={actions}/>
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
