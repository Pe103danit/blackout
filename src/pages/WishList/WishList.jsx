import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import style from './WishList.module.scss';

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';
import WishListItem from './WishListItem';

const WishList = (props) => {
  const products = useSelector(state => state.ProductReducer.products);
  const productsIsLoading = useSelector(state => state.ProductReducer.productIsLoading);
  const [wishListItems, setWishListItems] = useState(JSON.parse(localStorage.getItem('wishListItems')) || []);
  const [isOnWishList, setIsOnWishList] = useState(JSON.parse(localStorage.getItem('wishList')) !== 0 || null);
console.log('products', products);
console.log('productsIsLoading', productsIsLoading);
console.log('wishListItems', wishListItems);
console.log('isOnWishList', isOnWishList);

  return (<>
    <h2 className={style.wishList__title}>
      Wishlist
    </h2>
    <div>
      {isOnWishList
        ? (<div className={style.wishList}>
          {wishListItems.map((itemNo, index) => {
            const wishList = products.find((product) => itemNo === product.itemNo);
            console.log('wishList', wishList);
            return (

              // <div>WishLIST</div>
              <WishListItem
                key={index}
                product={wishList}
              />
            )
          })
          }
        </div>)
        : (<EmptyWishListContainer />)
      }
    </div>
  </>
  )
}

export default connect()(WishList);
