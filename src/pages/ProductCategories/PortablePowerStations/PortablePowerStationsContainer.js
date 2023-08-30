import { connect } from 'react-redux'
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer'
import PortablePowerStations from './PortablePowerStations'

const mapStateToProps = (state) => ({
  ...state.ProductReducer
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(PortablePowerStations)