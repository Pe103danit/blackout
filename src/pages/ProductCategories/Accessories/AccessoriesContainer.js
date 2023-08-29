import { connect } from 'react-redux'
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer'
import Accessories from './Accessories'

const mapStateToProps = (state) => ({
  ...state.ProductReducer
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(Accessories)