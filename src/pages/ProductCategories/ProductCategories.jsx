import React, { useEffect, useState, useCallback } from 'react'
import { instance } from '../../components/assets/axiosUrl'
import { useQuery } from 'react-query'

import Spinner from '../../components/Spinner/Spinner';
import ShopCard from '../../components/ShopCard/ShopCard';
import PagePagination from '../../components/PagePagination/PagePagination';
import SelectBar from '../../components/SelectBar/SelectBar';

import style from './ProductCategories.module.scss'

const ProductCategories = ({ title, categoryName }) => {
  const [products, setProducts] = useState([])
  const [currentItems, setCurrentItems] = useState(products.slice(0, 12))
  const wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || []

  const [hasScrolled, setHasScrolled] = useState(false)

  const getProductCategories = useCallback(async () => {
    const { data } = await instance.get(`/api/products/filter?categories=${categoryName}&sort=+currentPrice`)
    setProducts(data.products)
    setCurrentItems(data.products.slice(0, 12))
    return data
  }, [categoryName])

  const { data, isLoading, isError } = useQuery('getProductCategories', getProductCategories)

  useEffect(() => {
    if (data) {
      setProducts(data.products)
      setCurrentItems(data.products.slice(0, 12))
    }
  }, [data])

  useEffect(() => {
    if (categoryName) {
      getProductCategories()
    }
  }, [categoryName, getProductCategories])

  const handlePageChange = (newItems) => {
    setCurrentItems(newItems)
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
    <div className={style.productCategories}>
      <h3 className={style.productCategories__title}>{title}</h3>
      {(isLoading)
        ? (<Spinner />)
        : (<>
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
          <PagePagination cardOnPage={12} productItems={products} changesOnPage={handlePageChange} />
        </>
        )}
      {isError && <p>Something went wrong</p>}
    </div>
  )
}

export default ProductCategories