import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import BiasAdjustmentTable from './tables/BiasAdjustmentTable'
import ClimateForcingTable from './tables/ClimateForcingTable'
import CropTable from './tables/CropTable'
import ExperimentsTable from './tables/ExperimentsTable'
import ForcingDataTable from './tables/ForcingDataTable'
import ForestStandTable from './tables/ForestStandTable'
import Group3RankingTable from './tables/Group3RankingTable'
import Group3RequirementsTable from './tables/Group3RequirementsTable'
import HarmonizationTable from './tables/HarmonizationTable'
import InputDatasetTable from './tables/InputDatasetTable'
import InputVariableTable from './tables/InputVariableTable'
import IrrigationTable from './tables/IrrigationTable'
import LakeSiteTable from './tables/LakeSiteTable'
import OceanRegionTable from './tables/OceanRegionTable'
import ScenarioTable from './tables/ScenarioTable'
import SpeciesTable from './tables/SpeciesTable'
import StationTable from './tables/StationTable'
import VariableTable from './tables/VariableTable'

import { actions } from '../store'

const Table = ({ identifier, caption }) => {
  const dispatch = useDispatch()

  const config = useSelector((store) => store.config)
  const definitions = useSelector((store) => store.definitions)

  const groups = definitions.group.filter(group => group.identifier == identifier)
  const rows = definitions[identifier]

  const toggleGroup = (group) => {
    dispatch(actions.toggleGroup(group.specifier))
  }
  const toggleGroups = (groups, allOpen) => {
    if (allOpen) {
      // all groups are open, toggle them all, closing them
      groups.forEach(group => toggleGroup(group))
    } else {
      // toggle groups which are closed to open them
      groups.filter(group => group.closed).forEach(group => toggleGroup(group))
    }
  }
  const toggleExperiments = (experiment) => {
    dispatch(actions.toggleExperiments(experiment.specifier))
  }

  const props = {
    config,
    definitions,
    caption,
    rows,
    groups,
    toggleGroup,
    toggleGroups,
    toggleExperiments
  }

  switch (identifier) {
    case 'bias_adjustment':
      return <BiasAdjustmentTable {...props} />
    case 'climate_forcing':
      return <ClimateForcingTable {...props} />
    case 'climate_scenario':
      return <ScenarioTable {...props} />
    case 'climate_variable':
      return <InputVariableTable {...props} />
    case 'crop':
      return <CropTable {...props} />
    case 'experiments':
      return <ExperimentsTable {...props} />
    case 'forcing_data':
      return <ForcingDataTable {...props} />
    case 'forest_stand':
      return <ForestStandTable {...props} />
    case 'group3_ranking':
      return <Group3RankingTable {...props} />
    case 'group3_requirements':
      return <Group3RequirementsTable {...props} />
    case 'geo_dataset':
      return <InputDatasetTable {...props} />
    case 'harmonization':
      return <HarmonizationTable {...props} />
    case 'irrigation':
      return <IrrigationTable {...props} />
    case 'lake_site':
      return <LakeSiteTable {...props} />
    case 'ocean_region':
      return <OceanRegionTable {...props} />
    case 'station':
      return <StationTable {...props} />
    case 'sens_scenario':
      return <ScenarioTable {...props} group3={true} />
    case 'soc_dataset':
      return <InputDatasetTable {...props} group3={true} />
    case 'soc_scenario':
      return <ScenarioTable {...props} group3={true} />
    case 'species':
      return <SpeciesTable {...props} />
    case 'upstream_variable':
      return <InputVariableTable {...props} />
    case 'variable':
      return <VariableTable {...props} />
    default:
      return null
  }
}

Table.propTypes = {
  caption: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired
}

export default Table
