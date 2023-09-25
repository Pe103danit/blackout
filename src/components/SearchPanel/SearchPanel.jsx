import style from './SearchPanel.module.scss'
import { SearchIcon, CloseIcon } from '../assets/Icons'
import { connect } from 'react-redux'
import { toggleSearchInput } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import { useCallback, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { instance } from '../assets/axiosUrl'
import SearchResults from './SearchResults/SearchResults'

const SearchPanel = (props) => {
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [resultData, setResultData] = useState(null)

  const toggle = useCallback(() => {
    props.toggleSearchInput();
  }, [props]);

  const searchProducts = (searchValue) => {
    const searchValueObject = {
      query: searchValue
    }
    mutation.mutate(searchValueObject)
  }

  const handleInputChange = (e) => {
    if (e.target.value.length > 2) {
      searchProducts(e.target.value)
    } else {
      setShowSearchResults(false)
    }
  };

  const mutation = useMutation(searchValueObject => {
      return instance.post('api/products/search', searchValueObject)
    },
    {
      onSuccess: (data) => {
        console.log(data)
        setResultData(data)
        setShowSearchResults(true)
      },
      onError: (error) => {
        console.error(error)
      }
    })

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        toggle();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  return (
    <div className={style.container}>
      <button className={style.container_btn1}>
        {<SearchIcon/>}
      </button>
      <input
        type='text'
        placeholder='e.g. Power Station'
        onChange={handleInputChange}
      />
      <button onClick={toggle}
              className={style.container_btn2}>
        {<CloseIcon/>}
      </button>
      {showSearchResults && resultData && (
        <SearchResults
        products={resultData}
        toggle={toggle}
        themeStyle={props.themeStyle}
      />)
      }
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