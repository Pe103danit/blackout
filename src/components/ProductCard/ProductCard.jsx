import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import { useQuery } from 'react-query'
import CartWindow from '../CartWindow/CartWindow'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import style from './ProductCard.module.scss'
import StarRating from './StarRating'
import Spinner from '../Spinner/Spinner'
import { instance } from '../assets/axiosUrl'
import { addToBasket, toggleProductToCart, updateBasket } from '../../redux/reducers/ProductReducer/ProductReducer'
import { setWishList } from '../../redux/reducers/WishListReducer/WishListActions'

export const ProductCard = () => {
  // variables
  const { id } = useParams()
  const dispatch = useDispatch()
  // states
  const [product, setProduct] = useState({})
  const [isOverWeightOpen, setOverWeightOpen] = useState(false)
  const [countToCart, setCountToCart] = useState(1)
  const [countOfAvailable, setCountOfAvailable] = useState(0)
  const [multipliedPrice, setMultipliedPrice] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [specsArray, setSpecsArray] = useState([])
  const [isSpinner, setSpinner] = useState(true)
  const [isClicked, setClicked] = useState(false)
  const [wishListHeard, setWishListHeard] = useState(false)
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const isOpenCartWindow = useSelector(state => state.ProductReducer.isOpenCartWindow)
  const token = useSelector(state => state.SessionReducer.token)
  const themeStyle = theme ? 'light' : 'dark'
  let wishList = JSON.parse(localStorage.getItem('wishListItems'))
  // get one product
  const getProduct = async () => {
    const { data } = await instance.get(`/api/products/${id}`)
    return data
  }
  const { data } = useQuery(['getProduct', id], getProduct)
  // useEffects
  useEffect(() => {
    setSpinner(true)
    setThumbsSwiper(null)
    setProduct({})
  }, [id])
  useEffect(() => {
    if (data) {
      setProduct(data)
      setSpinner(false)
    }
  }, [data])

  useEffect(() => {
    if (isOpenCartWindow) {
      setTimeout(() => {
        dispatch(toggleProductToCart({}))
      }, 1000)
    }
  }, [isOpenCartWindow, dispatch])

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

  async function createBasketForUser (productID, cartQuantity = 1) {
    const newBasketList = {
      products: [
        {
          product: productID,
          cartQuantity
        }
      ]
    }
    try {
      const response = await instance.post('/api/cart', newBasketList, {
        headers: { Authorization: token }
      })
      if (response.status === 200) {
        const storageBasket = [
          {
            ...response.data.products[0].product,
            countToCart: response.data.products[0].cartQuantity
          }
        ]
        localStorage.setItem('basketList', JSON.stringify([
            ...storageBasket
          ])
        )
        dispatch(updateBasket(storageBasket))
      }
    } catch (err) {
      if (err.response.status === 500) {
        createBasketForUser(productID, cartQuantity)
      } else {
        console.log('Error from CREATE ProductCard', err)
      }
    }
  }

  async function changeItemBasketForUser (newBasketList) {
    const reqBody = {
      products: newBasketList.map(el => ({
        product: el._id,
        cartQuantity: el.countToCart
      }))
    }
    try {
      const response = await instance.put('/api/cart', reqBody, {
        headers: { Authorization: token }
      })
      if (response.status === 200) {
        const storageBasket = response.data.products.map(el => ({ ...el.product, countToCart: el.cartQuantity }))
        localStorage.setItem('basketList', JSON.stringify([
            ...storageBasket
          ])
        )
        dispatch(updateBasket(storageBasket))
      }
    } catch (err) {
      if (err.response.status === 500) {
        changeItemBasketForUser(newBasketList)
      } else {
        console.log('Error from CREATE ProductCard', err)
      }
    }
  }

  const handleClick = () => {
    window.scrollTo(0, 0)
    dispatch(toggleProductToCart(product))
    const candidateId = product.itemNo
    dispatch(addToBasket(candidateId, countToCart))
    let storageBasket = JSON.parse(localStorage.getItem('basketList'))

    if (storageBasket.length === 0) {
      storageBasket = [
        {
          ...product,
          countToCart
        }
      ]
      if (token) {
        createBasketForUser(product._id, countToCart)
      } else {
        localStorage.setItem('basketList', JSON.stringify([
          ...storageBasket
        ]))
        dispatch(updateBasket(storageBasket))
      }
    } else {
      let isRepeat = false
      storageBasket = storageBasket.map(item => {
        if (item.itemNo === candidateId) {
          isRepeat = true
          return ({
            ...item,
            countToCart: countToCart + item.countToCart
          })
        } else {
          return (item)
        }
      })

      if (!isRepeat) {
        storageBasket = [
          ...storageBasket,
          {
            ...product,
            countToCart
          }
        ]
      }
      if (token) {
        changeItemBasketForUser(storageBasket)
      } else {
        localStorage.setItem('basketList', JSON.stringify([
            ...storageBasket
          ])
        )
        dispatch(updateBasket(storageBasket))
      }
    }
  }
  const updateLocalStorage = (updatedValue) => {
    localStorage.setItem('wishListItems', JSON.stringify(updatedValue))
    localStorage.setItem('wishList', updatedValue.length)
    dispatch(setWishList(updatedValue))
  }

  const checkIsWish = (itemNo) => {
    let isWish = false
    wishList.forEach(item => {
      if (item.itemNo === itemNo) {
        isWish = true
      }
    })
    setWishListHeard(isWish)
  }

  useEffect(() => {
    checkIsWish(product.itemNo)
    // eslint-disable-next-line
  }, [product.itemNo])

  const WishItemStatus = () => {
    wishList = JSON.parse(localStorage.getItem('wishListItems'))
    if (wishList.length === 0) {
      if (token) {
        // Create product to Wishlist for User - is working
        async function createWishListForUser (productId) {
          const newWishlist = {
            products: [productId]
          }
          try {
            const response = await instance.post('/api/wishlist', newWishlist, {
              headers: { Authorization: token }
            })
            if (response.status === 200) {
              const newWishlist = response.data.products
              updateLocalStorage(newWishlist)
              setWishListHeard(true)
            }
          } catch (err) {
            if (err.response.status === 500) {
              WishItemStatus()
            } else {
              console.log('Error from CREATE ProductCard', err)
            }
          }
        }
        createWishListForUser(product._id)
      } else {
        wishList = [product]
        updateLocalStorage(wishList)
        setWishListHeard(true)
      }
    } else {
      const isInclude = wishList.some(item => item.itemNo === product.itemNo)
      if (isInclude) {
        if (token) {
          // Delete product to Wishlist for User - is working
          async function delProductToWishList (productId) {
            try {
              const response = await instance.delete(`/api/wishlist/${productId}`, {
                headers: { Authorization: token }
              })
              if (response.status === 200) {
                const updatedWishlist = response.data.products
                updateLocalStorage(updatedWishlist)
                setWishListHeard(false)
              }
            } catch (err) {
              if (err.response.status === 500) {
                WishItemStatus()
              } else {
                console.log('Error from CREATE ProductCard', err)
              }
            }
          }
          delProductToWishList(product._id)
        } else {
          wishList = wishList.filter(item => item.itemNo !== product.itemNo)
          updateLocalStorage(wishList)
          setWishListHeard(false)
        }
      } else {
        if (token) {
          // Add product to Wishlist for User - is working
          async function addProductToWishList (productId) {
            try {
              const response = await instance.put(`/api/wishlist/${productId}`, null, {
                headers: { Authorization: token }
              })
              if (response.status === 200) {
                const updatedWishlist = response.data.products
                updateLocalStorage(updatedWishlist)
                setWishListHeard(true)
              }
            } catch (err) {
              if (err.response.status === 500) {
                WishItemStatus()
              } else {
                console.log('Error from CREATE ProductCard', err)
              }
            }
          }
          addProductToWishList(product._id)
        } else {
          wishList = [...wishList, { ...product }]
          updateLocalStorage(wishList)
          setWishListHeard(true)
        }
      }
    }
  }

  return (
    <>{isSpinner && <Spinner/>}
      {!isSpinner &&
        <section className={`${style.product} ${themeStyle}`}>
          {isOpenCartWindow && <CartWindow/>}
          <div className={style.product_container}>
            <div className={style.product_card}>
              <div className={style.product_swiper_wrapper}>
                <div className="carousel">
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
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className={`${style.product_card_img_wrapper} ${style.product_card_img_wrapper_big}`}>
                          <img src={item.replace('/upload/', '/upload/w_501/')} alt={product?.name}
                               title={product?.name}/>
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
                          slidesPerView: 2
                        },
                        320: {
                          slidesPerView: 2
                        }
                      }}
                      autoplay={{ delay: 1500 }}
                    >
                      {product?.imageUrls?.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className={`${style.product_card_img_wrapper} ${style.product_card_img_mini} `}>
                            <img className={style.product_image_swiper_mini_img}
                                 src={item.replace('/upload/', '/upload/w_501/')} alt={product?.name}
                                 title={product?.name}/>
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

                  <div><StarRating starsSelected={product?.rating}/></div>
                  <p className={style.product_card_price}> $ {product?.currentPrice} </p>
                  <p className={style.product_card_under_price}>{product?.underPrice}</p>
                </div>
                <div className={style.product_card_related_products}>
                  <div
                    className={`${style.product_card_description_items} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                    <h6 className={style.product_card_description_subtitle}>{product?.description}</h6>
                    <ul className={style.product_card_description_list}>
                      {specsArray?.length && [...specsArray].splice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                      {isOverWeightOpen && specsArray?.length && [...specsArray].splice(4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {(specsArray?.length > 4) && <p className={style.product_card_overview}
                                                    onClick={() => { setOverWeightOpen(!isOverWeightOpen) }}>Overview {isOverWeightOpen &&
                      <SlArrowUp/>} {!isOverWeightOpen && < SlArrowDown/>}</p>}
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
                      <button
                        className={`${style.product_card_button_available} ${(countToCart === 1) ? style.product_card_button_disable : ''}`}
                        disabled={countToCart === 1} onClick={() => {
                        setCountToCart(prev => prev - 1)
                        setCountOfAvailable(prev => prev + 1)
                        if (countToCart > 0) {
                          setMultipliedPrice(prev => (Number(prev) - product?.currentPrice).toFixed(2))
                        }
                        if (countToCart === 1) {
                          setMultipliedPrice(product?.currentPrice)
                        }
                      }}>-
                      </button>
                      <span className={style.product_card_count}>{countToCart}</span>
                      <button
                        className={`${style.product_card_button_available} ${(!countOfAvailable) ? style.product_card_button_disable : ''}`}
                        disabled={!countOfAvailable} onClick={() => {
                        setCountToCart(prev => prev + 1)
                        setCountOfAvailable(prev => prev - 1)

                        if (countToCart > 0) {
                          setMultipliedPrice(prev => (Number(prev) + product?.currentPrice).toFixed(2))
                        }
                        if (!countToCart) {
                          setMultipliedPrice(product?.currentPrice)
                        }
                      }}>+
                      </button>
                    </div>
                  </div>}
                  <div
                    className={`${style.product_card_total_price} ${(themeStyle === 'dark') ? themeStyle : style.product_card_description_items_bg}`}>
                    <div className={style.product_container_for_heart}>
                      <p className={style.product_card_total_price_cash}>${multipliedPrice} </p>
                      <div
                        onClick={() => {
                          setClicked(!isClicked)
                          WishItemStatus()
                        }}
                        className={style.product_favorite_background}
                      >
                        {wishListHeard
                          ? (
                            <AiTwotoneHeart className={style.product_fav_heart}/>
                          )
                          : (
                            <AiOutlineHeart className={style.product_fav_heart}/>
                          )}
                      </div>
                    </div>
                    <button className={style.product_card_total_price_button} onClick={handleClick}>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}
export default ProductCard