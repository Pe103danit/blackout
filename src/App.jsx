import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import HomeContainer from './pages/Home/homeContainer'
import Shop from './pages/Shop/Shop'
import Offers from './pages/Offers/Offers'
import Delivery from './pages/Delivery/Delivery'
import Payment from './pages/Payment/Payment'
import AboutUs from './pages/AboutUs/AboutUs'
import Contacts from './pages/Contacts/Contacts'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import WishList from './pages/WishList/WishList'
import Basket from './pages/Basket/Basket'
import SiteMapContainer from './pages/SiteMap/SiteMapContainer'
import NotFoundPageContainer from './pages/NotFoundPage/NotFoundPageContainer'
import PromoBaner from './components/PromoBaner/PromoBaner';
import Accessories from './pages/ProductCategories/Accessories/Accessories'
import Generators from './pages/ProductCategories/Generators/Generators'
import PortablePowerStations from './pages/ProductCategories/PortablePowerStations/PortablePowerStations'
import PowerBanks from './pages/ProductCategories/PowerBanks/PowerBanks'
import SolarPanels from './pages/ProductCategories/SolarPanels/SolarPanels'
import FooterContainer from './pages/Footer/footerContainer';
import ProductCardPage from './pages/ProductCardPage/ProductCardPage';
import { instance } from './components/assets/axiosUrl'
import { useQuery } from 'react-query'
import { useEffect } from 'react'

const App = (props) => {
  const themeStyle = props.lightTheme ? 'light' : 'dark'
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
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/generators' element={<Generators />} />
        <Route path='/portable_power_stations' element={<PortablePowerStations />} />
        <Route path='/power_banks' element={<PowerBanks />} />
        <Route path='/solar_panels' element={<SolarPanels />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/site_map' element={<SiteMapContainer />} />
        <Route path='/:id' element={<ProductCardPage />} />
        <Route path={'*' || '404'} element={<NotFoundPageContainer />} />
      </Routes>
      <FooterContainer />
    </div>
  )
}
export default App
