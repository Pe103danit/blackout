import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import ShippingStep2 from './ShippingStep2'
import { setShipping } from '../../../redux/reducers/OrderReducer/OrderReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum,
  user: state.SessionReducer.user
});

const mapDispatchToProps = {
  toggleTheme,
  setShipping
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingStep2);