import React from 'react'
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Route,  Routes} from 'react-router-dom';

import Products from './Components/Products';
import Product from './Components/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/product/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;