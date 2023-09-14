import { useState } from 'react';
import { connect, useSelector } from 'react-redux';

import style from './WishList.module.scss';
import { toggleTheme } from '../../redux/reducers/UIStateReducer/UIStateReducer'

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';

import WishListItem from './WishListItem';

const WishList = (props) => {
  const products = useSelector(state => state.ProductReducer.products);
  const productsIsLoading = useSelector(state => state.ProductReducer.productIsLoading);
  const [wishListItems, setWishListItems] = useState(JSON.parse(localStorage.getItem('wishListItems')) || []);
  const [isOnWishList, setIsOnWishList] = useState(JSON.parse(localStorage.getItem('wishList')) !== 0 || false);
  const [wishList, setWishList] = useState(JSON.parse(window.localStorage.getItem('wishList')) || 0);

  console.log('products', products);
  console.log('productsIsLoading', productsIsLoading);
  console.log('wishListItems', wishListItems);
  console.log('isOnWishList', isOnWishList);

  const WishListHandler = (itemNo) => {
    let updatedWishListItems;

    if (!wishListItems.includes(itemNo)) {
      updatedWishListItems = [...wishListItems, itemNo];
    } else {
      updatedWishListItems = wishListItems.filter(item => item !== itemNo);
    }
    setWishList(updatedWishListItems.length);

    setWishListItems(updatedWishListItems);
    setIsOnWishList(wishList !== 0 || false);

    window.localStorage.setItem('wishListItems', JSON.stringify(updatedWishListItems));
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
