import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MenuCard from './Component/basics/MenuCard';
import Navbar from './Component/basics/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
