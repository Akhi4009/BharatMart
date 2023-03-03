import React,{useEffect,useState} from 'react'

import { Box,HStack,Heading,Flex} from '@chakra-ui/react'
import CartItem from './CarTItem'

import {useSelector,useDispatch} from "react-redux"
import {  getCardData } from "../../../redux/Cart/action"





const CartBody = () => {

   const dispatch=useDispatch()
  
  useEffect(()=>{
       dispatch(getCardData())
    },[dispatch])

    const data=useSelector(store=>store.cartReducer.cart)

 
    

    
  return (
    
    <Flex justifyContent="space-around" direction={{base:"column",lg:"row"}}  >
   <Box>
  
   
   {data.CartData && data.CartData?.map(ele=>(
    <CartItem key={ele.id}  ele={ele}/>
 ))}
 
 </Box>


   </Flex>


   
  )
}

export default CartBody