import React,{useEffect} from 'react'

import { Box,Heading,Flex, Button,Stack} from '@chakra-ui/react'
import CartItem from './CarTItem'

import {useSelector,useDispatch} from "react-redux"
import {  getCardData } from "../../../redux/Cart/action"
import { useNavigate } from 'react-router-dom'






const CartBody = () => {

   const dispatch=useDispatch()
   const token=JSON.parse(localStorage.getItem("token"))
   const navigate=useNavigate()
  
  useEffect(()=>{
       dispatch(getCardData(token))
    },[dispatch])

    const data=useSelector(store=>store.cartReducer.cart)
    const sumPrice=(data)=>{

      const res=  Math.round(data&&data.reduce((a,c)=>a+ Number(c.price*c.quantity),0))
      return res
      
      }

      const handleClick=()=>{

        navigate("/payment")
      }

 
    const total=sumPrice(data.CartData)

    
  return (
    
    <Flex justifyContent="space-around" direction={{base:"column-reverse",lg:"row"}} gap={{base:"20px"}}  >

    
   <Box m="auto"> 
   {data.CartData && data.CartData?.map(ele=>(
    <CartItem key={ele._id}  ele={ele}/>
 ))}
 </Box>
 <Stack boxShadow='sm' p='6' rounded='md' bg='gray' maxHeight={150} gap={2} w={{base:"50%",md:"auto"}} mx="auto"
 position="sticky" top={100}>
    <Heading as="h3" size="md">Total Price: ₹{total}</Heading>
    
    <Button onClick={handleClick}>Proceed to pay</Button>
   
    </Stack>


   </Flex>


   
  )
}

export default CartBody