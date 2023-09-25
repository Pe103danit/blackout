import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import PaymentStep3 from './PaymentStep3'
import { setPayment } from '../../../redux/reducers/OrderReducer/OrderReducer'
import { successfulOrder } from '../../../redux/reducers/ProductReducer/ProductReducer'
import { setUser } from '../../../redux/reducers/SessionReducer/SessionReducer';

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum,
  basketList: state.ProductReducer.basketList,
  products: state.ProductReducer.products,
  user: state.SessionReducer.user,
  ...state.OrderReducer
});

const mapDispatchToProps = {
  toggleTheme,
  setPayment,
  successfulOrder,
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStep3);