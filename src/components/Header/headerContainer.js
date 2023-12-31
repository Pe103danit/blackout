import { connect } from 'react-redux'
import { toggleSearchInput, toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Header from './Header'
import { resetFilters } from '../../redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  ...state.ProductReducer,
  wishCount: state.WishListReducer.wishCount
})

const mapDispatchToProps = {
  toggleTheme,
  toggleSearchInput,
  resetFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)