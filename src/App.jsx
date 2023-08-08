import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <Routes>
                <Route
                    path='/'
                    element={<WhyChooseUs/>}
                />
            </Routes>
        </>
    )
}
export default App;
