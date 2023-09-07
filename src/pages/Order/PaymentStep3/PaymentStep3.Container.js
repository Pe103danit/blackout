import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import PaymentStep3 from './PaymentStep3'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentStep3);