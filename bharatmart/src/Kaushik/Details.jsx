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

import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";



export default function Details() {
  let token = JSON.parse(sessionStorage.getItem("token"));
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const toast = useToast();

  useEffect(() => {
    axios
      .get(`https://bharatmart.onrender.com/laptop/${id}`)
      .then(({ data }) => {
        setProduct(data);
        console.log(id)
      })
      .catch((err) => console.log(err));
  }, [id]);

//   function buy() {
//     console.log(product);
//     axios
//       .post(`https://good-rose-kingfisher-tam.cyclic.app/cart/add`, product, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       })
//       .then((res) => {
//         if (res.data.message == `jwt must be provided`) {
//           toast({
//             title: "User not Logged In",
//             status: "error",
//             duration: 4000,
//             isClosable: true,
//           });
//           return;
//         }

//         toast({
//           title: "Item Added",
//           description: "Item is Added To Cart.",
//           status: "success",
//           duration: 3000,
//           isClosable: true,
//         });

//         console.log(res);
//       })
//       .catch((err) => {
//         toast({
//           title: "Error",
//           description: "Something Went Wrong",
//           status: "error",
//           duration: 3000,
//           isClosable: true,
//         });
//         console.log(err);
//       });
//   }
  const { image, title, price, price2, brand } = product;
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
                <Input color={'white'} type={'number'} marginTop={"10px"}  placeholder="Enter your Phone-Number" />
                <Button
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
     <Footer/>
    </>
  );
}