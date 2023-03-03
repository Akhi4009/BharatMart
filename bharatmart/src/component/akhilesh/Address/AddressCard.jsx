
import { HStack,Card,CardBody,Box,Stack,Icon,Text,useToast,Heading,Divider,CardFooter,Button,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalFooter,ModalContent,ModalHeader,ModalOverlay} from '@chakra-ui/react'
import React, { useEffect ,useState} from 'react'
import {BiHomeCircle}  from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import {BiPencil} from "react-icons/bi"
import {TbAlertTriangle} from "react-icons/tb"
import { useNavigate } from 'react-router-dom'

import {useDispatch,useSelector} from "react-redux"
import {  deleteAddress, getAddress, updateAddress } from '../../redux/Address/action'
import AddressForm from './AddressForm'

// const initialAddress={
//   name:"",
//   mobile:"",
//   address:"",
//   landmark:"",
//   pincode:"",
//   city:"",
//   state:""

// }


const AddressCard = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen:isO, onOpen:onO, onClose:onC } = useDisclosure()
  const toast=useToast()
  const navigate=useNavigate()
  
  const dispatch=useDispatch()

  const token=useSelector(store=>store.authReducer.token)
  console.log(token)


  useEffect(()=>{
    dispatch(getAddress(token))
   
  },[])

  const Address=useSelector(store=>store.addressReducer.Address)
console.log(Address)

 
const handleSubmit=(e,data)=>{
  e.preventDefault()
 dispatch(updateAddress(data,Address[0]._id,token))

 onC()
 toast({
  title: 'Address Updated Successfully',
  description: "Thanku",
  status: 'success',
  duration: 1000,
  isClosable: true,
})
navigate("/payment")
  
  }
  const handleClick=()=>{
    navigate("/payment")
  }
  
  function handleDelete(id) {
    dispatch(deleteAddress(id,token))
    toast({
      title: 'Address Deleted Successfully',
      description: "Please add another address",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  }
  
  const{name,address,city,state,mobile,pincode,_id,landmark
  }=Address[0]

const initialAddress={
  name:name,
  mobile:mobile,
  address:address,
  landmark:landmark,
  pincode:pincode,
  city:city,
  state:state

}
console.log(state,city,mobile)
 
  return (
         <Box w={{base:"90%"}} m="auto">
        <Heading as="h2" size="md" m={5}>Delivery Address</Heading> 
         {
          Address?.map(ele=>(
            <Card maxW='xl' key={ele._id}>
            <CardBody>
            <Text>
            {ele.address}
           </Text>
              <Stack mt='3' spacing='3'>
                <Text>
                 {ele.city}, {ele.state}, {ele.pincode}
                </Text>
                <Text>+91 {ele.mobile}</Text>
                <HStack mt={4} justifyContent="space-between" >
                <HStack>
                <Icon as={BiHomeCircle} boxSize={5} />
                <Text>Home</Text>
                </HStack>
                
                <HStack>
                <Icon as={BiPencil} boxSize={5} onClick={onO} />

                <Modal closeOnOverlayClick={false} isOpen={isO} onClose={onC}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Address</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                   <AddressForm handleSubmit={handleSubmit} initialAddress={initialAddress}/>
                  </ModalBody>
        
                  
                </ModalContent>
              </Modal>


                <Icon as={RiDeleteBin6Line} boxSize={5} onClick={onOpen} />
               <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader> <HStack>
                    <Icon as={TbAlertTriangle} color="red"/> 
                    <Text>Delete saved address?</Text>
                    </HStack>  </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    Are you sure you want to delete this saved address
                    </ModalBody>
          
                    <ModalFooter justifyContent="flex-start" >
                   
                    <Button colorScheme='blue' mr={3} bg="#00b5b7"  onClick={()=>handleDelete(ele._id)} >
                    Delete
                   </Button>
                   <Button variant='ghost' onClick={onClose}>Cancel</Button>
                   
                    
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              
                </HStack>
                </HStack>
               
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              
                <Button variant='solid' colorScheme='blue' w="100%" bg="#00b5b7" onClick={handleClick}>
               Deliver Here
                </Button>
              
             
            </CardFooter>
            </Card>
          ))
         }
   

</Box>

    
   
  )
}

export default AddressCard