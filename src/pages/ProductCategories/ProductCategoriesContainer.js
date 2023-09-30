import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer';
import ProductCategories from './ProductCategories';
import {
  toggleProductToCart
} from '../../redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  ...state.ProductReducer
});

const mapDispatchToProps = {
  toggleTheme,
  toggleProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories);