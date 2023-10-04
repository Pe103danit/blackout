import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import SwiperProductsHome from './SwiperProductsHome'
import { getProductsSliderMain } from '../../redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleTheme,
  getProductsSliderMain
}

export default connect(mapStateToProps, mapDispatchToProps)(SwiperProductsHome)