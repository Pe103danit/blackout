import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { useQuery } from 'react-query';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import style from './ProductCard.module.scss'
import StarRating from './StarRating';
import { instance } from '../assets/axiosUrl';
import { addToBasket } from '../../redux/reducers/ProductReducer/ProductReducer';

export const ProductCard = () => {
  // variables
  const { id } = useParams()
  const dispatch = useDispatch()

  // states
  const [product, setProduct] = useState([])
  const [isOverWeightOpen, setOverWeightOpen] = useState(false)
  const [countToCart, setCountToCart] = useState(1)
  const [countOfAvailable, setCountOfAvailable] = useState(0)
  const [multipliedPrice, setMultipliedPrice] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [specsArray, setSpecsArray] = useState([])
  const theme = useSelector(state => state.UIStateReducer.lightTheme)

  const themeStyle = theme ? 'light' : 'dark'
  // get one product
  const getProduct = async () => {
    const { data } = await instance.get(`/api/products/${id}`)
    return data
  }
  const { data } = useQuery('getProduct', getProduct)
  // useEffects
  useEffect(() => {
    setProduct(data)
  }, [data])
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setMultipliedPrice(product?.currentPrice)
    const count = product?.quantity - 1
    setCountOfAvailable(count)
    setSpecsArray(product?.specs)
  }, [product?.currentPrice, product?.quantity, product?.specs])
  // handlers
  const handleClick = () => {
    dispatch(addToBasket(product?.itemNo, countToCart))
    let storageBasket = JSON.parse(localStorage.getItem('basketList'))
    let repeat = false
    storageBasket = storageBasket.map(item => {
      if (item.itemNo === product?.itemNo) {
        repeat = true
        return ({
          itemNo: product?.itemNo,
          countToCart: item.countToCart + countToCart
        })
      } else {
        return item
      }
    })
    if (!repeat) {
      storageBasket.push(
        {
          itemNo: product?.itemNo,
          countToCart
        }
      )
    }
    localStorage.setItem('basketList', JSON.stringify([
      ...storageBasket
    ])
    )
    const countBasket = parseInt(localStorage.getItem('basket'))
    localStorage.setItem('basket', `${countBasket + countToCart}`)
  }
  return (
    <section className={`${style.product} ${themeStyle}`}>
      <div className={style.product_container}>
        <div className={style.product_card}>
          <div className={style.product_swiper_wrapper}>
            <div className='carousel'>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#2164FF',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={style.product_card_swiper}
                autoplay={{ delay: 1500 }}
              >
                {product?.imageUrls?.map((item, index) => (
                  <SwiperSlide key={index} className='swiper-slide'>
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
                      // spaceBetween: 30,
                    },
                    320: {
                      slidesPerView: 2
                    }
                  }}
                  autoplay={{ delay: 1500 }}
                >
                  {product?.imageUrls?.map((item, index) => (
                    <SwiperSlide key={index} className='swiper-slide'>
                      <div className={`${style.product_card_img_wrapper} ${style.product_card_img_mini} `}>
                        <img className={style.product_image_swiper_mini_img} src={item} alt='' />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
          </div>
          <div className={style.product_card_info}>
            <div className={style.product_info}>
              {product?.sale && <p className={style.product_card_hot}>Hot</p>}
              <h2 className={style.product_card_title}>{product?.name}</h2>
              <p><StarRating starsSelected={product?.rating} /></p>
              <p className={style.product_card_price}> $ {product?.currentPrice} </p>
              <p className={style.product_card_under_price}>{product?.underPrice}</p>
            </div>
            <div className={style.product_card_related_products}>
              <div className={`${style.product_card_description_items} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                <h6 className={style.product_card_description_subtitle}>{product?.description}</h6>
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
              {!product?.quantity && <div>
                <h6 className={style.product_card_description_subtitle_available}>
                  Unavailable
                </h6>
              </div>}
              {!!product?.quantity && <div>
                <h6 className={style.product_card_description_subtitle_available}>
                  Available
                </h6>
                <div className={style.product_card_container_for_buttons}>
                  <button className={`${style.product_card_button_available} ${(countToCart === 1) ? style.product_card_button_disable : ''}`} disabled={countToCart === 1} onClick={() => {
                    setCountToCart(prev => prev -= 1)
                    setCountOfAvailable(prev => prev += 1)
                    if (countToCart > 0) {
                      setMultipliedPrice(prev => (prev = Number(prev) - product?.currentPrice).toFixed(2))
                    }
                    if (countToCart === 1) {
                      setMultipliedPrice(product?.currentPrice)
                    }
                  }}>-</button>
                  <span className={style.product_card_count}>{countToCart}</span>
                  <button className={`${style.product_card_button_available} ${(!countOfAvailable) ? style.product_card_button_disable : ''}`} disabled={!countOfAvailable} onClick={() => {
                    setCountToCart(prev => prev += 1)
                    setCountOfAvailable(prev => prev -= 1)

                    if (countToCart > 0) {
                      setMultipliedPrice(prev => (prev = Number(prev) + product?.currentPrice).toFixed(2))
                    }
                    if (!countToCart) {
                      setMultipliedPrice(product?.currentPrice)
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