import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Basket from './Basket'
import { updateBasket } from '../../redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  basketList: state.ProductReducer.basketList,
  totalBasketSum: state.ProductReducer.totalBasketSum
})

const mapDispatchToProps = {
  toggleTheme,
  updateBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)