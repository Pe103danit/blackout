import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import Home from './Home'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)