import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './Head';
import Ban from './Mainbody';
import Footer from "./footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Ban />
    <Footer />
  </React.StrictMode>
);


