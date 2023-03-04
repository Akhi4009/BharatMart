import React,{useState,useEffect} from 'react'

import { Flex, Image,Input,InputGroup,Text,Button,Box, Show,useMediaQuery, localStorageManager
 } from '@chakra-ui/react'
 import { SearchIcon} from '@chakra-ui/icons'
import { getCardData } from '../../../redux/Cart/action'

 import { Link } from 'react-router-dom'
 import {useDispatch,useSelector} from "react-redux"
 
 


const Snavbar = () => {
 
  const [isLargerThan800] = useMediaQuery('(min-width: 768px)')
  const dispatch=useDispatch()
  const token=JSON.parse(localStorage.getItem("token"))

 useEffect(()=>{
dispatch(getCardData(token))
 },[])


const cart=useSelector(store=>store.cartReducer.cart)
let res=(cart.CartData?.length)

 
  return (
    <Flex justifyContent="space-evenly" h="100px"  mb={10} pos="sticky" top={0} zIndex={3} 
   bg="gray.100" >
     <Link to="/">
     <Box w="100%"> 
          <Image   src="https://i.ibb.co/Zc5Y127/logo-bharatmart2.png" alt="logo-bharatmart2" w="150px"  />
      </Box>
      </Link> 
    <Flex mt={25} gap={10} >
     {isLargerThan800 &&
        <Box>
      <InputGroup>
      
      <Input placeholder='What are you looking for?' />
      <Button h="30px"  p={5}backgroundColor="#2a6462" color="white"><SearchIcon mr={3}/> Search</Button>
      </InputGroup>
      </Box>}
<Link to="/cart">

<Box ><Button h="30px" p={5} backgroundColor="#2e3192" color="white">Cart {res>0?res:""}</Button></Box>
</Link>



</Flex>
 </Flex>
  )
}

export default Snavbar


