import React from 'react'
import Ladies from "../component/akhilesh/Ladies/Ladies"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { Box,Heading ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const LadiesPage = () => {
  return (
    <>
<Snavbar/>
<Text m={5}><Link to="/shopping">Shopping</Link></Text>
    <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Ladies</Heading>
   <Ladies/>
   </Box>
    <Footer/>

    </>
  )
}

export default LadiesPage