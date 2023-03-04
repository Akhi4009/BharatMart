import React from 'react'
import Footwear from '../component/akhilesh/Footwear/Footwear'
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'

import { Box,Heading,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const FootwearPage = () => {
  return (
    <>
   <Snavbar/>
   <Text m={5}><Link to="/shopping">Shopping</Link></Text>
   <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Footwear</Heading>
   <Footwear/>
   </Box>
    
    <Footer/>

    </>
  )
}

export default FootwearPage