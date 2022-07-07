import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './contexts/AuthContext.jsx';

import FilterContextProvider from './contexts/FilterContext';
import ProductContextProvider from './contexts/ProductContext';
import OrderContextProvider from './contexts/OrderContext';

import Wrapper from './components/utils/Wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <FilterContextProvider>
          <AuthContextProvider>
            <ProductContextProvider>
              <OrderContextProvider>
                <App />
              </OrderContextProvider>
            </ProductContextProvider>
          </AuthContextProvider>
        </FilterContextProvider>
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
