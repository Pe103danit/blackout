import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCountBasket, deleteBasketItem, updateBasket } from '../../redux/reducers/ProductReducer/ProductReducer'
import { instance } from '../../components/assets/axiosUrl'

const BasketItem = ({ product }) => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.SessionReducer.token)
  const [deleteStatus, setDeleteStatus] = useState(false)
  const [countToCart, setCountToCart] = useState(Number(product.countToCart))

  async function deleteItemBasketForUser (productID) {
    try {
      await instance.delete(`/api/cart/${productID}`, {
        headers: { Authorization: token }
      })
    } catch (err) {
      console.log('Error', err)
    }
  }

  async function changeItemBasketForUser (newBasketList, method) {
    const reqBody = {
      products: newBasketList.map(el => {
        if (el._id === product._id) {
          return ({
            product: el._id,
            cartQuantity: method === 'decrement' ? el.countToCart - 1 : el.countToCart + 1
          })
        } else {
          return ({
            product: el._id,
            cartQuantity: el.countToCart
          })
        }
      })
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
      console.log('Error from CREATE ShopCard', err)
    }
  }

  const handleChangeCount = (method) => {
    const basket = JSON.parse(localStorage.getItem('basketList'))
    if (countToCart > 1 || method !== 'decrement') {
      setCountToCart(method === 'decrement'
        ? countToCart - 1
        : countToCart + 1
      )
      changeItemBasketForUser(basket, method)
    }
  }

  const handleRemoveFromBasket = () => {
    if (token) {
      deleteItemBasketForUser(product._id)
    }
    dispatch(deleteBasketItem(product.itemNo))
    setDeleteStatus(true)
  }

  useEffect(() => {
    const basketList = JSON.parse(localStorage.getItem('basketList'))
    if (!token) {
      let allCountBasket = 0
      const newBasketList = basketList.map(el => {
        if (el.itemNo === product.itemNo) {
          el.countToCart = countToCart
        }
        allCountBasket += el.countToCart
        return el
      })
      localStorage.setItem('basketList', JSON.stringify(newBasketList))
      localStorage.setItem('basket', allCountBasket)
    }
  }, [countToCart, product, token])
  useEffect(() => {
    dispatch(changeCountBasket(product.itemNo, countToCart))
  }, [countToCart, product.itemNo, dispatch])
  if (deleteStatus) {
    return null
  }

  const img = product.imageUrls[0].replace('/upload/', '/upload/w_100/')

  return (
    <div key={product.itemNo} className={style.section_container_body_left_product}>
      <div className={style.section_container_body_left_product_checkbox}>
        <input type="checkbox"/>
      </div>
      <NavLink to={`/products/${product.itemNo}`} className={style.section_container_body_left_product_photo}>
        <img src={img} alt={product.name} title={product.name}/>
      </NavLink>
      <div className={style.section_container_body_left_product_name}>
        <NavLink to={`/products/${product.itemNo}`}>
          <p>{product.name}</p>
          <p>{product.model}</p>
        </NavLink>
      </div>
      <div className={style.section_container_body_left_product_counter}>
        <div className={style.section_container_body_left_product_counter_inner}>
          <button onClick={() => handleChangeCount('decrement')}>-</button>
          <input
            type="text"
            value={countToCart}
            onChange={(e) => setCountToCart(e.target.value)}
          />
          <button onClick={() => handleChangeCount('increment')}>+</button>
        </div>
      </div>
      <div className={style.section_container_body_left_product_price}>
        <p>
          ${product.currentPrice.toFixed(2)}
        </p>
        <button onClick={handleRemoveFromBasket}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default BasketItem