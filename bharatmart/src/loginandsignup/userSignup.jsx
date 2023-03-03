import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useToast
  
  
} from '@chakra-ui/react';

import { Link } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initdata={
 name:"",
 email:"",
 password:"",
 username:"",
phone:"",
gender:""
}



const signup=async (data)=>{
  try {
    const res = await fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res_1 = await res.json();
    return res_1;
  } catch (err) {
    return err
  }
}
  
export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [data,setdata]=useState(initdata)
  const toast=useToast()
  const navigate= useNavigate()


  const handlechange=(e)=>{
    const {name,value}=e.target 
    setdata({
      ...data,
      [name]:value
      
    })
   
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
    signup(data).then(res=>{
      console.log(res)
      toast({
        title:`${res.message}`,
        description: "Thanku",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      navigate("/login")
      
    })

 setdata(initdata)
 
  }
  


  const {name,email,password,username,gender,phone}=data



  return (
    <div>
    <Flex
     
      align='center'
      justify='center'
   maxW={{base:"100%",md:"50%"}}
   m="auto"
      
   boxShadow='base' p='6' rounded='md' bg='white'
      >
      
      <Stack justifyContent={"space-around"}  mx={'auto'} w="100%" p={10} bg={"none"}>
        <Stack textAlign={"center"}  alignItem={'center'} m="auto" bg={"green"}  borderRadius={"5px"} height={"100px"}p={5}  >
          <Heading fontSize={'sm'} color={"white"} textAlign={'center'}>
            SIGN UP
          </Heading>
          <Text fontSize={'sm'} color={'white'}>
            Welcome to  Bharat Mart ✌️
          </Text>
        </Stack>
        <Box
        
          rounded={'lg'}
      
          boxShadow={'none'}
          p={8}>
          <Stack >
          <form onSubmit={handlesubmit}>
           
                <FormControl  isRequired>
                  <FormLabel color={"black"}>Name</FormLabel>
                  <Input style={{color:"black"}} onChange={handlechange} type="text" value={username} name="username"/>
                </FormControl>
              
                <FormControl  isRequired>
                  <FormLabel color={"black"}>User Name</FormLabel>
                  <Input style={{color:"black"}} onChange={handlechange} type="text" value={name} name="name"/>
                </FormControl>
             
                <FormControl  isRequired>
                  <FormLabel color={"black"}>Phone</FormLabel>
                  <Input style={{color:"black"}} onChange={handlechange} type="number" value={phone} name="phone"/>
                </FormControl>
              
             
           
                <FormControl  isRequired>
                  <FormLabel color={"black"}>Gender</FormLabel>
                  <Input style={{color:"black"}} onChange={handlechange} type="text" value={gender} name="gender"/>
                </FormControl>
             
             
           
            <FormControl id="email" isRequired>
              <FormLabel color={"black"}>Email address</FormLabel>
              <Input style={{ color:"black"}} type="email" onChange={handlechange} value={email} name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"black"}>Password</FormLabel>
              <InputGroup >
                <Input style={{color:"black"}} type={showPassword ? 'text' : 'password'} onChange={handlechange} value={password} name="password" />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Input
            
                loadingText="Submitting"
                type={"submit"}
                value={"Register"}
                size="lg"
                textAlign={"center"}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue',
                }}
               placeholder="Sign up" 
              />
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} color={"black"} marginTop={"0px"}>
                Already a user? <Link color={'red'}>Login</Link>
              </Text>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>

    </Flex>
    </div>
  
  );
}