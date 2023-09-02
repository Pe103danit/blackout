import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Basket from './Basket'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  basketList: state.ProductReducer.basketList
})

const mapDispatchToProps = {
  toggleTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)