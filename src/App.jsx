import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import FooterContainer from './pages/Footer/footerContainer';

const App = (props) => {
  const themeStyle = props.lightTheme ? 'light' : 'dark'
    return (
        <div className={themeStyle}>
            <HeaderContainer/>
            <Routes>
                <Route
                    path='/'
                    element={<WhyChooseUs/>}
                />
            </Routes>
            <FooterContainer/>
        </div>
    )
}
export default App;
