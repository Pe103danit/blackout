import React, { useState, useEffect } from 'react';
import { instance } from '../../components/assets/axiosUrl'

import style from './Shop.module.scss';

import ShopCard from '../../components/Carousel/ShopCard/ShopCard';
const Shop = () => {
    return (
        <div>
            <ShopCard/>
        </div>
    )
}
export default Shop
