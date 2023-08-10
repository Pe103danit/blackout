import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

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
        </div>
    )
}
export default App;
