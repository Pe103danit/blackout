import style from './SearchPanel.module.scss'
import { SearchIcon, CloseIcon } from '../assets/Icons'
import { connect } from 'react-redux'
import { toggleSearchInput } from '../../redux/reducers/UIStateReducer/UIStateReducer'

const SearchPanel = (props) => {
  return (
    <div className={style.container}>
      <button>
        {<SearchIcon/>}
      </button>
      <input
        type='text'
        placeholder='e.g. Power Station'
      />
      <button onClick={props.toggleSearchInput}>
        {<CloseIcon/>}
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  searchInput: state.UIStateReducer.searchInput
})

const mapDispatchToProps = {
  toggleSearchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)