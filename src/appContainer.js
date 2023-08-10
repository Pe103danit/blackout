import { connect } from 'react-redux'
import { toggleTheme } from './redux/reducers/UIStateReducer/UIStateReducer'
import App from './App'

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)