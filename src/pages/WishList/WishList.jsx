import React, { useState, useEffect } from 'react';
import { instance } from '../../components/assets/axiosUrl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';

import WishListItem from './WishListItem';

import style from './WishList.module.scss';

const WishList = () => {
  const [products, setProducts] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = useState(true);
  const theme = useSelector(state => state.UIStateReducer.lightTheme);

  const [wishListItems, setWishListItems] = useState(JSON.parse(localStorage.getItem('wishListItems')) || []);
  const [isOnWishList, setIsOnWishList] = useState(JSON.parse(localStorage.getItem('wishList')) !== 0 || false);

  const getProducts = async () => {
    const { data } = await instance.get('/api/products');
    console.log('products from request', data);

    setProducts(data);
    setProductsIsLoading(false);
    return data
  };

  const { data, isLoading, isError } = useQuery('getProducts', getProducts);

  useEffect(() => {
    if (data) {
      setProducts(data)
      setProductsIsLoading(false);
    }
  }, [data]);

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
    setWishListItems(updatedWishListItems);
    setIsOnWishList(updatedWishListItems.length !== 0 || false);

    window.localStorage.setItem('wishListItems', JSON.stringify(updatedWishListItems));
    window.localStorage.setItem('wishList', updatedWishListItems.length);
  };

  return (<>
    <h2 className={style.wishList__title}>Wishlist</h2>
    <div>
      {(isOnWishList)
        ? (
          <div className={`${style.wishList} ${theme ? '' : style.wishList__darkTheme}`}>
            {wishListItems.map((itemNo, index) => {
              const currentWishList = products.find((product) => itemNo === product.itemNo);
              console.log('wishList', currentWishList);
              return (
                <WishListItem
                  key={index}
                  product={currentWishList}
                  onWishList={(itemNo) => WishListHandler(itemNo)}
                />
              )
            })
            }
            <Link to={'/shop'} className={`${style.wishList__btn_shop} ${theme ? '' : style.wishList__btn_shop__darkTheme}`}>
              <button>CONTINUE SHOPPING</button>
            </Link>
          </div>)
        : (<EmptyWishListContainer />)
      }
    </div>
  </>
  )
}

export default WishList;
