import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './pages/Header/headerContainer';
import HomeContainer from './pages/Home/homeContainer'

const App = (props) => {
  const themeStyle = props.lightTheme ? 'light' : 'dark'
    return (
        <div className={themeStyle}>
            <HeaderContainer/>
            <Routes>
                <Route
                    path='/'
                    element={<HomeContainer/>}
                />
            </Routes>
        </div>
    )
}
export default App;
