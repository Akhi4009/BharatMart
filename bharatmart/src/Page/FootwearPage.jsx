import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Footwear from '../component/akhilesh/Footwear/Footwear'
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'
import { getProductData } from '../redux/Product/action'

import { Box,Heading,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const FootwearPage = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(getProductData())
  },[])

  const Product=useSelector(store=>store.productReducer.product)
  return (
    <>
   <Snavbar/>
   <Text m={5}><Link to="/shopping">Shopping</Link></Text>
   <Box w="90%" mx="auto" textAlign="center">
   <Heading m={3}>Footwear</Heading>
   <Footwear Product={Product}/>
   </Box>
    
    <Footer/>

    </>
  )
}

export default FootwearPage