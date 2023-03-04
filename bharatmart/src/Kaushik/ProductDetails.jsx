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


import { useParams } from "react-router-dom";



export default function ProductDetails() {

  const [product,setProduct]=useState({})
  const [proQuantity,setProductQuantity]=useState(0)
const token=JSON.parse(localStorage.getItem("token"))
const dispatch=useDispatch()

  
  const { id } = useParams();

  const toast = useToast();

  useEffect(() => {
    axios

      })
      .catch((err) => console.log(err));
  }, [id]);


    </>
  );
}