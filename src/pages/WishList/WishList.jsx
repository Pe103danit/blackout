import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import style from './WishList.module.scss';
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';

import WishListItem from './WishListItem';

const WishList = (props) => {
  const products = useSelector(state => state.ProductReducer.products);
  const productsIsLoading = useSelector(state => state.ProductReducer.productIsLoading);
  let [wishListItems, setWishListItems] = useState(JSON.parse(localStorage.getItem('wishListItems')) || []);
  const [isOnWishList, setIsOnWishList] = useState(JSON.parse(localStorage.getItem('wishList')) !== 0 || null);
  let wishList = JSON.parse(window.localStorage.getItem('wishList')) || 0;

console.log('products', products);
console.log('productsIsLoading', productsIsLoading);
console.log('wishListItems', wishListItems);
console.log('isOnWishList', isOnWishList);

const WishListHandler = (itemNo) => {
  if (!wishListItems.includes(itemNo)) {
      wishListItems.push(itemNo);
  } else {
      wishListItems = wishListItems.filter(item => item !== itemNo);
  }
  wishList = wishListItems.length;
  window.localStorage.setItem('wishListItems', JSON.stringify([...wishListItems]))
  window.localStorage.setItem('wishList', wishList);
};

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
                onWishList={(itemNo) => WishListHandler(itemNo)}
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

const mapStateToProps = (state) => ({
  ...state.UIStateReducer,
  products: state.ProductReducer.products,
});

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
