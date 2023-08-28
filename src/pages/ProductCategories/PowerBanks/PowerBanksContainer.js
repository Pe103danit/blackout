import { connect } from 'react-redux'
import { toggleTheme } from '../../../redux/reducers/UIStateReducer/UIStateReducer'
import PowerBanks from './PowerBanks'

const mapStateToProps = (state) => ({
  ...state.ProductReducer
})

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(PowerBanks)