import React,{useState,useEffect} from 'react'

import { Flex, Image,Input,InputGroup,Text,Button,Box, Show,useMediaQuery, localStorageManager
 } from '@chakra-ui/react'
 import { SearchIcon} from '@chakra-ui/icons'
 import { getData } from '../api'

 import { Link } from 'react-router-dom'
 
 


const Snavbar = () => {
  const [data,setData]=useState([])
  const [isLargerThan800] = useMediaQuery('(min-width: 768px)')

 useEffect(()=>{
getData("cart").then(res=>setData(res)) 
 },[])



 
  return (
    <Flex justifyContent="space-evenly" h="100px"  mb={10}>
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

<Box ><Button h="30px" p={5} backgroundColor="#2e3192" color="white">Cart</Button></Box>
</Link>

<a href='https://63ce3dcac2544213842550ce--cozy-fudge-0aa21e.netlify.app/' >
  <Box>
  <Button h="30px" p={5} backgroundColor="teal" color="white">Admin</Button>
  </Box>
</a>

</Flex>
 </Flex>
  )
}

export default Snavbar


