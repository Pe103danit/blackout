import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import style from './WishList.module.scss';

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';
import WishListItem from './WishListItem';

const WishList = ({ productItems, productIsLoading }) => {
  const [isOnWishList, setIsOnWishList] = useState(JSON.parse(window.localStorage.getItem('wishList')) !== 0);
  const [wishListItems, setWishListItems] = useState(JSON.parse(window.localStorage.getItem('wishListItems')) || []);
  // console.log(isOnWishList, JSON.parse(window.localStorage.getItem('wishList')));
  console.log(wishListItems);
  console.log(productItems);
  let wishProducts = [];

  useEffect(() => {
    setIsOnWishList(JSON.parse(window.localStorage.getItem('wishList')) !== 0)
  }, [isOnWishList]);

  if (isOnWishList) {
    wishProducts = productItems.filter((product) => {
      return wishListItems.includes(product.itemNo)
    })
  }
  console.log(wishProducts);

  return (<>
    <h2 className={style.wishList__title}>
      Wishlist
    </h2>
    <div>
      {isOnWishList
        ? (<div className={style.wishList}>
          {wishProducts.map((wishProduct, index) => (
            <WishListItem
              key={index}
              wishItem={wishProduct}
            />
          ))}
          <WishListItem />
        </div>)
        : (<EmptyWishListContainer />)
      }
    </div>
  </>
  )
}

const mapStateToProps = state => {
  return {
    productItems: state.ProductReducer.products,
    productIsLoading: state.ProductReducer.productIsLoading
  };
};

export default connect(mapStateToProps)(WishList);