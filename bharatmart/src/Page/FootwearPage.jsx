import React from 'react'
import Footwear from '../component/akhilesh/Footwear/Footwear'
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'

import { Box,Heading } from '@chakra-ui/react'
const FootwearPage = () => {
  return (
    <>
   <Snavbar/>
   <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Footwear</Heading>
   <Footwear/>
   </Box>
    
    <Footer/>

    </>
  )
}

export default FootwearPage