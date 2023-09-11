import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer';
import ProductCategories from './ProductCategories';

const mapStateToProps = (state) => ({
  ...state.ProductReducer
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories);