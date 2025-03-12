import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <div className='app'><Navbar/>
    
    <Routes>

  <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Cart' element={<Cart></Cart>}></Route>
      <Route path='/PlaceOrder' element={<PlaceOrder></PlaceOrder>}></Route>


    </Routes>
    </div>
  )
}

export default App