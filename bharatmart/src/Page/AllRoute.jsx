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
import Home from '../Kaushik/Home'
import PrivateRoute from './PrivateRoute'
import ProductDetails from './ProductDetails'
import Laptop from '../Kaushik/Laptop'
import Details from '../Kaushik/Details'


 
const AllRoute = () => {
  return (
    <>
  <Routes>
  
  <Route path="/" element={<Home/>}/>

  <Route path="/signup" element={<SignupCard/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/shopping" element={<PrivateRoute><Shome/></PrivateRoute>}/>
  <Route path="/shopping/:id" element={<ProductDetails/>}/>
  <Route path="/cart" element={<PrivateRoute><Cartpage/></PrivateRoute>}/>
  <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}/>
  <Route path="/ladies" element={<LadiesPage/>}/>
  <Route path="/mens" element={<MensPage/>}/>
  <Route path="/footwear" element={<FootwearPage/>}/>
  <Route path="/industrial" element={<Industrialpage/>}/>
  <Route path="/laptop" element={<Laptop/>}/>
  <Route path="/laptop/:id" element={<Details/>}/>

  
 
  </Routes>
    </>
  )
}

export default AllRoute