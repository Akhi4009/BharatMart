import { useState, useEffect } from "react";
import {
  Grid,
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
  Input
} from "@chakra-ui/react";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";



export default function Details() {
    const [modal, setModal] = useState(false);
    const [length, setLength] = useState(0);
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const toast = useToast();
  const inputLength=()=>{
    setLength(length+1)
    console.log(length)
}

  useEffect(() => {
    axios
      .get(`https://bharatmart.onrender.com/laptop/${id}`)
      .then(({ data }) => {
        setProduct(data);
        console.log(id)
      })
      .catch((err) => console.log(err));
  }, [id]);

  const submitModal = () => {
    toast({
        title: 'Thank You',
        description: "Supplier Will Contact you shortly.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
        
    // if(length<10){
    //     toast({
    //         title: '',
    //         description: "Type 10 Digits of Phone-Number.",
    //         status: 'warning',
    //         duration: 9000,
    //         isClosable: true,
    //       })
    //       setLength(0)
    // }else if(length===10){
    //     toast({
    //         title: 'Thank You',
    //         description: "Supplier Will Contact you shortly.",
    //         status: 'success',
    //         duration: 9000,
    //         isClosable: true,
    //       })
    // }
    
               
            
         };
  const { image, title, price, brand } = product;
  return (
    <>
    <Navbar/>
      <Box marginTop={'100px'}>
        <Box id="detail">
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={"space-around"}
          >
            <Box w={{ base: "100%", md: "50%" }} id="prodImage" p={5}>
              <Image
                w={{ base: "50%", md: "70%" }}
                margin="auto"
                src={image}
                alt={brand}
              />
            </Box>

            <Box
              w={{ base: "100%", md: "50%" }}
              margin={"auto"}
              p={5}
              id="proDetail"
            >
              <Heading marginTop="15px">{title}</Heading>
              <Text fontWeight="bold" color="gray" marginTop="15px">
                {brand}
              </Text>
              <Box id="price">
                <Flex>
                  <Text style={{ color: "green" }}> &#x20b9;{price}</Text>
              
                </Flex>
              </Box>

              <Box id="btns">
                
                <Heading fontSize={"20px"} marginTop={"10px"} color={'gray'} >Tell us what you Need</Heading>
                <Input onChange={inputLength} color={'white'} type={'number'} marginTop={"10px"}  placeholder="Enter your Phone-Number" />
                <Button
                onClick={submitModal }
                marginTop={"10px"} 
                  colorScheme="green"
                  color="white"
                  mt={5}
                //   onClick={() => buy()}
                >
                  Submit
                </Button>
                <Text color={'gray'} marginTop={"10px"} >Supplier Will Contact Youu shortly</Text>

              
              </Box>
              
            </Box>
          </Flex>
          <Flex>
           
          </Flex>
        </Box>
      </Box>
      <ToastContainer/>
     <Footer/>
    </>
  );
}