import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeFromWishList } from '../../redux/reducers/WishListReducer/WishListActions'

import style from './WishList.module.scss';

const WishListItem = () => {
    // console.log(product);
    const dispatch = useDispatch()
    const [deleteStatus, setDeleteStatus] = useState(false)

    const handleRemoveFromWishlist = () => {
        dispatch(removeFromWishList(product.itemNo))
        setDeleteStatus(true)
    }

    const product = {
        imageUrls: [
            'https://res.cloudinary.com/dfmmwy38x/image/upload/v1691805711/jackery-500_5_emlz2h.jpg',
            'https://res.cloudinary.com/dfmmwy38x/image/upload/v1691805711/power-station-500_6_r9m6ju.jpg',
            'https://res.cloudinary.com/dfmmwy38x/image/upload/v1691805711/power-station-500_2_fhzztp.jpg',
            'https://res.cloudinary.com/dfmmwy38x/image/upload/v1691805956/3-min_b5f520cd-5323-45ed-bdf0-ab7db018ce4d_2048x_odog9j.jpg',
            'https://res.cloudinary.com/dfmmwy38x/image/upload/v1691805956/E500_1-min_2048x_jzlqnv.jpg'
        ],
        name: 'Jackery Explorer 500',
        brand: 'Jackery',
        model: 'Explorer 500',
        id: 'JCR-003',
        itemNo: '000003',
        categories: 'Portable Power Stations',
        currentPrice: '539.99',
        quantity: '20',
        productUrl: '',
        rating: '4.5',
        color: 'Black/Orange',
        specs: [
            '518 Wh Capacity, 500W Inverter (1000W Surge)',
            'Supports Multiple Appliance Charging',
            'Lightweight and Portable Design',
            '3 Ways to Recharge',
            '37.9dB Quiet Power Station'
        ],
        description: 'The Jackery Explorer 500 is a portable power station with a 518Wh capacity. It_s suitable for camping, outdoor events, and as an emergency backup power source for small appliances and devices.'

    }
    return (
        <div className={style.wishListItem}>
            <div className={style.wishListItem__checkbox}>
                <input type='checkbox' />
            </div>
            <NavLink to={`/products/${product.itemNo}`} className={style.wishListItem__image}>
                <img src={product.imageUrls[0]} alt={product.name} title={product.name} />
            </NavLink>
            <div className={style.wishListItem__description}>
                <NavLink to={`/products/${product.itemNo}`} className={style.wishListItem__description__link}>
                    <p className={style.wishListItem__description__link_type}>{product.name}</p>
                    <p className={style.wishListItem__description__link_model}>{product.model}</p>
                </NavLink>
            </div>
            <div className={style.wishListItem__leftBlock}>
                <p className={style.wishListItem__leftBlock__price}>
                    ${product.currentPrice}
                </p>
                <button onClick={handleRemoveFromWishlist} className={style.wishListItem__leftBlock__btn}>
                    Remove
                </button>
            </div>
        </div>
    )
}
export default WishListItem