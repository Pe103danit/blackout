import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import style from './Shop.module.scss'
import PriceSlider from '../../components/PriceSlider/PriceSlider'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import Spinner from '../../components/Spinner/Spinner'
import PagePagination from '../../components/PagePagination/PagePagination'
import ShopCard from '../../components/ShopCard/ShopCard'
import { toggleWishlist } from '../../redux/reducers/WishListReducer/WishListReducer'

const Shop = ({ productItems, productIsLoading }) => {
  const [currentItems, setCurrentItems] = useState(productItems.slice(0, 12))
  const wishListItems = JSON.parse(window.localStorage.getItem('wishListItems'))
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    setCurrentItems(productItems.slice(0, 12))
  }, [productItems])

  const handlePageChange = (newItems) => {
    setCurrentItems(newItems)
  }

  useEffect(() => {
    if (!hasScrolled) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setHasScrolled(true)
    }
  }, [hasScrolled])

  return (
    (productIsLoading === true)
      ? (<Spinner/>)
      : (<>
          <PriceSlider/>
          <CategorySelect/>
          <div className={style.cardContainer}>
            {currentItems.map(productItem => (
              <ShopCard
                key={productItem.itemNo}
                productItem={productItem}
                isWished={wishListItems.includes(productItem.itemNo)}
              />
            ))}
          </div>
          <PagePagination cardOnPage={12} productItems={productItems} changesOnPage={handlePageChange}/>
        </>
      )
  )
}
const mapStateToProps = state => {
  return {
    productItems: state.ProductReducer.products,
    productIsLoading: state.ProductReducer.productIsLoading
  }
}

const mapDispatchToProps = {
  toggleWishlist
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)