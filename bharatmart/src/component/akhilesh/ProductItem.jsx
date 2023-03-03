import { Card,  CardBody, Image,Stack,Heading,Text,Button,useToast,Divider} from '@chakra-ui/react'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addToCart } from '../../redux/Cart/action'





let Adddata="ADDDATA"


const ProductItem = (ele) => {
  const{image,title,price,brand}=ele


 const dispatch=useDispatch()
 const toast=useToast()
 




  const handleAdd=(ele)=>{
dispatch(addToCart(ele))
toast({
  title: 'Item added in the cart',
  description: "Thanku",
  status: 'success',
  duration: 1000,
  isClosable: true,
})
  }

 

 
  return (
    <>
    <Card maxW='sm' h={450}>
    <CardBody>
      <Image
        src={image}
        alt={title}
        borderRadius='lg'
        w={{base:"100%",md:"50%"}}
        m="auto"
        h={200}
        
        
      />
      <Stack mt='3' >
        <Heading size='sm'>{brand}</Heading>
        <Text>
          {title}
        </Text>
        <Text color='blue.600' fontWeight="bold" >
        ₹{price}
        </Text>
      </Stack>
      <Divider  />
   
       
        <Button mt={5} variant='solid' colorScheme='blue' onClick={()=>handleAdd(ele)}>
          Add to cart
        </Button>
    </CardBody>
    
      
  </Card>
    </>
  )
}

export default ProductItem