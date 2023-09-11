import style from './SearchResults.module.scss'
import SearchResultItem from './SearchResultItem/SearchResultItem'

const SearchResults = (props) => {
  console.log(props.products)
  console.log(props.themeStyle)
  const themeStyle = props.themeStyle
    ? 'lightSearchResults'
    : 'darkSearchResults'
  return (
    <div className={`${style.container} ${themeStyle}`}>
      {<SearchResultItem/>}
    </div>
  )
}

export default SearchResults