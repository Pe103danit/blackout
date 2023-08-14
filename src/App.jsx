import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import { ProductList } from './components/ProductList';
import HomeContainer from './pages/Home/homeContainer'

const App = (props) => {
    const themeStyle = props.lightTheme ? 'light' : 'dark'
    return (
        <div className={themeStyle}>
            <HeaderContainer />
            <Routes>
                <Route
                    path='/'
                    element={<WhyChooseUs />}
                    // element={<HomeContainer/>}
                />
            </Routes>
            <ProductList/>
        </div>
    )
}
export default App;
