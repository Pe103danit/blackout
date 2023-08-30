import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import SwiperProductsHome from './SwiperProductsHome'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  products: state.ProductReducer.products
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(SwiperProductsHome)