import React from 'react'
import Industrial from "../component/akhilesh/Industrial/Industrial"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading } from '@chakra-ui/react'


const Industrialpage = () => {
  return (
    <>
   <Snavbar/>
    
    <Box w="90%" mx="auto" textAlign="center">
    <Heading m={3}>Industrial</Heading>
    <Industrial/>
    </Box>
    <Footer/>
  
    </>
  )
}

export default Industrialpage