import { connect } from 'react-redux';
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer';
import InformationStep1 from './InformationStep1'
import { setInformation } from '../../../redux/reducers/OrderReducer/OrderReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  totalBasketSum: state.ProductReducer.totalBasketSum,
  user: state.SessionReducer.user
});

const mapDispatchToProps = {
  toggleTheme,
  setInformation
};

export default connect(mapStateToProps, mapDispatchToProps)(InformationStep1);