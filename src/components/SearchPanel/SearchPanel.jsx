import style from './SearchPanel.module.scss'
import { SearchIcon, CloseIcon, MicrophoneOn, MicrophoneOff } from '../assets/Icons'
import { connect } from 'react-redux'
import { toggleSearchInput } from '../../redux/reducers/UIStateReducer/UIStateReducer'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { instance } from '../assets/axiosUrl'
import SearchResults from './SearchResults/SearchResults'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SearchPanel = (props) => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  const [showSearchResults, setShowSearchResults] = useState(false)
  const inputElement = useRef(null)
  const [resultData, setResultData] = useState(null)
  const [listeningStatus, setListeningStatus] = useState(listening)

  useEffect(() => {
    setListeningStatus(listening)
  }, [listening])

  const toggle = useCallback(() => {
    props.toggleSearchInput()
  }, [props])

  const mutation = useMutation(searchValueObject => {
      return instance.post('api/products/search', searchValueObject)
    },
    {
      onSuccess: (data) => {
        setResultData(data)
        setShowSearchResults(true)
      },
      onError: (error) => {
        console.error(error)
      }
    })

  const searchProducts = useCallback((searchValue) => {
      const searchValueObject = {
        query: searchValue
      }
      mutation.mutate(searchValueObject)
    }, [mutation]
  )

  const searchProductsRef = useRef(searchProducts);

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    if (inputValue.length > 2) {
      searchProducts(inputValue)
    } else {
      setShowSearchResults(false)
    }
  }

  useEffect(() => {
    if (transcript.length !== 0) {
      inputElement.current.value = transcript
      searchProductsRef.current(transcript)
    }
  }, [transcript])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        toggle()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggle])

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  return (
    <div className={style.container}>
      <button className={style.container_btn1}>
        {<SearchIcon/>}
      </button>
      <input
        ref={inputElement}
        type="text"
        placeholder="e.g. Power Station"
        onChange={handleInputChange}
      />
      <div>
        {listeningStatus === false
          ? <button onClick={SpeechRecognition.startListening}
                    className={style.container_btn2On}>
            <MicrophoneOn/>
          </button>
          : <button onClick={SpeechRecognition.stopListening}
                    className={style.container_btn2Off}>
            <MicrophoneOff/>
          </button>}
      </div>
      <button onClick={toggle} className={style.container_btn3}>
        {<CloseIcon/>}
      </button>
      {showSearchResults && resultData && (
        <SearchResults
          products={resultData}
          toggle={toggle}
          themeStyle={props.themeStyle}
        />
      )}
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