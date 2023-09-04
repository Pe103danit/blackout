import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import HomeContainer from './pages/Home/homeContainer'
import Shop from './pages/Shop/Shop'
import Offers from './pages/Offers/Offers'
import Delivery from './pages/Delivery/Delivery'
import Payment from './pages/Payment/Payment'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactsContainer from './pages/Contacts/ContactsContainer';
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import WishList from './pages/WishList/WishList'
import SiteMapContainer from './pages/SiteMap/SiteMapContainer'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import NotFoundPageContainer from './pages/NotFoundPage/NotFoundPageContainer'
import PromoBaner from './components/PromoBaner/PromoBaner';
import FooterContainer from './pages/Footer/footerContainer';
import SignUp from './pages/SignUp/SignUp'
import ProductCardPage from './pages/ProductCardPage/ProductCardPage'
import Account from './pages/Account/Account';
import { instance } from './components/assets/axiosUrl'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'
import { UseSelector, useSelector } from 'react-redux';
import ProductCategoriesContainer from './pages/ProductCategories/ProductCategoriesContainer'
// import PortablePowerStationsContainer from './pages/ProductCategories/PortablePowerStations/PortablePowerStationsContainer'
// import GeneratorsContainer from './pages/ProductCategories/Generators/GeneratorsContainer'
// import AccessoriesContainer from './pages/ProductCategories/Accessories/AccessoriesContainer'
// import SolarPanelsContainer from './pages/ProductCategories/SolarPanels/SolarPanelsContainer'
// import PowerBanksContainer from './pages/ProductCategories/PowerBanks/PowerBanksContainer'
import GoToTop from './components/GoToTop/GoToTop'
import BasketContainer from './pages/Basket/BasketContainer'

const App = (props) => {
  const themeStyle = props.lightTheme ? 'light' : 'dark'
  const user = useSelector(state => state.SessionReducer.user)
  const [token, setToken] = useState(null)
  const getSwiperProducts = async () => {
    const { data } = await instance.get('/api/products')
    return data
  }
  const { data } = useQuery('getProducts', getSwiperProducts)
  useEffect(() => {
    if (data) {
      props.getProducts(data)
    }
  }, [data, props])
  useEffect(() => {
    const token = localStorage.getItem('Signature')
    setToken(token)
  }, [])
  return (
    <div className={themeStyle}>
      <PromoBaner />
      <HeaderContainer />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/contacts' element={<ContactsContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/basket' element={<BasketContainer />} />
        <Route path='/accessories' element={<ProductCategoriesContainer categoryName='Accessories' title='Accessories' />} />
        <Route path='/generators' element={<ProductCategoriesContainer categoryName='Generators' title='Generators' />} />
        <Route path='/portable_power_stations' element={<ProductCategoriesContainer categoryName='Portable Power Stations' title='Portable Power Stations' />} />
        <Route path='/power_banks' element={<ProductCategoriesContainer categoryName='Power Banks' title='Power Banks' />} />
        <Route path='/solar_panels' element={<ProductCategoriesContainer categoryName='Solar Panels' title='Solar Panels' />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/policies/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/site_map' element={<SiteMapContainer />} />
        <Route path='/products/:id' element={<ProductCardPage />} />
        <Route path={'*' || '404'} element={<NotFoundPageContainer />} />
        <Route path='/sign_up' element={<SignUp />} />
        {(token || user) && <Route path='/account' element={<Account />} />}
      </Routes>
      <FooterContainer />
      <GoToTop />
    </div>
  )
}
export default App
