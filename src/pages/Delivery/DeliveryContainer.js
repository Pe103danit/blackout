import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Delivery from './Delivery'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Delivery)