import React, { useState, } from 'react';
import { connect } from 'react-redux';

import style from './Shop.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import PagePagination from '../../components/PagePagination/PagePagination';
import ShopCard from '../../components/ShopCard/ShopCard';

const Shop = ({ productItems, productIsLoading }) => {
    const [currentItems, setCurrentItems] = useState(productItems.slice(0, 12));
    console.log(currentItems);

    const handlePageChange = (newItems) => {
        setCurrentItems(newItems);
    };

    return (
        (productIsLoading === true)
            ? (<Spinner />)
            : (<>
                <div className={style.cardContainer}>
                    {currentItems.map((productItem, index) => (
                        <ShopCard key={index} productItem={productItem} />
                    ))}
                </div>
                <PagePagination cardOnPage={12} productItems={productItems} changesOnPage={handlePageChange} />
            </>
            )
    )
}
const mapStateToProps = state => {
    return {
        productItems: state.ProductReducer.products,
        productIsLoading: state.ProductReducer.productIsLoading
    };
};

export default connect(mapStateToProps)(Shop);