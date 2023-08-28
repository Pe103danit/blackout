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
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import NotFoundPageContainer from './pages/NotFoundPage/NotFoundPageContainer'
import PromoBaner from './components/PromoBaner/PromoBaner';
import FooterContainer from './pages/Footer/footerContainer';
import { instance } from './components/assets/axiosUrl'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import PortablePowerStationsContainer
  from './pages/ProductCategories/PortablePowerStations/PortablePowerStationsContainer'
import GeneratorsContainer from './pages/ProductCategories/Generators/GeneratorsContainer'
import AccessoriesContainer from './pages/ProductCategories/Accessories/AccessoriesContainer'
import SolarPanelsContainer from './pages/ProductCategories/SolarPanels/SolarPanelsContainer'
import PowerBanksContainer from './pages/ProductCategories/PowerBanks/PowerBanksContainer'

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
        <Route path='/' element={<HomeContainer/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/accessories' element={<AccessoriesContainer/>}/>
        <Route path='/generators' element={<GeneratorsContainer/>}/>
        <Route path='/portable_power_stations' element={<PortablePowerStationsContainer/>}/>
        <Route path='/power_banks' element={<PowerBanksContainer/>}/>
        <Route path='/solar_panels' element={<SolarPanelsContainer/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/policies/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/site_map' element={<SiteMapContainer/>}/>
        <Route path={'*' || '404'} element={<NotFoundPageContainer/>}/>
      </Routes>
      <FooterContainer />
    </div>
  )
}
export default App
