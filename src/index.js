import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import Ban from './Mainbody';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Ban />
  </React.StrictMode>
);


