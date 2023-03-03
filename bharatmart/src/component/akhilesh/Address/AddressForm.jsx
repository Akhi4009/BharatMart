import { HStack,Input,FormControl,FormLabel, Textarea,Button, Stack, Box,Flex } from '@chakra-ui/react'
import React, { useReducer } from 'react'
import reducer from './reducer'






const AddressForm = ({handleSubmit,initialAddress}) => {
 const [addressForm,dispatch]=useReducer(reducer,initialAddress)

 
const {name,mobile,address,landmark,pincode,city,state}=addressForm
  return (
   <Box maxW="90%" m="auto" boxShadow='base' p='6' rounded='md' bg='white'>
   <form onSubmit={(e)=>handleSubmit(e,addressForm)} autoComplete="on" >
   <Stack gap={2} >
   <Flex gap={2} direction={{base:"column",md:"row"}}>
   <FormControl isRequired>
  <FormLabel>Name </FormLabel>
  <Input placeholder='Enter Name ' value={name} onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})} />
</FormControl>
<FormControl isRequired>
  <FormLabel>Mobile No.</FormLabel>
  <Input placeholder='Enter Mobile No.' type="tel" value={mobile} onChange={(e)=>dispatch({type:"MOBILE",payload:e.target.value})} />
</FormControl>
   </Flex>
   <FormControl isRequired>
  <FormLabel>Address</FormLabel>
  <Textarea placeholder='Type Your Address' value={address} onChange={(e)=>dispatch({type:"ADDRESS",payload:e.target.value})} />
</FormControl>
<HStack gap={1} >
   <FormControl >
  <FormLabel>Landmark </FormLabel>
  <Input placeholder='Enter Landmark' value={landmark} onChange={(e)=>dispatch({type:"LANDMARK",payload:e.target.value})}/>
</FormControl>
<FormControl isRequired>
  <FormLabel>Pincode</FormLabel>
  <Input placeholder='Enter pincode' type="number" value={pincode} onChange={(e)=>dispatch({type:"PINCODE",payload:e.target.value})}/>
</FormControl>
   </HStack>
   <Flex gap={2} direction={{base:"column",md:"row"}}>
   <FormControl isRequired>
  <FormLabel>City </FormLabel>
  <Input placeholder='Enter City'  value={city} onChange={(e)=>dispatch({type:"CITY",payload:e.target.value})} />
</FormControl>
<FormControl isRequired>
  <FormLabel>State</FormLabel>
  <Input placeholder='Enter State'  value={state} onChange={(e)=>dispatch({type:"STATE",payload:e.target.value})} />
</FormControl>
   </Flex>
   <Button type="submit" w={40} bg="#00b5b7" >Save</Button>
   </Stack>
   </form>
   </Box>
  )
}

export default AddressForm