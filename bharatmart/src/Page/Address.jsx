import { HStack,Box, Stack, Flex,useToast} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import AddressForm from '../component/akhilesh/Address/AddressForm'

import AddressCard from "../component/akhilesh/Address/AddressCard"
import { useDispatch,useSelector } from 'react-redux'
import { getAddress,addAddress } from '../redux/Address/action'
import { useNavigate,Navigate } from 'react-router-dom'
import Snavbar from '../component/akhilesh/Shopping/Snavbar'



const initialAddress={
  name:"",
  mobile:"",
  address:"",
  landmark:"",
  pincode:"",
  city:"",
  state:""

}


const Address = () => {

  const dispatch=useDispatch()
  const toast=useToast()
  const navigate=useNavigate()

  const token=JSON.parse(localStorage.getItem("token"))


  

  const handleSubmit=(e,data)=>{
    e.preventDefault()
   dispatch(addAddress(data,token))
   toast({
    title: 'Address Added Successfully',
    description: "Thanku",
    status: 'success',
    duration: 1000,
    isClosable: true,
  })
  navigate("/payment")
    
    }

    useEffect(()=>{
      dispatch(getAddress(token))
    },[])

  const Address=useSelector(store=>store.addressReducer.Address)
  const res=(Address.length==0)
  const isLoading=useSelector(store=>store.addressReducer.isLoading)
//   console.log(Address)




  return (
    <>
  
 
    <Box w="100%" m="auto">
    {res?<AddressForm handleSubmit={handleSubmit} initialAddress={initialAddress} />:<AddressCard/>}
    </Box>
   
    
  
    </>
  )
}

export default Address