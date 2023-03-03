import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  border,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'



import axios from 'axios'


const initdata={
  email:"",
  password:"",
}

export default function Login ()  {
  const [data,setdata]=useState(initdata)
 

 
 
  

  const handlechange=(e)=>{
    const {name,value}=e.target 
    setdata({
      ...data,
      [name]:value
    })
  }

  const handlesubmit=async(e)=>{
    e.preventDefault() 
   
    loginuser(data)
   }
 
  

  const loginuser=async(data)=>{
       return axios.post('https://periwinkle-sheep-hem.cyclic.app/user/login',{
        email:data.email,
        password:data.password
       })
       .then((res)=>{
          return alert("login successfull well come to GLOW UP"),
          localStorage.setItem("token",res.data.token)

          
       })
       .catch((err)=>{
        return alert(err.message,"wrong credetials")
       })
  }
  console.log(data)
  const {email,password}=data
  
  const divStyles = {
    boxShadow: '1px 2px 9px #F4AAB9',
    padding:"10px",
    margin:"auto",
   
width:"700px",
boxShadow: '1px 2px 9px #F4AAB9',
 
  padding:"20px",

padding:"50px"
  } 
   
    
  


  return (
    <div style={divStyles} >
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
     >
       
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} height={"400px"}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={"rgb(162,211,104)"}>Please LOG IN </Heading>
          <Text fontSize={'lg'} color={'black'}>
            Well come to  <Link color={'rgb(162,211,104)'}>Bharat Mart</Link> 
          </Text>
        </Stack>
        <Box
         
        marginTop={"-100px"}
          rounded={'lg'}
         height={"400px"}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form action="" onSubmit={handlesubmit}>
            <FormControl id="email">
              <FormLabel color={"black"}>Email address</FormLabel>
              <Input style={{color:"black",border:"2px solid black"}}  type="email" onChange={handlechange} 
 value={email} name="email"  />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"black"}>Password</FormLabel>
              <Input  style={{color:"black",border:"2px solid black"}} type="password"  onChange={handlechange} 
 value={password} name="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox color={"black"}>Remember me</Checkbox>
                <Link color={'blue'}>Forgot password?</Link>
              </Stack>
              <Input
            
                bg={'blue.400'}
                color={'black'}
                _hover={{
                  bg: 'blue',
                  
                 
                }}
                type="submit"
                value="Lets Go"
              />
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    
    </Flex>
    </div>
  );
}