import Header from './pages/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { ProductCard } from './components/ProductCard'
    const object = {
    isHot: true,
    title: 'EcoFlow DELTA 2 Portable Power Station',
    rating: 4.6,
    price: '£1,099.00 GBP',
    underPrice: 'Tax included.',
    img: ['//uk.ecoflow.com/cdn/shop/products/ecoflow-delta-2-portable-power-station-35798225649856_535x.png?v=1675245586'],
    description: {
        title: 'Best Seller of Outdoor Generators & Garden on Amazon *',
        characters: [
            '1-3kWh Expandable capacity',
            'Huge AC output',
            '7x Faster AC charging',
            'Or go green without sacrificing speed',
            'Built to last 6x longer',
            'Control from anywhere',
            '5-Year warranty'
        ]
    },
    options: [
        {
            title: 'eco delta 2',
            price: '1099gbp'
        },
        {
            title: ' delta 2+220w',
            price: '1548gbp'
        },
        {
            title: 'delta 2+smart',
            price: '1848gbp'
        }
    ],
    available: 5,
    _uLike: [{
        title: 'ecoflow bifacial',
        price: '448gpb',
        img: '',
        description: '23% conversion rate'
    }, {
        title: 'ecoflow waterproof',
        price: '69gpb',
        img: '',
    }],
    get uLike () {
        return this._uLike;
    },
    set uLike (value) {
        this._uLike = value;
    },
}
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={<div>123</div>}
                />
            </Routes>
            <ProductCard {...object} />
        </>
    )
}
export default App;
