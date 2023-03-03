import React from 'react'
import { Heading,Text,Image,Card,CardBody,useToast,Stack,Icon,Button, HStack,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalFooter,ModalContent,ModalHeader,ModalOverlay } from '@chakra-ui/react'
import {RiDeleteBinLine} from "react-icons/ri"
import {GiSelfLove} from "react-icons/gi"
import {GrFormAdd} from "react-icons/gr"
import {BiMinus} from "react-icons/bi"
import {TbAlertTriangle} from "react-icons/tb"
import {useDispatch,useSelector} from "react-redux"
import { deleteItemFromCart ,updateCart} from "../../../redux/Cart/action"
const CartItem = ({ele}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast=useToast()

  const dispatch=useDispatch()
  
 


  const handleDelete=(id)=>{
    

     dispatch(deleteItemFromCart(id))
     toast({
      title: 'Product deleted from the cart',
      description: "Thanku",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    
  }

  const MoveToWishlist=(id)=>{
   

     dispatch(deleteItemFromCart(id))
     toast({
      title: 'Product added in the Wishlist ',
      description: "Thanku",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
    onClose()
    
  }

  const increaseQuantity=(data)=>{
       const id=data._id
         const payload={
          "quantity":(data.quantity+1)
         }
         dispatch(updateCart(payload,id))
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
    dispatch(updateCart(payload,id))
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
  p={{sm:"20px"}}
  alignItems="center"
>
  <Image
    objectFit='cover'
    w={{base:"30%",sm:"175px"}}
    h={{base:"20%",}}
    src={ele.image}
    alt={ele.title}
  />

  <Stack >
    <CardBody w="100%">
      <Text size='xs' pt={3}>{ele.title}</Text>
      <HStack pt={1}>
      <Heading  as="h5" size="sm">
      ₹{ele.price}
      </Heading>
      
      </HStack>
    
      <HStack gap={1} mt={2}>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' isDisabled={res}  onClick={()=>decreaseQuantity(ele)}>
      <Icon as={ BiMinus} boxSize={3}  />
      </Button>
      <Text size="md" color="#00b5b7">{ele.quantity}</Text>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' onClick={()=>increaseQuantity(ele)}>
     <Icon as={ GrFormAdd } boxSize={3}  />

      </Button>
    </HStack>

      
    </CardBody>
</Stack>
<HStack mt={-20} p={2}>

<Icon as={RiDeleteBinLine} boxSize={6} m={1} onClick={onOpen}/>

<Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader> <HStack>
                    <Icon as={TbAlertTriangle} color="red"/> 
                    <Text>Remove item</Text>
                    </HStack>  </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    Are you sure you want to remove this item from cart?
                    </ModalBody>
          
                    <ModalFooter justifyContent="flex-start" >
                   
                    <Button colorScheme='blue' mr={3}  onClick={()=>handleDelete(ele._id)} >
                  Remove
                   </Button>
                   <Button variant='ghost' onClick={()=>MoveToWishlist(ele._id)}>Move to Wishlist</Button>
                   
                    
                    </ModalFooter>
                  </ModalContent>
                </Modal>

<Icon as={GiSelfLove} boxSize={6} onClick={()=>MoveToWishlist(ele._id)} />

</HStack>
</Card>
  )
}

export default CartItem