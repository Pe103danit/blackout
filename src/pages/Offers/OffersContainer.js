import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer';
import Offers from './Offers';

const mapStateToProps = (state) => ({
  products: state.ProductReducer.products,
  productIsLoading: state.ProductReducer.productIsLoading
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);