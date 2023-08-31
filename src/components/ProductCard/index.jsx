import { useState, useEffect } from 'react'
import style from './ProductCard.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import StarRating from './StarRating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { useQuery } from 'react-query';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { getProductById } from '../../redux/reducers/ProductReducer/ProductReducer';
import { instance } from '../assets/axiosUrl';
import { useParams } from 'react-router-dom';

const ProductCard = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams()
  const getProduct = async () => {
    const { data } = await instance.get(`/api/products/${id}`)
    return data
  }
  const { data } = useQuery('getProductById', getProduct)
  const dispatch = useDispatch()
  const product = useSelector(state => state.ProductReducer.product || {})
  const { sale, name, rating, currentPrice, underPrice, imageUrls, specs, quantity, description } = product
  const [isOverWeightOpen, setOverWeightOpen] = useState(false)
  const [countToCart, setCountToCart] = useState(1)
  const [countOfAvailable, setCountOfAvailable] = useState(0)
  const [multipliedPrice, setMultipliedPrice] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [specsArray, setSpecsArray] = useState([])
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const themeStyle = theme ? 'light' : 'dark'
  useEffect(() => {
    dispatch(getProductById(data))
  }, [data, dispatch])
  useEffect(() => {
    setMultipliedPrice(currentPrice)
    const count = quantity - 1
    setCountOfAvailable(count)
    setSpecsArray(specs)
  }, [currentPrice, quantity, specs])
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
                {imageUrls?.map((item, index) => (
                  <SwiperSlide key={index} className='swiper-slide'>
                    <div className={`${style.product_card_img_wrapper} ${style.product_card_img_wrapper_big}`}>
                      <img src={item} alt='' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={style.product_card_swiper_mini} id='swiper_day_mini'>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={1}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={{
                    993: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    750: {
                      slidesPerView: 3
                    },
                    481: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                  }}
                  autoplay={{ delay: 1500 }}
                >
                  {imageUrls?.map(item => (
                    <SwiperSlide className='swiper-slide'>
                      <div className={`${style.product_card_img_wrapper} ${style.product_card_img_mini} `}>
                        <img src={item} alt='' />
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
              <p className={style.product_card_price}> $ {currentPrice} </p>
              <p className={style.product_card_under_price}>{underPrice}</p>
            </div>
            <div className={style.product_card_related_products}>
              <div className={`${style.product_card_description_items} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                <h6 className={style.product_card_description_subtitle}>{description}</h6>
                <ul className={style.product_card_description_list}>
                  {specsArray?.length && [...specsArray].splice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                  {isOverWeightOpen && specsArray?.length && [...specsArray].splice(4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {(specsArray?.length > 4) && <p className={style.product_card_overview} onClick={() => { setOverWeightOpen(!isOverWeightOpen) }}>Overview {isOverWeightOpen && <SlArrowUp />} {!isOverWeightOpen && < SlArrowDown />}</p>}
              </div>
              {!quantity && <div>
                <h6 className={style.product_card_description_subtitle_available}>
                  Unavailable
                </h6>
              </div>}
              {!!quantity && <div>
                <h6 className={style.product_card_description_subtitle_available}>
                  Available
                </h6>
                <div className={style.product_card_container_for_buttons}>
                  <button className={style.product_card_button_minus} disabled={countToCart === 1} onClick={() => {
                    setCountToCart(prev => prev -= 1)
                    setCountOfAvailable(prev => prev += 1)
                    if (countToCart > 0) {
                      setMultipliedPrice(prev => (prev = Number(prev) - currentPrice).toFixed(2))
                    }
                    if (countToCart === 1) {
                      setMultipliedPrice(currentPrice)
                    }
                  }}>-</button>
                  <span className={style.product_card_count}>{countToCart}</span>
                  <button className={style.product_card_button_plus} disabled={!countOfAvailable} onClick={() => {
                    setCountToCart(prev => prev += 1)
                    setCountOfAvailable(prev => prev -= 1)

                    if (countToCart > 0) {
                      setMultipliedPrice(prev => (prev = Number(prev) + currentPrice).toFixed(2))
                    }
                    if (!countToCart) {
                      setMultipliedPrice(currentPrice)
                    }
                  }}>+</button>
                </div>
              </div>}
              <div className={`${style.product_card_total_price} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                <p className={style.product_card_total_price_cash}>${multipliedPrice} </p>
                <button className={style.product_card_total_price_button} onClick={handleClick}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductCard