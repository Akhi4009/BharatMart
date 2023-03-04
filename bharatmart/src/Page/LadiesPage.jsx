import React from 'react'
import Ladies from "../component/akhilesh/Ladies/Ladies"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading } from '@chakra-ui/react'


const LadiesPage = () => {
  return (
    <>
<Snavbar/>
    <Ladies/>
    <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Ladies</Heading>
   <Ladies/>
   </Box>
    <Footer/>

    </>
  )
}

export default LadiesPage