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
import Navbar from '../Kaushik/Navbar';
import Footer from '../Kaushik/Footer';



const login=async(data)=>{

  try {
    const res = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const res_1 = await res.json();
  
    return res_1

  } catch (err) {
    return console.log(err);
  }
}

const initdata={

 email:"",
 password:""

}





  
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [data,setdata]=useState(initdata)
  const navigate= useNavigate()
  const toast=useToast()


  const handlechange=(e)=>{
    const {name,value}=e.target 
    setdata({
      ...data,
      [name]:value
      
    })
   
  }
  const handlesubmit=async(e)=>{
    e.preventDefault()
  console.log(data)
  login(data).then(res=>{
    localStorage.setItem("token",JSON.stringify(res.token))
    console.log(res)
    toast({
      title:`${res.message}`,
      description: "Thanku",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate("/")
  })

 setdata(initdata)
 
  }
  


  const {email,password}=data



  return (
    <>
    <Navbar/>
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
            LOG IN
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
         <Stack spacing={5} pt={2}>
              <Input
            
                loadingText="Submitting"
                type={"submit"}
                value={"Login"}
                size="lg"
                textAlign={"center"}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue',
                }}
               placeholder="Login" 
              />
            </Stack>
            <Stack pt={6}>
            <Text align={'center'} color={"black"} marginTop={"0px"} fontWeight="bold">
             Not have a account? <Link to="/signup">Signup</Link>
            </Text>
          </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>

    </Flex>
    </div>
    <Footer/>
    </>
  
  );
}