import style from './SearchPanel.module.scss'
import { SearchIcon, CloseIcon, Microphone } from '../assets/Icons'
import { connect } from 'react-redux'
import { toggleSearchInput } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import { useCallback, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { instance } from '../assets/axiosUrl'
import SearchResults from './SearchResults/SearchResults'
import { useSpeechRecognition } from 'react-speech-recognition';

const SearchPanel = (props) => {
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [resultData, setResultData] = useState(null)
  const [speechInput, setSpeechInput] = useState('')
  const { listening, startListening, stopListening } = useSpeechRecognition()

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
    const inputValue = e.target.value;
    setSpeechInput(inputValue);
    if (inputValue.length > 2) {
      searchProducts(inputValue);
    } else {
      setShowSearchResults(false);
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
        {<SearchIcon />}
      </button>
      <input
        type='text'
        placeholder='e.g. Power Station'
        value={speechInput}
        onChange={handleInputChange}
      />
      <button onClick={listening ? stopListening : startListening} className={style.container_btn2}>
        <Microphone />
      </button>
      <button onClick={toggle} className={style.container_btn3}>
        {<CloseIcon />}
      </button>
      {showSearchResults && resultData && (
        <SearchResults
          products={resultData}
          toggle={toggle}
          themeStyle={props.themeStyle}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchInput: state.UIStateReducer.searchInput
})

const mapDispatchToProps = {
  toggleSearchInput
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel)