import style from './SearchResultItem.module.scss'
import { NavLink } from 'react-router-dom'

const SearchResultItem = (props) => {
  const themeStyle = props.themeStyle
    ? 'lightSearchResultItem'
    : 'darkSearchResultItem'

  const img = props.product.imageUrls[0].replace('/upload/', '/upload/w_100/')

  return (
    <li className={`${style.item} ${themeStyle}`}
        onClick={props.toggle}>
      <NavLink to={`/products/${props.product.itemNo}`} className={style.item_link}>
        <div className={style.item_link_inner}>
        <div className={style.item_link_inner_left}>
          <img src={img} alt={props.product.name} title={props.product.name}/>
        </div>
        <div className={style.item_link_inner_right}>
          <p className={style.item_link_inner_right_name}>{props.product.name}</p>
          <p className={style.item_link_inner_right_price}>{props.product.currentPrice}</p>
        </div>
        </div>
      </NavLink>
    </li>
  )
}

export default SearchResultItem