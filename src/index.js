import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/loginPage'
import Signup from './components/signUpPage'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ margin: '0 250px' }}>
      <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<Login />} /> 
      <Route path='signup' element={<Signup />} /> 
      
      </Routes>
      </div>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
