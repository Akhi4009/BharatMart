import React from 'react'
import Industrial from "../component/akhilesh/Industrial/Industrial"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Industrialpage = () => {
  return (
    <>
   <Snavbar/>
   <Text m={5}><Link to="/shopping">Shopping</Link></Text>
    <Box w="90%" mx="auto" textAlign="center">
    <Heading m={3}>Industrial</Heading>
    <Industrial/>
    </Box>
    <Footer/>
  
    </>
  )
}

export default Industrialpage