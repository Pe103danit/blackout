import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/headerContainer';
import HomeContainer from './pages/Home/homeContainer'
import Shop from './pages/Shop/Shop'
import Offers from './pages/Offers/Offers'
import DeliveryContainer from './pages/Delivery/DeliveryContainer'
import PaymentContainer from './pages/Payment/PaymentContainer'
import AboutUsContainer from './pages/AboutUs/AboutUsContainer'
import ContactsContainer from './pages/Contacts/ContactsContainer';
import Login from './pages/Login/Login'
import SiteMapContainer from './pages/SiteMap/SiteMapContainer'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import NotFoundPageContainer from './pages/NotFoundPage/NotFoundPageContainer'
import PromoBaner from './components/PromoBaner/PromoBaner';
import FooterContainer from './components/Footer/footerContainer';
import SignUp from './pages/SignUp/SignUp'
import ProductCardPage from './pages/ProductCardPage/ProductCardPage'
import Account from './pages/Account/Account';
import FAQ from './pages/FAQ/FAQ';
import { useEffect } from 'react'
import ProductCategoriesContainer from './pages/ProductCategories/ProductCategoriesContainer'
import GoToTop from './components/GoToTop/GoToTop'
import BasketContainer from './pages/Basket/BasketContainer'
import InformationStep1Container from './pages/Order/InformationStep1/InformationStep1Container'
import ShippingStep2Container from './pages/Order/ShippingStep2/ShippingStep2Container'
import PaymentStep3Container from './pages/Order/PaymentStep3/PaymentStep3.Container'
import SuccessfulOrderContainer from './pages/Order/SuccessfulOrder/SuccessfulOrderContainer'
import UserInfo from './pages/UserInfo/UserInfo';
import UserOrder from './pages/UserOrder/UserOrder';
import WishList from './pages/WishList/WishList';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

const App = (props) => {
  const themeStyle = props.lightTheme ? 'light' : 'dark'
  const token = props.token

  useEffect(() => {
    const token = sessionStorage.getItem('tokenParts')
    const user = sessionStorage.getItem('user')
    if (token) {
      props.setToken(token)
      props.setUser(JSON.parse(user))
      setTimeout(() => {
        sessionStorage.setItem('tokenParts', '')
        sessionStorage.setItem('user', JSON.stringify({}))
        props.setToken(null)
        props.setUser({})
        props.setOrderList(null)
      }, 34020000)
    }
  }, [props])
  return (
    <div className={themeStyle}>
      <PromoBaner />
      <HeaderContainer />
      <Routes>
        <Route index path='/' element={<HomeContainer />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/delivery' element={<DeliveryContainer />} />
        <Route path='/payment' element={<PaymentContainer />} />
        <Route path='/about_us' element={<AboutUsContainer />} />
        <Route path='/contacts' element={<ContactsContainer />} />
        <Route path='/basket' element={<BasketContainer />} />
        <Route path='/accessories' element={<ProductCategoriesContainer categoryName='Accessories' title='Accessories' />} />
        <Route path='/generators' element={<ProductCategoriesContainer categoryName='Generators' title='Generators' />} />
        <Route path='/portable_power_stations' element={<ProductCategoriesContainer categoryName='Portable Power Stations' title='Portable Power Stations' />} />
        <Route path='/power_banks' element={<ProductCategoriesContainer categoryName='Power Banks' title='Power Banks' />} />
        <Route path='/solar_panels' element={<ProductCategoriesContainer categoryName='Solar Panels' title='Solar Panels' />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/policies/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/information' element={<InformationStep1Container />} />
        <Route path='/shipping' element={<ShippingStep2Container />} />
        <Route path='/finish_order' element={<PaymentStep3Container />} />
        <Route path='/success' element={<SuccessfulOrderContainer />} />
        <Route path='/site_map' element={<SiteMapContainer />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/products/:id' element={<ProductCardPage />} />
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        {(token) && <Route path='/user_info' element={<UserInfo />} />}
        {(token) && <Route path='/user_orders' element={<UserOrder />} />}
        {(token) && <Route path='/account' element={<Account />} />}
        <Route path={'*' || '404'} element={<NotFoundPageContainer />} />

      </Routes>
      <FooterContainer />
      <GoToTop />
    </div>
  )
}
export default App
