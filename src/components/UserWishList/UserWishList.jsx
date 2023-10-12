import { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { instance } from '../../components/assets/axiosUrl';
import { Link } from 'react-router-dom';

import style from './UserWishList.module.scss';

import EmptyWishListContainer from '../EmptyWishList/EmptyWishListContainer';

const UserWishList = ({ token }) => {
    // console.log('token from UserWishList', token);
    const theme = useSelector(state => state.UIStateReducer.lightTheme);
    const [wishListItems, setWishListItems] = useState(null);
    const [wishListItemIsLoading, setWishListItemIsLoading] = useState(true);

    // Create wishlist for User - is working
    // useEffect(() => {
    //     async function createWishlist (newWishlist) {
    //         try {
    //             const response = await instance.post('/api/wishlist', newWishlist, {
    //                 headers: { Authorization: token }
    //             });
    //             console.log('newWishlist from UserWishList', response.data);
    //         } catch (error) {
    //             console.log('Error from UserWishList', error);
    //         }
    //     }
    //     const newWishlistData = {
    //         products: ['64fc0ca8b67efd9a68af20b2']
    //     };
    //     createWishlist(newWishlistData);
    // }, [token]);

    // Get wishlist for User - is working
    // useEffect(() => {
    //     async function fetchWishListItems () {
    //         try {
    //             const response = await instance.get('/api/wishlist', {
    //                 headers: { Authorization: token }
    //             });
    //             const wishlist = response.data;
    //             console.log('Wishlist from UserWishList', wishlist);
    //             setWishListItems(wishlist);
    //             setWishListItemIsLoading(false);
    //         } catch (err) {
    //             console.log('Error from get UserWishList', err);
    //             setWishListItemIsLoading(false);
    //         }
    //     }

    //     fetchWishListItems();
    // }, [token]);

    // Add product to Wishlist for User - is working
    // async function addProductToWishList (productId) {
    //     console.log(productId);
    //     if (wishListItemIsLoading) {
    //         if (!wishListItems || !wishListItems.products.some(item => item._id === productId)) {
    //             try {
    //                 const response = await instance.put(`/api/wishlist/${productId}`, null, {
    //                     headers: { Authorization: token }
    //                 });
    //                 const updatedWishlist = response.data;
    //                 console.log('UpdatedWishlist from UserWishList', updatedWishlist);
    //                 setWishListItems(updatedWishlist);
    //             } catch (err) {
    //                 console.log('Error from ADD UserWishList', err);
    //             }
    //         }
    //     }
    // }
    // addProductToWishList('64fc0ca8b67efd9a68af20bb')

    return (
        <div className={style.userWishList}>
            <h2 className={style.userWishList__title}>
                Wishlist from user
            </h2>
        </div>
    );
}

export default UserWishList