import React,{useEffect,useState} from 'react'

import { Box,HStack,Heading,Flex, Button,Stack} from '@chakra-ui/react'
import CartItem from './CarTItem'

import {useSelector,useDispatch} from "react-redux"
import {  getCardData } from "../../../redux/Cart/action"





const CartBody = () => {

   const dispatch=useDispatch()
  
  useEffect(()=>{
       dispatch(getCardData())
    },[dispatch])

    const data=useSelector(store=>store.cartReducer.cart)
    const sumPrice=(data)=>{

      const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.price*c.quantity),0))
      return res
      
      }

 
    const total=sumPrice(data.CartData)

    
  return (
    
    <Flex justifyContent="space-around" direction={{base:"column-reverse",lg:"row"}} gap={{base:"20px"}}  >

    
   <Box> 
   {data.CartData && data.CartData?.map(ele=>(
    <CartItem key={ele.id}  ele={ele}/>
 ))}
 </Box>
 <Stack boxShadow='sm' p='6' rounded='md' bg='gray' maxHeight={150} gap={2}>
    <Heading as="h3" size="md">Total Price: ₹{total}</Heading>
    
    <Button>Proceed to pay</Button>
    </Stack>


   </Flex>


   
  )
}

export default CartBody