import React from 'react';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sign from './Pages/sign';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';
import Adminhome from './Pages/admin/Adminhome';
import Order from './Pages/admin/Order';
import User from './Pages/admin/User';
import Catogory from './Pages/Catogory';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/catogory/:catogoryId/product/:id' element={<Product/>} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/catogory/:id" element={<Catogory/>}/>




            <Route path='/h' element={<Adminhome />}></Route>
        <Route path='/Order' element={<Order />}></Route>
        <Route path='/User' element={<User />}></Route>
      


          </Routes>
        </BrowserRouter>
      );
}

export default App;
