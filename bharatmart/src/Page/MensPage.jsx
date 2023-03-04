import React from 'react'
import Mens from "../component/akhilesh/Mens/Mens"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading } from '@chakra-ui/react'


const MensPage = () => {
  return (
   <>
 <Snavbar/>
   
   <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Mens</Heading>
   <Mens/>
   </Box>
 <Footer/>
   
   </>
  )
}

export default MensPage