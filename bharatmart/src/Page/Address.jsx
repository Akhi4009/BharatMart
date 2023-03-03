import { HStack,Box, Stack, Flex,useToast} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import AddressForm from '../components/Address/AddressForm'
import OrderSummary from '../components/Card/OrderSummary'
import AddressCard from '../components/Address/AddressCard'
import { useDispatch,useSelector } from 'react-redux'
import { getAddress,addAddress } from '../redux/Address/action'
import { useNavigate,Navigate } from 'react-router-dom'
import Loading from '../components/Card/Loading'
import CardNavbar from '../components/Card/CardNavbar'

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
  const token=useSelector(store=>store.authReducer.token)
  console.log(token)
  


  

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
if(isLoading){
  return <Loading/>
}



  return (
    <>
    <CardNavbar/>
    <Flex direction={{base:"column", md:"row"}}  gap={10} justifyContent="center">
    <Box w="100%" m="auto">
    {res?<AddressForm handleSubmit={handleSubmit} initialAddress={initialAddress} />:<AddressCard/>}
    </Box>
    <Box w={{base:"80%"}} m="auto">
   <OrderSummary/>
    </Box>
    
    </Flex>
    </>
  )
}

export default Address