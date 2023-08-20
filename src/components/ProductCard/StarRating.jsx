import React from 'react';
import Star from './Star';
import style from './ProductCard.module.scss'

const StarRating = ({ starsSelected, totalStars = 5 }) =>
    <div className={style.product_star_rating}>
        <ul>
            {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                selected={i < starsSelected} />
        )}
        </ul>
        
        <div className={style.product_card_rating}> {starsSelected} of {totalStars} stars </div>
    </div>

export default StarRating