import Header from './pages/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route
          path='/'
          element={<div>1</div>}
          />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
