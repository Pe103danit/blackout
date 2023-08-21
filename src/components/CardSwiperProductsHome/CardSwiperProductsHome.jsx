import style from './CardSwiperProductsHome.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const CardSwiperProductsHome = (props) => {
  const themeStyle = props.lightTheme
    ? 'light'
    : 'dark'
  return (
    <Link to={'/'} className={themeStyle}>
      <div className={style.container}>
        <div className={style.container_status}>
          {props.sale &&
            <p className={style.container_status_text}>Sale</p>}
        </div>
        <div className={style.container_info}>
          {props.name &&
            <p className={style.container_status_text}>{props.name}</p>}
          {props.model &&
            <p className={style.container_status_text}>{props.model}</p>}
          {props.currentPrice &&
            <p className={style.container_status_text}>from {props.currentPrice}$</p>}
        </div>
        <div className={style.container_photo}>
          <img src={props.imageUrls[0]} alt={props.name}/>
        </div>
      </div>
    </Link>
  )
}

export default CardSwiperProductsHome