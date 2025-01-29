import React from 'react';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sign from './Pages/sign';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      );
}

export default App;
