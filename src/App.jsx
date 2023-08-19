import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import { ProductList } from './components/ProductList';
import HomeContainer from './pages/Home/homeContainer'
import Shop from './pages/Shop/Shop'
import Offers from './pages/Offers/Offers'
import Delivery from './pages/Delivery/Delivery'
import Payment from './pages/Payment/Payment'
import AboutUs from './pages/AboutUs/AboutUs'
import Contacts from './pages/Contacts/Contacts'
import Cart from './pages/Cart/Cart'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Login from './pages/Login/Login'
import WishList from './pages/WishList/WishList'
import Basket from './pages/Basket/Basket'

const App = (props) => {
  const themeStyle = props.lightTheme ? 'light' : 'dark'
  return (
    <div className={themeStyle}>
      <HeaderContainer/>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/about_us" element={<AboutUs/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path={'*' || '404'} element={<NotFoundPage themeStyle={themeStyle}/>}/>
      </Routes>
    </div>
  )
}
export default App
