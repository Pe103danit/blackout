import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import PaymentStep3 from './PaymentStep3'
import { setPayment } from '../../../redux/reducers/OrderReducer/OrderReducer'
import { successfulOrder } from '../../../redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum,
  ...state.OrderReducer
});

const mapDispatchToProps = {
  toggleTheme,
  setPayment,
  successfulOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStep3);