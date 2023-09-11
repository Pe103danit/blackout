import style from './SearchPanel.module.scss'
import { SearchIcon, CloseIcon } from '../assets/Icons'
import { connect } from 'react-redux'
import { toggleSearchInput } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { instance } from '../assets/axiosUrl'
import SearchResults from './SearchResults/SearchResults'

const SearchPanel = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [resultData, setResultData] = useState(null)

  const searchValueObject = {
    query: searchValue
  }

  const toggle = () => {
    props.toggleSearchInput()
  }

  const searchProducts = () => {
    mutation.mutate(searchValueObject)
    setShowSearchResults(!showSearchResults)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchValue.trim() !== '') {
      searchProducts();
      e.target.blur()
    }
  }

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const mutation = useMutation(searchValueObject => {
      return instance.post('api/products/search', searchValueObject)
    },
    {
      onSuccess: (data) => {
        console.log(data)
        setResultData(data)
      },
      onError: (error) => {
        console.error(error)
      }
    })
  return (
    <div className={style.container}>
      <button onClick={searchProducts}
        className={style.container_btn1}>
        {<SearchIcon/>}
      </button>
      <input
        type='text'
        placeholder='e.g. Power Station'
        value={searchValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <button onClick={toggle}
              className={style.container_btn2}>
        {<CloseIcon/>}
      </button>
      {showSearchResults && <SearchResults
        products={resultData}
        themeStyle={props.themeStyle}
      />}
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