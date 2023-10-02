import { connect } from 'react-redux'
import { toggleTheme } from './redux/reducers/UIStateReducer/UIStateReducer'
import App from './App'
import { getProducts } from './redux/reducers/ProductReducer/ProductReducer'
import { setToken, setUser } from './redux/reducers/SessionReducer/SessionReducer'
import { setOrderList } from './redux/reducers/OrderListReducer/OrderListReducer'
const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme,
  token: state.SessionReducer.token
})

const mapDispatchToProps = {
  toggleTheme,
  getProducts,
  setToken,
  setUser,
  setOrderList,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)