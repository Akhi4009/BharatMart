import React from 'react'
import { Heading,Text,Image,Card,CardBody,useToast,Stack,Icon,Button,CardFooter, HStack,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalFooter,ModalContent,ModalHeader,ModalOverlay } from '@chakra-ui/react'

import {GrFormAdd} from "react-icons/gr"
import {BiMinus} from "react-icons/bi"

import {useDispatch,useSelector} from "react-redux"
import { deleteItemFromCart ,updateCart} from "../../../redux/Cart/action"
const CartItem = ({ele}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast=useToast()

  const dispatch=useDispatch()
  const token=JSON.parse(localStorage.getItem("token"))
  
 


  const handleDelete=(id)=>{
    

     dispatch(deleteItemFromCart(id,token))
     toast({
      title: 'Product deleted from the cart',
      description: "Thanku",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    
  }

  

  const increaseQuantity=(data)=>{
       const id=data._id
         const payload={
          "quantity":(data.quantity+1)
         }
         dispatch(updateCart(payload,id,token))
         toast({
          title: 'Quantity incresed by one',
          description: "Thanku",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
        

  }

  const decreaseQuantity=(data)=>{
    const id=data._id
    const payload={
     "quantity":(data.quantity-1)
    }
    dispatch(updateCart(payload,id,token))
    toast({
      title: 'Quantity decreased by one',
      description: "Thanku",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })

  }
  const res=(ele.quantity===1)
   
  return (


<Card
  direction="row"
  overflow='hidden'
  variant='outline'
  gap={5}
>
  <Image
    objectFit='cover'
    maxW={{ base: '50%', sm: '200px' }}
    src={ele.image}
    alt={ele.title}
    maxH={200}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{ele.brand}</Heading>

      <Text py='2' w="90%">
       {ele.title}
      </Text>
      <Text fontWeight="bold">₹{ele.price}/ pair
      </Text>
      <HStack gap={1} mt={2}>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' isDisabled={res}  onClick={()=>decreaseQuantity(ele)}>
      <Icon as={ BiMinus} boxSize={3}  />
      </Button>
      <Text size="md" color="#00b5b7">{ele.quantity}</Text>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' onClick={()=>increaseQuantity(ele)}>
     <Icon as={ GrFormAdd } boxSize={3}  />

      </Button>
    </HStack>
    <Button colorScheme='blue' mt={3}  onClick={()=>handleDelete(ele._id)} >
    Remove
     </Button>
    </CardBody>

   
     
                   
   
  </Stack>
</Card>
  )
}

export default CartItem