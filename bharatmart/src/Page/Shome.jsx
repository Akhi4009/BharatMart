import React,{useState} from 'react'


import { Image,Flex,Heading,Text, Stack } from '@chakra-ui/react'
import Ladies from '../component/akhilesh/Ladies/Ladies'
import Mens from '../component/akhilesh/Mens/Mens'
import Footwear from '../component/akhilesh/Footwear/Footwear'
import Industrial from '../component/akhilesh/Industrial/Industrial'
import Category from '../component/akhilesh/Shopping/category'
import Snavbar from '../component/akhilesh/Shopping/Snavbar'
import Footer from '../Kaushik/Footer'



const Shome = () => {
  const [change,setChange]=useState(false)

  const handleChange=()=>{
    setChange(prev=>!prev)
  }
  return (
    <>
   
   <Snavbar/>
    <Category/>
    <Flex backgroundImage="https://shopping.imimg.com/style/mBnr.webp" p={30} justify="space-around" w="90%"  m="auto" direction={{base:"column",lg:"row"}} >
      <Flex direction="column"   gap={{base:"10px",lg:"20px"}} >
        <Heading   color="#97daff">
          Discover
        </Heading>
        <Text fontSize={30} color="white">Winter Collection</Text>
        <Text fontSize={20} color="#97daff">On IndiaMart</Text>
      </Flex>
      <Flex mt={{base:"20px",}}>
      <Image  src="https://shopping.imimg.com/style/b1.webp" w={{base:"50%"}} />
     <Image src="https://shopping.imimg.com/style/b2.webp" w={{base:"50%"}} />
      </Flex>
      
    </Flex>
    <Stack w="90%" m="auto">
   
    <Heading size="lg" as="h1" m={20}>Ladies Wear</Heading>
    <Ladies/>
    <Heading size="lg" as="h1" mt={20}>Mens Wear</Heading>
    <Mens/>
    <Heading size="lg" as="h1" mt={20}>Footwear </Heading>
    <Footwear/>
    <Heading size="lg" as="h1" mt={20}>Industrial Chemical </Heading>
    <Industrial/>
    </Stack>
    <Footer/>

    </>
  )
}

export default Shome