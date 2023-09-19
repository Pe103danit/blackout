import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/ProductReducer/ProductReducer';
import WishList from './WishList';

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
  productIsLoading: state.ProductReducer.productIsLoading,
  ...state.UIStateReducer,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishList);