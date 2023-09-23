import React, { useEffect, useState, useCallback } from 'react'
import { instance } from '../../components/assets/axiosUrl'
import { useQuery } from 'react-query'

import CartWindow from '../../components/CartWindow/CartWindow'
import Spinner from '../../components/Spinner/Spinner'
import ShopCard from '../../components/ShopCard/ShopCard'
import PagePagination from '../../components/PagePagination/PagePagination'
import SelectBar from '../../components/SelectBar/SelectBar';
import style from './ProductCategories.module.scss'
import { useSelector } from 'react-redux'
import PriceSlider from '../../components/PriceSlider/PriceSlider'

const ProductCategories = ({ title, categoryName, isOpenCartWindow, toggleProductToCart, clearAllCategoriesToFilter, clearPriceFilter }) => {
  useEffect(() => {
    clearAllCategoriesToFilter()
    clearPriceFilter()
  }, [clearAllCategoriesToFilter, clearPriceFilter])
  const [products, setProducts] = useState([])
  const wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || []
  const currentItems = useSelector(state => state.ProductReducer.productsPerPage)

  const [hasScrolled, setHasScrolled] = useState(false)

  const getProductCategories = useCallback(async () => {
    const { data } = await instance.get(`/api/products/filter?categories=${categoryName}`)
    setProducts(data.products)
    return data
  }, [categoryName])

  const { data, isLoading, isError } = useQuery('getProductCategories', getProductCategories)

  useEffect(() => {
    if (data) {
      setProducts(data.products)
    }
  }, [data])
  useEffect(() => {
    if (isOpenCartWindow) {
        setTimeout(() => {
           toggleProductToCart(null)
        }, 1000)
    }
}, [isOpenCartWindow, toggleProductToCart])

  useEffect(() => {
    if (categoryName) {
      getProductCategories()
    }
  }, [categoryName, getProductCategories])

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
    <div className={style.productCategories}>
      <h3 className={style.productCategories__title}>{title}</h3>
      {isOpenCartWindow && <CartWindow />}
      {(isLoading)
        ? (<Spinner />)
        : (<>
            <PriceSlider productItems={products}/>
            <SelectBar />
            <div className={style.productCategories__container}>
              {currentItems.map((productItem) => (
                <ShopCard
                  key={productItem.itemNo}
                  productItem={productItem}
                  isWished={wishListItems.includes(productItem.itemNo)}
                />
              ))}
            </div>
            <PagePagination cardOnPage={12} productItems={products} />
          </>
        )}
      {isError && <p>Something went wrong</p>}
    </div>
  )
}

export default ProductCategories