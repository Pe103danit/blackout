import Header from './pages/Header/Header';
import {Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route
                    path='/'
                    element={<div>1</div>}
                />
            </Routes>
        </>
    )
}
export default App;
