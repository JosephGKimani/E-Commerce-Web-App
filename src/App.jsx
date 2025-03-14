import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import FooterSection from './components/Footer/FooterSection'; // Ensure proper import
import LoginPopUp from './components/LoginPopUp/LoginPopUp';

const App = () => {
  const [showLogin, setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}></LoginPopUp>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <FooterSection /> 
    </>
  );
};

export default App;
