import { Box, HStack,Image,Heading,Text,Checkbox, Stack,Button,useToast } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { getCardData,deleteAllItemFromCart } from '../../../redux/Cart/action'
import { useNavigate } from 'react-router-dom'
import { getAddress } from '../../../redux/Address/action'


const CashOnDel = () => {

  const [res,setRes]=useState(false)
  console.log(res)
  const bgc=res?"#00b5b7":"gray"
  const toast=useToast()
  const navigate=useNavigate()
  const token=JSON.parse(localStorage.getItem("token"))
 

  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getCardData(token))
dispatch(getAddress(token))
  },[dispatch])

  const data=useSelector(store=>store.cartReducer.cart)
  
  const address=useSelector(store=>store.addressReducer.Address)
 
  
 let res3=data.CartData
 let res4=address?.length===0

  const handleOrder=(id)=>{
    

dispatch(deleteAllItemFromCart(id,token))
setTimeout(()=>{
  navigate("/")
},2000)
toast({
  title: 'Order Placed Successfully',
  description: "We will contact you soon.",
  status: 'success',
  duration: 2000,
  position:"top",
  isClosable: true,
})

  }

 let res1=true
 if(data&&data.CartData?.length>0){
  res1=false
 }

 

 
  return (
    <Stack w={{base:"100%",lg:"80%"}} gap={1}>
    <Box boxShadow='lg' p='6' rounded='md' bg='white'>
    
   
    <HStack alignItems="center" gap={1}>
    <Image src="https://static1.hkrtcdn.com/hknext/static/media/payment/cod-inner.svg" alt="cod"/>
    <Heading as="h4" size="sm">
    CASH ON DELIVERY</Heading>
   
    </HStack>
    <Text pl={12}>
    You will not earn any HK Cash through COD
    </Text>
   
    </Box>
    <Box boxShadow='lg' p='6' rounded='md' bg='orange.100'>
    
    <Heading as="h4" size="sm" >
    Sure about the address?
    </Heading>
    <HStack alignItems="center" gap={1}>
    <Checkbox colorScheme='blue' type="twitter" bg="white" isChecked={res} onChange={()=>setRes(!res)}/>
    <Text >
    Check the box here to confirm & complete your purchase through Cash On Delivery option.
    </Text>
   
    </HStack>
   </Box>
   <Button w={{base:"100%",lg:"50%"}} isDisabled={!res||res1||res4} bg={bgc} onClick={()=>handleOrder(res3[0].user)}>Confirm Order</Button>
    </Stack>
  )
}

export default CashOnDel