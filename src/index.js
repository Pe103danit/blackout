import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import AppContainer from './appContainer'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import {Helmet} from 'react-helmet';
import {QueryClient, QueryClientProvider} from 'react-query'

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'light')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(

  <Provider store={store}>
    <Helmet>
      <meta charSet='utf-8' />
      <title>BlackOut store</title>
      <meta name='description' content='BlackOut store - best products for cheapest prices' />
    </Helmet>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <AppContainer/>
    </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();