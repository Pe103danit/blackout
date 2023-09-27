import style from './SearchResults.module.scss'
import SearchResultItem from './SearchResultItem/SearchResultItem'

const SearchResults = (props) => {
  const themeStyle = props.themeStyle
    ? 'lightSearchResults'
    : 'darkSearchResults'

  const themeStyleNoResults = props.themeStyle
    ? 'style.lightNoResults'
    : 'style.darkNoResults'
  const styleWithoutResult = props.products.data.length > 0 ? null : style.container_noResults
  return (
    <div className={`${style.container} ${themeStyle} ${styleWithoutResult}`}>
      <div className={style.container_inner}>
      <p className={style.container_inner_title}>Products</p>
      <ul className={style.container_inner_list}>
        {props.products.data.length > 0
          ? props.products.data.map((product) => (
            <SearchResultItem
              key={product.itemNo}
              product={product}
              themeStyle={props.themeStyle}
              toggle={props.toggle}
            />
          ))
          : <p className={`${style.noResults} ${themeStyleNoResults}`}>0 results</p>
        }
      </ul>
      </div>
    </div>
  )
}

export default SearchResults