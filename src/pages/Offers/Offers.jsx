import React, { useEffect, useState } from 'react';
import { instance } from '../../components/assets/axiosUrl';
import { useQuery } from 'react-query';

import Spinner from '../../components/Spinner/Spinner';
import ShopCard from '../../components/ShopCard/ShopCard';
import PagePagination from '../../components/PagePagination/PagePagination';

import style from './Offers.module.scss';

const Offers = () => {
    const [offersProducts, setOffersProducts] = useState([])
    const [currentItems, setCurrentItems] = useState(offersProducts.slice(0, 12))
    const wishListItems = JSON.parse(window.localStorage.getItem('wishListItems')) || []

    const [hasScrolled, setHasScrolled] = useState(false);

    const getProducts = async () => {
        const { data } = await instance.get('/api/products');
        const offersProductArr = data.filter((product) => product.sale === true);
        console.log('offersProductArr', offersProductArr);
        setOffersProducts(offersProductArr);
        setCurrentItems(offersProducts.slice(0, 12))
        return offersProductArr
    }

    const { data, isLoading, isError } = useQuery('getProducts', getProducts);
    console.log('Offers data', data);

    useEffect(() => {
        if (data) {
            const offersProductArr = data.filter((product) => product.sale === true);
            console.log('offersProductArr', offersProductArr);
            setOffersProducts(offersProductArr);
            setCurrentItems(offersProducts.slice(0, 12))
        }
    }, [data]);

    const handlePageChange = (newItems) => {
        setCurrentItems(newItems)
    }

    useEffect(() => {
        if (!hasScrolled) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
            setHasScrolled(true)
        }
    }, [hasScrolled])

    return (
        <div className={style.offers}>
            <h3 className={style.offers__title}>Offers</h3>
            {(isLoading)
                ? (<Spinner />)
                : (<>
                    <div className={style.offers__container}>
                        {currentItems.map((productItem) => (
                            <ShopCard
                                key={productItem.itemNo}
                                productItem={productItem}
                                isWished={wishListItems.includes(productItem.itemNo)}
                            />
                        ))}
                    </div>
                    <PagePagination cardOnPage={12} productItems={offersProducts} changesOnPage={handlePageChange} />
                </>
                )}
            {isError && <p>Something went wrong</p>}
        </div>
    )
}
export default Offers