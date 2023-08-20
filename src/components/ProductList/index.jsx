import React, { useEffect } from 'react'
import { ProductCard } from '../ProductCard';
import { getAllProducts } from '../../redux/reducers/ProductReducer/productReducer'
import { useDispatch } from 'react-redux';
const product = {
    sale: true,
    name: 'EcoFlow DELTA 2 Portable Power Station',
    rating: 4.6,
    currentPrice: 1099.00,
    underPrice: 'Tax included.',
    imgUrls: ['./imgs/product1.png', './imgs/product2.png', './imgs/product3.png', './imgs/product4.png', './imgs/product5.png', './imgs/product6.png', './imgs/product7.png'],
    Specs: [
        '1-3kWh Expandable capacity',
        'Huge AC output',
        '7x Faster AC charging',
        'Or go green without sacrificing speed',
        'Built to last 6x longer',
        'Control from anywhere',
        '5-Year warranty'
    ],
    description: 'Best Seller of Outdoor Generators & Garden on Amazon *',
    options: [
        {
            title: 'eco delta 2',
            price: 1099
        },
        {
            title: ' delta 2+220w',
            price: 1548
        },
        {
            title: 'delta 2+smart',
            price: 1848
        }
    ],
    available: 5
}

export const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return (
        <ProductCard {...product} />
    )
}
