import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CustumProvider from './Components/ContextAPI-3/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CustumProvider>

        <App />

    </CustumProvider>
);


