import { Card,  CardBody, Image,Stack,Heading,Text,Button,Container,CardFooter,ButtonGroup,Divider} from '@chakra-ui/react'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addToCart } from '../../redux/Cart/action'





let Adddata="ADDDATA"


const ProductItem = (ele) => {
  const{image,title,price,brand}=ele


 const dispatch=useDispatch()
 




  const handleAdd=(ele)=>{
dispatch(addToCart(ele))
  }

 

 
  return (
    <>
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={image}
        alt={title}
        borderRadius='lg'
        w={{base:"100%",md:"50%"}}
        m="auto"
        
        
      />
      <Stack mt='3' spacing='3'>
        <Heading size='sm'>{brand}</Heading>
        <Text>
          {title}
        </Text>
        <Text color='blue.600' >
        ₹{price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue' onClick={()=>handleAdd(ele)}>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
    </>
  )
}

export default ProductItem