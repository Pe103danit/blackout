import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {useQuery} from 'react-query'

import style from './WishList.module.scss';

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';
import Spinner from '../../components/Spinner/Spinner'
import WishListItem from './WishListItem';
import { instance } from '../../components/assets/axiosUrl'

const WishList = (props) => {
  const products = props.products
  const theme = props.lightTheme
  const [isLoading, setIsLoading] = useState(props.products.length === 0)

  const getProductsReq = async () => {
    const {data} = await instance('/api/products')
    console.log(data)
    return data
  }
  const { data } = useQuery('getProducts', getProductsReq)
  console.log(data)
  const [wishListItems, setWishListItems] = useState(props.wishList);
  const [isOnWishList, setIsOnWishList] = useState(props.wishCount !== 0 || false);

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
  }

  useEffect(() => {
    setIsLoading(props.products.length === 0)
  }, [props.products, isLoading])

  if (isLoading) {
    return <Spinner />
  }
  return (<>
      <h2 className={style.wishList__title}>
        Wishlist
      </h2>
      <div>
        {isOnWishList
          ? (
            <div className={`${style.wishList} ${theme ? '' : style.wishList__darkTheme}`}>
              {wishListItems.map((itemNo, index) => {
                const currentWishList = products.find((product) => itemNo === product.itemNo);
                if (currentWishList) {
                  return (

                    <WishListItem
                      key={index}
                      product={currentWishList}
                      onWishList={() => WishListHandler(itemNo)}
                    />
                  )
                } else {
                  return null
                }
              })
              }
              <Link to={'/shop'} className={`${style.wishList__btn_shop} ${theme ? '' : style.wishList__btn_shop__darkTheme}`}>
                <button>
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>)
          : (<EmptyWishListContainer />)
        }
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme,
  productIsLoading: state.ProductReducer.productIsLoading,
  products: state.ProductReducer.products,
  wishList: state.WishListReducer.wishList,
  wishCount: state.WishListReducer.wishCount
});

export default connect(mapStateToProps)(WishList);
