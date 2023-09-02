import React from 'react';
import style from './ProductCard.module.scss'
const Star = ({ selected = false }) =>
    <li className={`${style.product_card_star} ${selected ? style.product_card_selected : ''} `} >
    </li>

export default Star
