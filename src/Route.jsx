import React from 'react';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Sign from './Pages/sign';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/product/:id' element={<Home/>} />
            <Route path="/Sign" element={<Sign />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;
