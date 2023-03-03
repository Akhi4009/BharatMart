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
  useColorModeValue,
  
} from '@chakra-ui/react';

import { Link } from 'react-router-dom'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const initdata={
 name:"",
 email:"",
 password:"",
 person_name:"",
phone:"",
gender:""
}




  const divStyles = {
    boxShadow: '1px 2px 9px #F4AAB9',
    padding:"10px",
    margin:"100px",
    height:"800px",backgroundColor:"rgb(243,243,243)",
   
    width:"600px",
    marginTop:"-50px",
    padding:"50px",
    offsetX: 0,
    offsetY: 0,
   
    
  };

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);

  const [data,setdata]=useState(initdata)
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
 
   registeruser(data)
  }
  

  const registeruser=(data)=>{
    return axios.post('https://periwinkle-sheep-hem.cyclic.app/user/register', {
        name:data.username,
        email:data.email,
        password:data.password,
        person_name:data.name,
        gender:data.gender,
        phone:data.phone
      })
      .then( (response)=> {
       return alert("registered successfully"),
       navigate("/login")
      })
      .catch( (error)=> {
        return alert(error,"something went wrong");
      });
    
  }
  console.log(data)
  const {name,email,password,person_name,gender,phone}=data



  return (
    <div style={{}}>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      
     
      >
        <div style={divStyles} >
      <Stack justifyContent={"space-around"}  mx={'auto'}  py={12} px={6} bg={"none"}>
        <Stack textAlign={"center"}  alignItem={'center'} bg={"green"} marginBottom={"-32px"} borderRadius={"5px"} height={"100px"} paddingTop={"10px"} width={"390px"} marginLeft={"30px"}>
          <Heading fontSize={'2xl'} color={"white"} textAlign={'center'}>
            SIGN UP
          </Heading>
          <Text fontSize={'lg'} color={'white'}>
            Welcome to  Bharat Mart ✌️
          </Text>
        </Stack>
        <Box
        margin={"10px"}
          rounded={'lg'}
          width={{lg:'76%',md:"76%",sm:"90%"}}
          boxShadow={'none'}
          p={8}>
          <Stack >
          <form onSubmit={handlesubmit}>
            <HStack>
           
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel color={"black"}>Name</FormLabel>
                  <Input style={{width:"390px",color:"black"}} onChange={handlechange} type="text" value={person_name} name="person_name"/>
                </FormControl>
              </Box>
              <Box>
               
              </Box>
            </HStack>
            <HStack>
           
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel color={"black"}>User Name</FormLabel>
                  <Input style={{width:"390px",color:"black"}} onChange={handlechange} type="text" value={name} name="name"/>
                </FormControl>
              </Box>
              <Box>
               
              </Box>
            </HStack>
            <HStack>
           
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel color={"black"}>Phone</FormLabel>
                  <Input style={{width:"390px",color:"black"}} onChange={handlechange} type="number" value={phone} name="phone"/>
                </FormControl>
              </Box>
              <Box>
               
              </Box>
            </HStack>
            <HStack>
           
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel color={"black"}>Gender</FormLabel>
                  <Input style={{width:"390px",color:"black"}} onChange={handlechange} type="text" value={gender} name="gender"/>
                </FormControl>
              </Box>
              <Box>
               
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color={"black"}>Email address</FormLabel>
              <Input style={{ width:"390px",color:"black"}} type="email" onChange={handlechange} value={email} name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color={"black"}>Password</FormLabel>
              <InputGroup width="390px">
                <Input style={{width:"390px",color:"black"}} type={showPassword ? 'text' : 'password'} onChange={handlechange} value={password} name="password" />
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
              width="390px"
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
      </div>
    </Flex>
    </div>
  );
}