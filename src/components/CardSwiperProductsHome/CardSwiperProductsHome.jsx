import style from './CardSwiperProductsHome.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeShortText } from '../assets/makeShortText'

const CardSwiperProductsHome = (props) => {
  const themeStyle = props.lightTheme
    ? 'lightSwiper'
    : 'darkSwiper'
  return (
    <Link to={'/'} className={`${style.section} ${themeStyle}`}>
      <div className={style.section_container}>
        <div className={style.section_container_containerInner}>
          <div className={style.section_container_containerInner_status}>
            {props.sale &&
              <p className={style.section_container_containerInner_status_text}>Sale</p>}
          </div>
          <div className={style.section_container_containerInner_info}>
            {props.name &&
              <p className={style.section_container_containerInner_info_name}>{
                props.name.length > 30
                  ? makeShortText(props.name)
                  : props.name
              }</p>}
            {props.model &&
              <p className={style.section_container_containerInner_info_model}>{props.model}</p>}
            {props.currentPrice &&
              <p className={style.section_container_containerInner_info_price}>from {props.currentPrice}$</p>}
          </div>
          <div className={style.section_container_containerInner_photo}>
            <img src={props.imageUrls[0]} alt={props.name} className={style.section_container_containerInner_photo_img1} />
            <img src={props.imageUrls[1]} alt={props.name} className={style.section_container_containerInner_photo_img2} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardSwiperProductsHome