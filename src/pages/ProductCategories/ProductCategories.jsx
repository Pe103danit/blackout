import React, { useEffect, useState } from 'react'
import CartWindow from '../../components/CartWindow/CartWindow'
import Spinner from '../../components/Spinner/Spinner'
import ShopCard from '../../components/ShopCard/ShopCard'
import PagePagination from '../../components/PagePagination/PagePagination'
import SelectBar from '../../components/SelectBar/SelectBar'
import style from './ProductCategories.module.scss'
import PriceSlider from '../../components/PriceSlider/PriceSlider'

const ProductCategories = ({
  title,
  categoryName,
  isOpenCartWindow,
  toggleProductToCart,
  productIsLoading,
  productsPerPage
}) => {
  const wishListItems = JSON.parse(
    window.localStorage.getItem('wishListItems')
  ) || []

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (isOpenCartWindow) {
      setTimeout(() => {
        toggleProductToCart(null)
      }, 1000)
    }
  }, [isOpenCartWindow, toggleProductToCart])

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
      {isOpenCartWindow && <CartWindow/>}
      {(productIsLoading === true)
        ? (<Spinner/>)
        : (
          <>
            <PriceSlider productItems={productsPerPage}/>
            <SelectBar/>
            <div className={style.productCategories__container}>
              {productsPerPage.map((productItem) => (
                <ShopCard
                  key={productItem.itemNo}
                  productItem={productItem}
                  isWished={wishListItems.includes(productItem.itemNo)}
                />
              ))}
            </div>
            <PagePagination cardOnPage={12} productItems={productsPerPage} categoryName={`categories=${categoryName}&`}
                            categoryNameShort={categoryName}/>
          </>
        )}
    </div>
  )
}

export default ProductCategories
