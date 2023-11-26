import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

import ShoppingComponent from './component/ShoppingComponent';
import ApiComponentCart from './component/ApiComponentCart';
import EventBindingComponent from './component/EventBindingComponent';
import TwoWayBinding from './component/TwoWayBinding';
import TwoWayBindingWithClass from './component/TwoWayBindingWithClass';
import ShoppingInClassComponent from './component/ShoppingInClassComponent';
import LoginComponent from './component/LoginComponent';
import FormComponent from './component/FormComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
