import { Card,  CardBody, Image,Stack,Heading,Text,Button,useToast,Divider,HStack} from '@chakra-ui/react'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addToCart } from '../../redux/Cart/action'
import { Link,useNavigate } from 'react-router-dom'








const ProductItem = (ele) => {
  const{image,title,price,brand,_id}=ele
  const navigate=useNavigate()

  const token=JSON.parse(localStorage.getItem("token"))
 


 const dispatch=useDispatch()
 const toast=useToast()
 




  const handleAdd=(ele)=>{
dispatch(addToCart(ele,token))
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
    <Card maxW='sm' h={450} pb={20}>
    <Link to={`/shopping/${_id}`}>
    <CardBody  >
      <Image
        src={image}
        alt={title}
        borderRadius='lg'
        w={{base:"100%",md:"50%"}}
        m="auto"
        h={200}
        
        
      />
      <Stack mt='3' alignItems="center" >
        <Heading size='sm'>{brand}</Heading>
        <Text>
          {title}
        </Text>
        <Text color='blue.600' fontWeight="bold" >
        ₹{price}
        </Text>
      </Stack>
  </CardBody>
  </Link>

    <HStack alignItems="center" >
       <Button mx="auto" variant='solid' colorScheme='blue' onClick={()=>handleAdd(ele)} >
          Add to cart
        </Button>
       </HStack>
    
      
  </Card>
    </>
  )
}

export default ProductItem