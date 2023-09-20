import { connect } from 'react-redux';
import { getProducts } from '../../redux/reducers/ProductReducer/ProductReducer';
import Offers from './Offers';

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
  productIsLoading: state.ProductReducer.productIsLoading
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);