import { connect } from 'react-redux'
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import EmptyWishList from './EmptyWishList'

const mapStateToProps = (state) => ({
  ...state.UIStateReducer
})

const mapDispatchToProps = {
  toggleTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(EmptyWishList)