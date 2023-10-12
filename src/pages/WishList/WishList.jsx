<<<<<<< HEAD
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
=======
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
>>>>>>> master

import style from './WishList.module.scss';

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';
import WishListItem from './WishListItem';
<<<<<<< HEAD
=======
import { setWishList } from '../../redux/reducers/WishListReducer/WishListActions'
>>>>>>> master

const WishList = (props) => {
  const theme = props.lightTheme

<<<<<<< HEAD
  const [wishListItems, setWishListItems] = useState(props.wishList);
  console.log('wishListItems from Wishlist', wishListItems);
  const [isOnWishList, setIsOnWishList] = useState(props.wishCount !== 0 || false);
  console.log('isOnWishList from WishList', isOnWishList);
=======
  let wishListItems = props.wishList;
>>>>>>> master

  const WishListHandler = (itemNo) => {
    wishListItems = wishListItems.filter(item => item.itemNo !== itemNo)
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems))
    localStorage.setItem('wishList', wishListItems.length)
    props.setWishList(wishListItems)
  }

<<<<<<< HEAD
  return (
    <>
=======
  return (<>
>>>>>>> master
      <h2 className={style.wishList__title}>
        Wishlist
      </h2>
      <div>
        {wishListItems.length > 0
          ? (
            <div className={`${style.wishList} ${theme ? '' : style.wishList__darkTheme}`}>
<<<<<<< HEAD
              {wishListItems.map((itemWishList, index) => (
                <WishListItem
                  key={index}
                  product={itemWishList}
                  onWishList={() => WishListHandler(itemWishList)}
                />
              ))}
=======
              {wishListItems.map((wishItem, index) => {
                  return (
                    <WishListItem
                      key={index}
                      product={wishItem}
                      onWishList={() => WishListHandler(wishItem.itemNo)}
                    />
                  )
              })
              }
>>>>>>> master
              <Link to={'/shop'} className={`${style.wishList__btn_shop} ${theme ? '' : style.wishList__btn_shop__darkTheme}`}>
                <button>
                  CONTINUE SHOPPING
                </button>
              </Link>
            </div>
          )
          : (<EmptyWishListContainer />)
        }
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  lightTheme: state.UIStateReducer.lightTheme,
  wishList: state.WishListReducer.wishList,
  wishCount: state.WishListReducer.wishCount
})

const mapDispatchToProps = {
  setWishList
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
