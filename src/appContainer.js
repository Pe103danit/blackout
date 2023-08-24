import { connect } from 'react-redux'
import { toggleTheme } from './redux/reducers/UIStateReducer/UIStateReducer'
import App from './App'
import { getProducts } from './redux/reducers/ProductReducer/ProductReducer'

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme
})

const mapDispatchToProps = {
  toggleTheme,
  getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(App)