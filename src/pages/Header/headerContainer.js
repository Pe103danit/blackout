import { connect } from 'react-redux'
import { toggleSearchInput, toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Header from './Header'

const mapStateToProps = (state) => ({
    ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleTheme,
  toggleSearchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)