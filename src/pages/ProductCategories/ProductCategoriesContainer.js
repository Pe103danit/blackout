import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer';
import ProductCategories from './ProductCategories';
import {
  clearAllCategoriesToFilter,
  clearPriceFilter, clearSelectValue,
  toggleProductToCart
} from '../../redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  ...state.ProductReducer
});

const mapDispatchToProps = {
  toggleTheme,
  toggleProductToCart,
  clearAllCategoriesToFilter,
  clearPriceFilter,
  clearSelectValue
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories);