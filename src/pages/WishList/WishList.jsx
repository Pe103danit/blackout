import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { instance } from '../../components/assets/axiosUrl';

import style from './WishList.module.scss';

import EmptyWishListContainer from '../../components/EmptyWishList/EmptyWishListContainer';
import WishListItem from './WishListItem';
import { setWishList } from '../../redux/reducers/WishListReducer/WishListActions'

const WishList = (props) => {
  const theme = props.lightTheme

  let wishListItems = props.wishList;

  const WishListHandler = (productId) => {
    if (props.token) {
      // Delete product to Wishlist for User - is working
      async function delProductToWishList (productId) {
        try {
          const response = await instance.delete(`/api/wishlist/${productId}`, {
            headers: { Authorization: props.token }
          });
          console.log('Response from DEL from Wishlist', response);
          if (response.status === 200) {
            const updatedWishlist = response.data.products;
            console.log('wishListCards from ShopCard during del', updatedWishlist);
            localStorage.setItem('wishListItems', JSON.stringify(updatedWishlist))
            localStorage.setItem('wishList', updatedWishlist.length)
            props.setWishList(updatedWishlist)
          }
        } catch (err) {
          console.log('Error from DEL ShopCard', err);
        }
      }
      delProductToWishList(productId)
    } else {
      wishListItems = wishListItems.filter(item => item._id !== productId)
      localStorage.setItem('wishListItems', JSON.stringify(wishListItems))
      localStorage.setItem('wishList', wishListItems.length)
      props.setWishList(wishListItems)
    }
  }

  return (<>
    <h2 className={style.wishList__title}>
      Wishlist
    </h2>
    <div>
      {wishListItems.length > 0
        ? (
          <div className={`${style.wishList} ${theme ? '' : style.wishList__darkTheme}`}>
            {wishListItems.map((wishItem, index) => {
              return (
                <WishListItem
                  key={index}
                  product={wishItem}
                  onWishList={() => WishListHandler(wishItem._id)}
                />
              )
            })
            }
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
