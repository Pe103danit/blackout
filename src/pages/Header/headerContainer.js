import { connect } from 'react-redux'
import { toggleSearchInput } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Header from './Header'

const mapStateToProps = (state) => ({
    ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleSearchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)