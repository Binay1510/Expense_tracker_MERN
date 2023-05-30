
import React from 'react';
//import { render } from 'react-dom'
//import { transitions, positions, Provider as AlertProvider } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic'
import ReactDOM  from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { GlobalProvider } from './context/gloablContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
    <App/>
    </GlobalProvider>
  
  </React.StrictMode>
);