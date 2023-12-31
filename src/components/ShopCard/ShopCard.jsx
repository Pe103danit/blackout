import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { instance } from '../assets/axiosUrl'
import { MarketIcon, MarketIconDark, HeartIconCard, HeartIconCardFill } from '../assets/Icons'
import style from './ShopCard.module.scss'
import {
  addToBasket,
  updateBasket,
  toggleProductToCart
} from '../../redux/reducers/ProductReducer/ProductReducer'
import { makeShortText } from '../assets/makeShortText'
import Timer from '../../pages/Offers/Timer/Timer'
import { setWishList } from '../../redux/reducers/WishListReducer/WishListActions'

const ShopCard = (props) => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const [wishListHeard, setWishListHeard] = useState(false)

  let wishList = JSON.parse(localStorage.getItem('wishListItems'))

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
    checkIsWish(props.productItem.itemNo)
    // eslint-disable-next-line
  }, [props.productItem.itemNo])

  const updateLocalStorage = (updatedValue) => {
    localStorage.setItem('wishListItems', JSON.stringify(updatedValue))
    localStorage.setItem('wishList', updatedValue.length)
    dispatch(setWishList(updatedValue))
  }

  const WishItemStatus = () => {
    wishList = JSON.parse(localStorage.getItem('wishListItems'))
    if (wishList.length === 0) {
      if (props.token) {
        // Create product to Wishlist for User - is working
        async function createWishListForUser (productId) {
          const newWishlist = {
            products: [productId]
          }
          try {
            const response = await instance.post('/api/wishlist', newWishlist, {
              headers: { Authorization: props.token }
            })
            if (response.status === 200) {
              const newWishlist = response.data.products
              console.log('NewWishlist from ShopCard during Create', newWishlist)
              updateLocalStorage(newWishlist)
              setWishListHeard(true)
            }
          } catch (err) {
            if (err.response.status === 500) {
              setTimeout(() => {
                createWishListForUser(productId)
              }, 500)
            } else {
              console.log('Error from CREATE ShopCard', err)
            }
          }
        }

        createWishListForUser(props.productItem._id)
      } else {
        wishList = [props.productItem]
        console.log('Wishlist create without User', wishList)
        updateLocalStorage(wishList)
        setWishListHeard(true)
      }
    } else {
      const isInclude = wishList.some(item => item.itemNo === props.productItem.itemNo)
      if (isInclude) {
        if (props.token) {
          // Delete product to Wishlist for User - is working
          async function delProductToWishList (productId) {
            try {
              const response = await instance.delete(`/api/wishlist/${productId}`, {
                headers: { Authorization: props.token }
              })
              if (response.status === 200) {
                const updatedWishlist = response.data.products
                updateLocalStorage(updatedWishlist)
                setWishListHeard(false)
              }
            } catch (err) {
              if (err.response.status === 500) {
                setTimeout(() => {
                  delProductToWishList(productId)
                }, 500)
              } else {
                console.log('Error from CREATE ShopCard', err)
              }
            }
          }

          delProductToWishList(props.productItem._id)
        } else {
          wishList = wishList.filter(item => item.itemNo !== props.productItem.itemNo)
          updateLocalStorage(wishList)
          setWishListHeard(false)
        }
      } else {
        if (props.token) {
          // Add product to Wishlist for User - is working
          async function addProductToWishList (productId) {
            try {
              const response = await instance.put(`/api/wishlist/${productId}`, null, {
                headers: { Authorization: props.token }
              })
              if (response.status === 200) {
                const updatedWishlist = response.data.products
                updateLocalStorage(updatedWishlist)
                setWishListHeard(true)
              }
            } catch (err) {
              if (err.response.status === 500) {
                setTimeout(() => {
                  addProductToWishList(productId)
                }, 500)
              } else {
                console.log('Error from CREATE ShopCard', err)
              }
            }
          }

          addProductToWishList(props.productItem._id)
        } else {
          wishList = [...wishList, { ...props.productItem }]
          updateLocalStorage(wishList)
          setWishListHeard(true)
        }
      }
    }
  }

  const [timerVisible, setTimerVisible] = useState(false)
  const handleMouseEnter = () => {
    setTimerVisible(true)
  }

  const handleMouseLeave = () => {
    setTimerVisible(false)
  }
  const [countToCart] = useState(1)

  async function createBasketForUser (productID) {
    const newBasketList = {
      products: [
        {
          product: productID,
          cartQuantity: 1
        }
      ]
    }
    try {
      const response = await instance.post('/api/cart', newBasketList, {
        headers: { Authorization: props.token }
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
        setTimeout(() => {
          createBasketForUser(productID)
        }, 500)
      } else {
        console.log('Error from CREATE ShopCard', err)
      }
    }
  }

  async function changeItemBasketForUser (productID) {
    try {
      const response = await instance.put(`/api/cart/${productID}`, {}, {
        headers: { Authorization: props.token }
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
        setTimeout(() => {
          changeItemBasketForUser(productID)
        }, 500)
      } else {
        console.log('Error from CREATE ShopCard', err)
      }
    }
  }

  const handleClick = () => {
    window.scrollTo(0, 0)
    dispatch(toggleProductToCart(props.productItem))
    const candidateId = props.productItem.itemNo
    dispatch(addToBasket(candidateId, countToCart))
    let storageBasket = JSON.parse(localStorage.getItem('basketList'))

    if (storageBasket.length === 0) {
      storageBasket = [
        {
          ...props.productItem,
          countToCart: 1
        }
      ]
      if (props.token) {
        createBasketForUser(props.productItem._id)
      } else {
        localStorage.setItem('basketList', JSON.stringify([
          ...storageBasket
        ]))
        dispatch(updateBasket(storageBasket))
      }
    } else {
      if (props.token) {
        changeItemBasketForUser(props.productItem._id)
      } else {
        let isRepeat = false
        storageBasket = storageBasket.map(item => {
          if (item.itemNo === candidateId) {
            isRepeat = true
            return ({
              ...item,
              countToCart: item.countToCart + 1,
            })
          } else {
            return (item)
          }
        })

        if (!isRepeat) {
          storageBasket = [
            ...storageBasket,
            {
              ...props.productItem,
              countToCart: 1
            }
          ]
        }
        localStorage.setItem('basketList', JSON.stringify([
            ...storageBasket
          ])
        )
        dispatch(updateBasket(storageBasket))
      }
    }
  }

  return (
    <div className={`${style.shopCard} ${theme ? '' : style.shopCard__darkTheme}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
    >
      <Link to={`/products/${props.productItem.itemNo}`}>
        <div className={style.shopCard__imgBlock}>
          <img className={style.shopCard__imgBlock__img1}
               src={props.productItem.imageUrls[0].replace('/upload/', '/upload/w_368/')}
               alt={props.productItem.title}/>
          <img className={style.shopCard__imgBlock__img2}
               src={props.productItem.imageUrls[1].replace('/upload/', '/upload/w_368/')}
               alt={props.productItem.title}/>
        </div>
      </Link>
      <div className={style.shopCard__description}>
        <h3
          className={`${style.shopCard__description__name} ${theme ? '' : style.shopCard__description__name__darkTheme}`}>
          {props.productItem.name.length > 30
            ? makeShortText(props.productItem.name)
            : props.productItem.name
          }
        </h3>
        <h3
          className={`${style.shopCard__description__categories} ${theme ? '' : style.shopCard__description__categories__darkTheme}`}>{props.productItem.categories}</h3>
        <p
          className={`${style.shopCard__description__model} ${theme ? '' : style.shopCard__description__model__darkTheme}`}>{props.productItem.model}</p>
        <>{props.offerPrice && (
          <div className={style.shopCard__description__prevPrice}>${props.productItem.previousPrice}</div>)
        }
          {props.offerPrice && timerVisible && <Timer/>}
        </>
        <Link to={`/products/${props.productItem.itemNo}`}>
          <div className={style.shopCard__description__order}>
            <h5
              className={`${style.shopCard__description__order__price} ${theme ? '' : style.shopCard__description__order__price__darkTheme} ${props.offerPrice ? `${style.shopCard__priceColorRed} ${style.shopCard__description__order__price__hoverDisable}` : ''} `}>${props.productItem.currentPrice}</h5>
            <button
              className={`${style.shopCard__description__order__btn} ${props.offerPrice ? style.shopCard__description__order__btn__hoverDisable : ''}`}>SHOP
              NOW
            </button>
          </div>
        </Link>
        <button className={`${style.shopCard__description__order__wishList} ${theme
          ? style['shopCard__description__order__wishList--backgroundWhite']
          : style['shopCard__description__order__wishList--backgroundBlack']
        }`} onClick={WishItemStatus}>
          {wishListHeard
            ? <HeartIconCardFill/>
            : <HeartIconCard/>
          }
        </button>
        <button className={style.shopCard__description__order__cart} onClick={handleClick}>
          {theme
            ? <MarketIcon fill={'#4164EC'}/>
            : <MarketIconDark/>
          }
        </button>
      </div>
    </div>
  )
}

export default ShopCard