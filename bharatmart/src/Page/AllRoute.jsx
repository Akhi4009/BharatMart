import React from 'react'
import {Routes,Route} from "react-router-dom"
import Shome from './Shome'
import Login from '../loginandsignup/Login'
import SignupCard from '../loginandsignup/userSignup'
import Cartpage from './Cartpage'
import { Payment } from './Payment'
import LadiesPage from './LadiesPage'
import MensPage from './MensPage'
import FootwearPage from './FootwearPage'
import Industrialpage from './Industrialpage'


 
const AllRoute = () => {
  return (
    <>
  <Routes>
  
 
  <Route path="/" element={<SignupCard/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/carthome" element={<Shome/>}/>
  <Route path="/cart" element={<Cartpage/>}/>
  <Route path="/payment" element={<Payment/>}/>
  <Route path="/ladies" element={<LadiesPage/>}/>
  <Route path="/mens" element={<MensPage/>}/>
  <Route path="/footwear" element={<FootwearPage/>}/>
  <Route path="/industrial" element={<Industrialpage/>}/>
  
 
  </Routes>
    </>
  )
}

export default AllRoute