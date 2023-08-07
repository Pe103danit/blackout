import style from './SearchPanel.module.scss'
import { SearchIcon, CloseIcon } from '../assets/Icons'

const SearchPanel = () => {
  return (
    <div className={style.container}>
      <button>
        {<SearchIcon/>}
      </button>
      <input
        type='text'
        placeholder='e.g. Power Station'
      />
      <button>
        {<CloseIcon/>}
      </button>
    </div>
  )
}

export default SearchPanel