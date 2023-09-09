import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import ShippingStep2 from './ShippingStep2'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingStep2);