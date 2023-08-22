import { useState, useEffect } from 'react'
import style from './ProductCard.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import StarRating from './StarRating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { getProductById } from '../../redux/reducers/ProductReducer/ProductReducer';

export const ProductCard = (props) => {
  const dispatch = useDispatch()
  const { sale, name, rating, currentPrice, underPrice, imgUrls, Specs, options, available, description } = props
  const count = available - 1
  const [isOverWeightOpen, setOverWeightOpen] = useState(false)
  const [countToCart, setCountToCart] = useState(1)
  const [countOfAvailable, setCountOfAvailable] = useState(count)
  const [multipliedPrice, setMultipliedPrice] = useState(currentPrice)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isActive, setActive] = useState(options[0].title)
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  // const product = useSelector(state => console.log(state, 222))

  const id = '64db8edbc91c0cf4da8bc8a7'
  const themeStyle = theme ? 'light' : 'dark'
  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])
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
                {imgUrls.map((item, index) => (
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
                  {imgUrls.map(item => (
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
              {sale && <p className={style.product_card_hot}>Hot</p>}
              <h2 className={style.product_card_title}>{name}</h2>
              <p><StarRating starsSelected={rating} /></p>
              <p className={style.product_card_price}> £ {currentPrice},00 GBP </p>
              <p className={style.product_card_under_price}>{underPrice}</p>
            </div>
            <div className={style.product_card_related_products}>
              <div className={`${style.product_card_description_items} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                <h6 className={style.product_card_description_subtitle}>{description}</h6>
                <ul className={style.product_card_description_list}>
                  {[...Specs].splice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {isOverWeightOpen && [...Specs].splice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {(Specs.length > 4) && <p className={style.product_card_overview} onClick={() => { setOverWeightOpen(!isOverWeightOpen) }}>Overview {isOverWeightOpen && <SlArrowUp />} {!isOverWeightOpen && < SlArrowDown />}</p>}
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
                      setMultipliedPrice(prev => prev -= currentPrice)
                    }
                    if (countToCart === 1) {
                      setMultipliedPrice(currentPrice)
                    }
                  }}>-</button>
                  <span className={style.product_card_count}>{countToCart}</span>
                  <button className={style.product_card_button_plus} disabled={!countOfAvailable} onClick={() => {
                    console.log(countOfAvailable)
                    setCountToCart(prev => prev += 1)
                    setCountOfAvailable(prev => prev -= 1)

                    if (countToCart > 0) {
                      setMultipliedPrice(prev => prev += currentPrice)
                    }
                    if (!countToCart) {
                      setMultipliedPrice(currentPrice)
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
