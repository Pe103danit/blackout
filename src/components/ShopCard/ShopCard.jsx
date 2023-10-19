import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { instance } from '../assets/axiosUrl'
import { MarketIcon, MarketIconDark, HeartIconCard, HeartIconCardFill } from '../assets/Icons'
import style from './ShopCard.module.scss'
import {
  addToBasket,
  updateBasket,
  toggleProductToCart,
} from '../../redux/reducers/ProductReducer/ProductReducer'
import { makeShortText } from '../assets/makeShortText'
import Timer from '../../pages/Offers/Timer/Timer'
import { setWishList } from '../../redux/reducers/WishListReducer/WishListActions'

const ShopCard = (props) => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const [wishListHeard, setWishListHeard] = useState(false)

  let wishList = JSON.parse(localStorage.getItem('wishListItems'));

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
            console.log('Error from CREATE ShopCard', err)
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
              console.log('Error from DEL ShopCard', err)
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
              console.log('Error from ADD ShopCard', err)
            }
          }

          addProductToWishList(props.productItem._id)
        } else {
          wishList = [...wishList, { ...props.productItem }]
          console.log('ADD to WishList without User', wishList)
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

  const handleClick = () => {
    window.scrollTo(0, 0)
    dispatch(toggleProductToCart(props.productItem))
    const candidateId = props.productItem._id
    dispatch(addToBasket(candidateId, countToCart))

    let storageBasket = JSON.parse(localStorage.getItem('basketList'));
    const updateBasketLocalStorage = (updatedBasketList, updatedBasketQuantity) => {
      localStorage.setItem('basketList', JSON.stringify(updatedBasketList));
      localStorage.setItem('basket', updatedBasketQuantity);
    }

    if (storageBasket.length === 0) {
      // Create basket for User - is working
      if (props.token) {
        async function createBasketForUser (productID) {
          const newBasketList = {
            products: [{ product: productID, cartQuantity: 1 }]
          }
          try {
            const response = await instance.post('/api/cart', newBasketList, {
              headers: { Authorization: props.token }
            })
            if (response.status === 200) {
              const newBasketList = response.data.products[0].product;
              const newBasketQuantity = response.data.products[0].cartQuantity;
              console.log('Cart data from ShopCard', response.data);
              updateBasketLocalStorage(newBasketList, newBasketQuantity);
              // some dispatch(updateBasket(newBasketList))
            }
          } catch (err) {
            console.log('Error from CREATE Basket at ShopCard', err)
          }
        }
        createBasketForUser(props.productItem._id)
      } else {
        storageBasket = [{ ...props.productItem, countToCart: 1 }];
        updateBasketLocalStorage(storageBasket, 1);
      }
    } else {
      let isRepeat = false
      storageBasket = storageBasket.map((item) => {
        if (item._id === props.productItem._id) {
          isRepeat = true;
          return ({
            ...item,
            countToCart: item.countToCart + 1,
          })
        } else {
          return item
        }
      })
      console.log('storageBasket after update', storageBasket);
      if (isRepeat) {
        if (props.token) {
          // Update Basket for User
          async function updateProductToBasket (updatedCart) {
            try {
              const response = await instance.put('/api/cart', updatedCart, {
                headers: { Authorization: props.token }
              })
              if (response.status === 200) {
                const updatedBasket = response.data.products.map((product) => {
                  product.product.countToCart = product.cartQuantity;
                  return product.product;
                });
                const updatedBasketQuantity = response.data.products.reduce((total, product) => { return total + product.cartQuantity }, 0);

                updateBasketLocalStorage(updatedBasket, updatedBasketQuantity)
              }
            } catch (err) {
              console.log('Error from Basket update ShopCard for user', err)
            }
          }
          const updatedCart = storageBasket.map(product => {
            console.log('updatedCart id', product._id);
            console.log('updatedCart countToCart', product.countToCart);
            return ({product: product._id, cartQuantity: product.countToCart})
          })

          updateProductToBasket(updatedCart)
        } else {
          const countBasket = parseInt(localStorage.getItem('basket')) + 1;
          updateBasketLocalStorage(storageBasket, countBasket)
        }
      } else {
        if (props.token) {
          // ADD product to Basket for User
          async function addToBasketForUser (productID) {
            try {
              const response = await instance.put(`/api/cart/${productID}`, {
                headers: { Authorization: props.token }
              })
              if (response.status === 200) {
                const addedBasketList = response.data.products.map((product) => {
                  product.product.countToCart = product.cartQuantity;
                  return product.product;
              });
                const addedBasketQuantity = response.data.products.reduce((total, product) => { return total + product.cartQuantity }, 0);
                console.log('Added Basket data from ShopCard', response.data);
                updateBasketLocalStorage(addedBasketList, addedBasketQuantity);
                // some dispatch(updateBasket(newBasketList))
              }
            } catch (err) {
              console.log('Error from CREATE Basket at ShopCard', err)
            }
          }
          addToBasketForUser(props.productItem._id)
        } else {
          storageBasket = [...storageBasket, { ...props.productItem, countToCart: 1 }];
          const countBasket = parseInt(localStorage.getItem('basket')) + 1;
          updateBasketLocalStorage(storageBasket, countBasket)
        }
      }
    }

    // if (storageBasket.length === 0) {
      // storageBasket = [
      //   {
      //     ...props.productItem,
      //     countToCart: 1
      //   }
      // ]
    // } else {
    //   let isRepeat = false
    //   storageBasket = storageBasket.map(item => {
    //     if (item.itemNo === candidateId) {
    //       isRepeat = true
    //       return ({
    //         ...item,
    //         countToCart: item.countToCart + 1,
    //       })
    //     } else {
    //       return (item)
    //     }
    //   })
    //   if (!isRepeat) {
    //     storageBasket = [
    //       ...storageBasket,
    //       {
    //         ...props.productItem,
    //         countToCart: 1
    //       }
    //     ]
    //   }
    // }
    // localStorage.setItem('basketList', JSON.stringify([
    //   ...storageBasket
    // ])
    // )
    // const countBasket = parseInt(localStorage.getItem('basket'))
    // localStorage.setItem('basket', `${countBasket + countToCart}`)
    dispatch(updateBasket(storageBasket))
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
            alt={props.productItem.title} />
          <img className={style.shopCard__imgBlock__img2}
            src={props.productItem.imageUrls[1].replace('/upload/', '/upload/w_368/')}
            alt={props.productItem.title} />
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
          <div className={style.shopCard__description__prevPrice}>${props.productItem.previousPrice} USD</div>)
        }
          {props.offerPrice && timerVisible && <Timer />}
        </>
        <Link to={`/products/${props.productItem.itemNo}`}>
          <div className={style.shopCard__description__order}>
            <h5
              className={`${style.shopCard__description__order__price} ${theme ? '' : style.shopCard__description__order__price__darkTheme} ${props.offerPrice ? `${style.shopCard__priceColorRed} ${style.shopCard__description__order__price__hoverDisable}` : ''} `}>${props.productItem.currentPrice} USD</h5>
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
            ? <HeartIconCardFill />
            : <HeartIconCard />
          }
        </button>
        <button className={style.shopCard__description__order__cart} onClick={handleClick}>
          {theme
            ? <MarketIcon fill={'#4164EC'} />
            : <MarketIconDark />
          }
        </button>
      </div>
    </div>
  )
}

export default ShopCard