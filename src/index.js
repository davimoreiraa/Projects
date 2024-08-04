/* ------------------  RESOURCES -------------------*/
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ------------------  COMPONENTS -------------------*/
import Home from './Pages/Home'

/* ------------------  STYLES -------------------*/
import 'bootstrap/dist/css/bootstrap.css'
import './styles/globals.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <head>
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
     <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
   </head>
   <Home />
  </>
);