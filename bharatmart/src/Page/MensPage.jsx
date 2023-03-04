import React from 'react'
import Mens from "../component/akhilesh/Mens/Mens"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const MensPage = () => {
  return (
   <>
 <Snavbar/>
 <Text m={5}><Link to="/shopping">Shopping</Link></Text>
   <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Mens</Heading>
   <Mens/>
   </Box>
 <Footer/>
   
   </>
  )
}

export default MensPage