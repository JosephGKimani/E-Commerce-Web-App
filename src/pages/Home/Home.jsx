import React, { useState } from 'react'
import { Header } from '../../components/Header/Header'

import './Home.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDOwnload from '../../components/AppDownload/AppDOwnload'

const Home = () => {
    const [category, setCategory]=useState("All");
  return (
    <div>
        <Header></Header>
       
        <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    
    <FoodDisplay category={category}></FoodDisplay>
    
    <AppDOwnload></AppDOwnload></div>
   
  )
}

export default Home