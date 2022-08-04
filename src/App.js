import React from 'react'
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Route,  Routes} from 'react-router-dom';

import Products from './Components/Products';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/products" element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;
