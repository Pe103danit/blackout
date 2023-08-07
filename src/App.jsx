import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer'

const App = () => {
    return (
        <>
            <HeaderContainer/>
            <Routes>
                <Route
                    path='/'
                    element={<div>123</div>}
                />
            </Routes>
        </>
    )
}
export default App;
