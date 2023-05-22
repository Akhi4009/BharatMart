import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Mens from "../component/akhilesh/Mens/Mens"
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Sachin/Footer'
import { Box,Heading ,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { getProductData } from '../redux/Product/action'


const MensPage = () => {
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
   <Heading m={3}>Mens</Heading>
   <Mens Product={Product}/>
   </Box>
 <Footer/>
   
   </>
  )
}

export default MensPage