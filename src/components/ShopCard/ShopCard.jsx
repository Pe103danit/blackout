import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWishlist } from '../../redux/reducers/WishListReducer/WishListReducer'
import { MarketIcon, MarketIconDark, HeartIconCard, HeartIconCardFill } from '../assets/Icons'
import style from './ShopCard.module.scss'
import { addToBasket, updateBasket, toggleProductToCart } from '../../redux/reducers/ProductReducer/ProductReducer'
import { makeShortText } from '../assets/makeShortText'
import Timer from '../../pages/Offers/Timer/Timer'

const ShopCard = (props) => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.UIStateReducer.lightTheme)
  const [wishListHeard, setWishListHeard] = useState(JSON.parse(window.localStorage.getItem('wishListItems')).includes(props.productItem.itemNo))

  const WishItemStatus = () => {
    setWishListHeard(prevWishListHeard => !prevWishListHeard)
    dispatch(toggleWishlist(props.productItem.itemNo))
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
    }
    localStorage.setItem('basketList', JSON.stringify([
        ...storageBasket
      ])
    )
    const countBasket = parseInt(localStorage.getItem('basket'))
    localStorage.setItem('basket', `${countBasket + countToCart}`)
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
          <div className={style.shopCard__description__prevPrice}>${props.productItem.previousPrice} USD</div>)
        }
          {props.offerPrice && timerVisible && <Timer/>}
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
        }`} onClick={() => WishItemStatus()}>
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