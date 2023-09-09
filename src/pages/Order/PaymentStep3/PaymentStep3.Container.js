import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import PaymentStep3 from './PaymentStep3'
import { setPayment } from '../../../redux/reducers/OrderReducer/OrderReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum
});

const mapDispatchToProps = {
  toggleTheme,
  setPayment
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStep3);