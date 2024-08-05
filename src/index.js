/* ------------------ RESOURCES -------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ------------------ COMPONENTS -------------------*/
import Home from './Pages/Home'

/* ------------------ STYLES -------------------*/
import 'bootstrap/dist/css/bootstrap.css'
import './styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Home />
  </>
);