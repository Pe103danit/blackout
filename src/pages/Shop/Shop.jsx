import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import style from './Shop.module.scss'
import PriceSlider from '../../components/PriceSlider/PriceSlider'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import Spinner from '../../components/Spinner/Spinner'
import PagePagination from '../../components/PagePagination/PagePagination'
import ShopCard from '../../components/ShopCard/ShopCard'
import { toggleWishlist } from '../../redux/reducers/WishListReducer/WishListReducer'

const Shop = ({ productItems }) => {
  const currentItems = useSelector(state => state.ProductReducer.productsPerPage)
  const wishListItems = JSON.parse(window.localStorage.getItem('wishListItems'))
  const [hasScrolled, setHasScrolled] = useState(false)

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
    (currentItems[0] === 'loading')
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
          <PagePagination cardOnPage={12} productItems={productItems} />
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