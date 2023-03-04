import { useState, useEffect } from "react";

import {
Icon,
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Image,
  Button,
  UnorderedList,
  ListItem,
  useToast,
  OrderedList,
  HStack
} from "@chakra-ui/react";

import axios from "axios";


import { Link, useParams } from "react-router-dom";
import {GrFormAdd} from "react-icons/gr"
import {BiMinus} from "react-icons/bi"


import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Cart/action";
import Snavbar from "../component/akhilesh/Shopping/Snavbar";
import Footer from "../Kaushik/Footer";




export default function ProductDetails() {

  const [product,setProduct]=useState({})
  const [proQuantity,setProductQuantity]=useState(0)
const token=JSON.parse(localStorage.getItem("token"))
const dispatch=useDispatch()

  
  const { id } = useParams();

  const toast = useToast();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/singleproduct/${id}`)
      .then((res) =>{
        console.log(res.data.product)
        setProduct(res.data.product)
      
      })
      .catch((err) => console.log(err));
  }, [id]);

  // function buy() {
  //   console.log(product);
  //   axios
  //     .post(`https://good-rose-kingfisher-tam.cyclic.app/cart/add`, product, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: token,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.message == `jwt must be provided`) {
  //         toast({
  //           title: "User not Logged In",
  //           status: "error",
  //           duration: 4000,
  //           isClosable: true,
  //         });
  //         return;
  //       }

  //       toast({
  //         title: "Item Added",
  //         description: "Item is Added To Cart.",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //       });

  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       toast({
  //         title: "Error",
  //         description: "Something Went Wrong",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       console.log(err);
  //     });
  // }

  let {brand,image,title,price,quantity,category}=product
  const price1=+price+200


  const  handleIncrease=(quantity)=>{
    setProductQuantity((res)=>res+1)
  }

  const  handleDecrease=(quantity)=>{
    setProductQuantity((res)=>res-1)
  }
     const total=proQuantity+(+quantity)
    const res1=(total===1)

    const handleAdd=()=>{

    const payload={
      image,
      price,
      brand,
      title,
      category,
      quantity:total
    }

      dispatch(addToCart(payload,token))
      toast({
        title: 'Item added in the cart',
        description: "Thanku",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
        }

  return (
    <>
    <Snavbar/>
    <Box>
    <Link to="/shopping"><Text m={5}>Home</Text> </Link>
    <Box id="detail">
      <Flex
        direction={{ base: "column", lg: "row" }}
       
        alignItems={"center"}
      >
        <Box w={{ base: "80%", md: "50%" }} id="prodImage" p={5}>
          <Image
            w={{ base: "40%", md: "60%" }}
            margin="auto"
            src={image}
            alt={brand}
            alignItems="center"
            maxH="100Vh"
          />
        </Box>

        <Stack
          w={{ base: "80%%", md: "50%" }}
          margin={"auto"}
          p={5}
          id="proDetail" 
          alignItems="center"
          
        >
          <Heading marginTop="15px" as="h2" size="md">{title}</Heading>
          <Text fontWeight="bold" color="gray" marginTop="15px">
            {brand}
          </Text>
          <Box id="price">
            <Flex gap={2}>
              <Text style={{ color: "tomato" }} fontWeight="bold">${price}</Text>
              <Text
                textDecoration="line-through"
                marginLeft="5px"
                id="price2"
              >
                ${price1}
              </Text>
            </Flex>
          </Box>
          <HStack gap={1} mt={2}>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' isDisabled={res1} onClick={handleDecrease}>
      <Icon as={ BiMinus} boxSize={3}  />
      </Button>
      <Text size="md" color="#00b5b7">{total}</Text>
      <Button variant='solid' size="xs" bg="blackAlpha.200" colorScheme='gray' onClick={handleIncrease} >
     <Icon as={ GrFormAdd } boxSize={3}  />

      </Button>
    </HStack>

          <Box id="btns">
    
   <Button
              colorScheme="green"
              color="white"
              mt={5}
              onClick={handleAdd}
            
            >
             Add to cart
            </Button>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} p={5}>
          <Text fontWeight="bold">Product Details</Text>
          <UnorderedList>
            <ListItem>
            Care Instructions: Hand Wash Only
            </ListItem>
            <ListItem>Fit Type: Stretch</ListItem>
            <ListItem>Cotton Lycra Stretchable Blouse With Full Stretchable and Comfortable Look</ListItem>
            <ListItem>Dobby Stretchable fabric / Neck Style: Round Neck</ListItem>
            <ListItem>Care Instructions: Hand Wash Only</ListItem>
            <ListItem>Soft lining with cushioned insole</ListItem>
            <ListItem>Lifted platform foam midsole</ListItem>
            
          </UnorderedList>
        </Box>
         
        </Stack>
      </Flex>
      
    </Box>
  </Box>
  <Footer/>
      
    </>
  );
}