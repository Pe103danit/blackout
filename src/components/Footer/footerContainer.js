import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Footer from './Footer'

const mapStateToProps = (state) => ({
    ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)