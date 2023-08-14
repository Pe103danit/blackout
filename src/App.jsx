import { Routes, Route } from 'react-router-dom';

// import Carousel from './components/Carousel/Carousel';
import HeaderContainer from './pages/Header/headerContainer';
// import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Offers from './pages/Offers/Offers';
import Delivery from './pages/Delivery/Delivery';
import Payment from './pages/Payment/Payment';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/Contacts/Contacts';
import Cart from './pages/Cart/Cart';
import HomeContainer from './pages/Home/homeContainer'

const App = (props) => {
    const themeStyle = props.lightTheme ? 'light' : 'dark'
    return (
        <div className={themeStyle}>
            <HeaderContainer />
            <Routes>
                <Route path='/' element={<HomeContainer />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/offers' element={<Offers />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
        </div>
    )
}
export default App;
