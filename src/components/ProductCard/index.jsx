import { useState } from 'react'
import style from './ProductCard.module.scss'
import { useSelector } from 'react-redux'
import StarRating from './StarRating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const ProductCard = (props) => {
  const { isHot, title, rating, price, underPrice, img, description, options, available, _uLike } = props
  const count = available - 1
  const [isOverWeightOpen, setOverWeightOpen] = useState(false)
  const [countToCart, setCountToCart] = useState(1)
  const [countOfAvailable, setCountOfAvailable] = useState(count)
  const [multipliedPrice, setMultipliedPrice] = useState(price)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isActive, setActive] = useState(options[0].title)
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const themeStyle = theme ? 'light' : 'dark'
  const handleClick = () => {

  }
  return (
    <section className={`${style.product} ${themeStyle}`}>
      <div className={style.product_container}>
        <div className={style.product_card}>
          <div className={style.product_swiper_wrapper}>
            <div className='carousel'>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={style.product_card_swiper}
                autoplay={{ delay: 1500 }}
              >
                {img.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className={`${style.product_card_img_wrapper} ${style.product_card_img_wrapper_big}`}>
                      <img src={item} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={style.product_card_swiper_mini} id="swiper_day_mini">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  autoplay={{ delay: 1500 }}
                >
                  {img.map(item => (
                    <SwiperSlide className="swiper-slide">
                      <div className={`${style.product_card_img_wrapper} ${style.product_card_img_mini} `}>
                        <img src={item} alt="" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
          </div>
          <div className={style.product_card_info}>
            <div className={style.product_info}>
              {isHot && <p className={style.product_card_hot}>Hot</p>}
              <h2 className={style.product_card_title}>{title}</h2>
              <p><StarRating starsSelected={rating} /></p>
              <p className={style.product_card_price}> £ {price},00 GBP </p>
              <p className={style.product_card_under_price}>{underPrice}</p>
            </div>
            <div className={style.product_card_related_products}>
              <div className={`${style.product_card_description_items} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                <h6 className={style.product_card_description_subtitle}>{description.title}</h6>
                <ul className={style.product_card_description_list}>
                  {[...description.characters].splice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {isOverWeightOpen && [...description.characters].splice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {(description.characters.length > 4) && <p className={style.product_card_overview} onClick={() => { setOverWeightOpen(!isOverWeightOpen) }}>Overview {isOverWeightOpen && <SlArrowUp />} {!isOverWeightOpen && < SlArrowDown />}</p>}
              </div>
              <div>
                <h6 className={style.product_card_description_subtitle_other}>Options</h6>
                <ul className={style.product_card_options_list} >
                  {options.map((item) => (
                    <li onClick={() => {
                      setActive(item.title)
                      thumbsSwiper.slidePrev()
                    }} className={`${style.product_card_options}  ${(item.title === isActive) ? style.product_card_options_active : ''} `} key={item.title}>
                      <p className=''>{item.title}</p>
                      <p className={style.product_card_options_price}>£{item.price},00 GBP</p>
                    </li>
                  ))}
                </ul>
              </div>
              {!available && <div>
                <h6 className={style.product_card_description_subtitle_available}>
                  Unavailable
                </h6>
              </div>}
              {!!available && <div>
                <h6 className={style.product_card_description_subtitle_available}>
                  Available
                </h6>
                <div className={style.product_card_container_for_buttons}>
                  <button className={style.product_card_button_minus} disabled={countToCart === 1} onClick={() => {
                    setCountToCart(prev => prev -= 1)
                    setCountOfAvailable(prev => prev += 1)
                    if (countToCart > 0) {
                      setMultipliedPrice(prev => prev -= price)
                    }
                    if (countToCart === 1) {
                      setMultipliedPrice(price)
                    }
                  }}>-</button>
                  <span className={style.product_card_count}>{countToCart}</span>
                  <button className={style.product_card_button_plus} disabled={!countOfAvailable} onClick={() => {
                    console.log(countOfAvailable)
                    setCountToCart(prev => prev += 1)
                    setCountOfAvailable(prev => prev -= 1)

                    if (countToCart > 0) {
                      setMultipliedPrice(prev => prev += price)
                    }
                    if (!countToCart) {
                      setMultipliedPrice(price)
                    }
                  }}>+</button>
                </div>
              </div>}
              <div className={`${style.product_card_total_price} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                <p className={style.product_card_total_price_cash}>£{multipliedPrice},00 GBP</p>
                <button className={style.product_card_total_price_button} onClick={handleClick}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
