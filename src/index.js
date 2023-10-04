import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import AppContainer from './appContainer'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query'

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light')
}

if (!localStorage.getItem('wishList')) {
  localStorage.setItem('wishList', '0')
}

if (!localStorage.getItem('basket')) {
  localStorage.setItem('basket', '0')
}
if (!sessionStorage.getItem('user')) {
  sessionStorage.setItem('user', JSON.stringify({}))
}

if (!localStorage.getItem('basketList')) {
  localStorage.setItem('basketList', JSON.stringify([]))
}

if (!localStorage.getItem('totalBasketSum')) {
  localStorage.setItem('totalBasketSum', JSON.stringify(0))
}

if (!localStorage.getItem('wishListItems')) {
  localStorage.setItem('wishListItems', JSON.stringify([]))
}
if (!sessionStorage.getItem('tokenParts')) {
  sessionStorage.setItem('tokenParts', '')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(

  <Provider store={store}>
    <Helmet>
      <meta charSet='utf-8' />
      <title>BlackOut store</title>
      <meta name='description' content='BlackOut store - best products for cheapest prices' />
      <meta name='keywords' content='ecommerce, online shopping, products, deals' />
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();