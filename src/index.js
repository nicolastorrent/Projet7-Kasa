import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //{ BrowserRouter } englobe mon app e routeur  parent pour utiliser les fonctionnalités de react rooter dans l’application
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);

