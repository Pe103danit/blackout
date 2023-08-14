import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import { ProductCard } from './components/ProductCard'
const object = {
    isHot: true,
    title: 'EcoFlow DELTA 2 Portable Power Station',
    rating: 4.6,
    price: 1099.00,
    underPrice: 'Tax included.',
    img: ['./imgs/product1.png', './imgs/product2.png', './imgs/product3.png', './imgs/product4.png', './imgs/product5.png', './imgs/product6.png', './imgs/product7.png'],
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
const App = (props) => {
    const themeStyle = props.lightTheme ? 'light' : 'dark'
    return (
        <div className={themeStyle}>
            <HeaderContainer />
            <Routes>
                <Route
                    path='/'
                    element={<WhyChooseUs />}
                />
            </Routes>
            <ProductCard {...object} />
        </div>
    )
}
export default App;
