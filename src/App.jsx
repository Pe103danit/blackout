import {Routes, Route} from 'react-router-dom';

import Carousel from "./components/Carousel/Carousel";
import HeaderContainer from './pages/Header/headerContainer';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <Carousel />
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
