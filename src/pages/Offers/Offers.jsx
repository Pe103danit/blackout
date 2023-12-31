import React, { useEffect, useState, useRef } from 'react'
import { instance } from '../../components/assets/axiosUrl'
import { useQuery } from 'react-query'

import Spinner from '../../components/Spinner/Spinner'
import ShopCard from '../../components/ShopCard/ShopCard'

import { SaleIcon } from '../../components/assets/Icons'

import style from './Offers.module.scss'
import { useSelector } from 'react-redux'

const Offers = () => {
  const [offersProducts, setOffersProducts] = useState([])
  const [currentItems, setCurrentItems] = useState(offersProducts.slice(0, 12))
  const token = useSelector(state => state.SessionReducer.token)
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0
  let wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || []

  const [hasScrolled, setHasScrolled] = useState(false)
  const prevOffersProductsRef = useRef([])

  const getProducts = async () => {
    const { data } = await instance.get('/api/products/filter?sale=true')
    const offersProductArr = data.products
    setOffersProducts(offersProductArr)
    setCurrentItems(offersProducts.slice(0, 12))
    return offersProductArr
  }

  const { data, isLoading, isError } = useQuery('getProductsSale', getProducts)

  useEffect(() => {
    if (data) {
      const offersProductArr = data.filter((product) => product.sale === true)

      if (JSON.stringify(offersProductArr) !== JSON.stringify(prevOffersProductsRef.current)) {
        setOffersProducts(offersProductArr)
        prevOffersProductsRef.current = offersProductArr
      }

      setCurrentItems(offersProductArr.slice(0, 12))
    }
  }, [data])

  const WishListHandler = (itemNo) => {
    if (!wishListItems.includes(itemNo)) {
      wishListItems.push(itemNo)
    } else {
      wishListItems = wishListItems.filter(item => item !== itemNo)
    }
    wishList = wishListItems.length

    window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
    window.localStorage.setItem('wishList', wishList)
  }

  useEffect(() => {
    if (!hasScrolled) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      setHasScrolled(true)
    }
  }, [hasScrolled])

  return (
    <div className={style.offers}>
      <h3 className={style.offers__title}>Offers</h3>
      <div className={style.offers__sale}><SaleIcon/></div>
      {(isLoading)
        ? (<Spinner/>)
        : (<>
            <div className={style.offers__container}>
              {currentItems.map((productItem) => (
                <ShopCard
                  key={productItem.itemNo}
                  productItem={productItem}
                  offerPrice={true}
                  onWishList={() => WishListHandler(productItem.itemNo)}
                  token={token}
                />
              ))}
            </div>
          </>
        )}
      {isError && <p>Something went wrong</p>}
    </div>
  )
}

export default Offers