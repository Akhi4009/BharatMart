
import React,{useState} from 'react'
import {Box,Heading,Flex,HStack,Text,InputRightElement, InputGroup} from "@chakra-ui/react"
import {BsFillCreditCard2BackFill } from "react-icons/bs"
import {
    FormControl,
    FormLabel,
  Input,Checkbox
  ,Button
  } from '@chakra-ui/react'
  
  import { useNavigate } from 'react-router-dom'

const CreditCard = () => {
   
    const navigate=useNavigate()
    const [checked,setChecked]=useState(false)
    const [form,setForm]=useState({
        cardnu:"",
        name:"",
        date:"",
        cv:"",
        
    })

   let res=false,res1=false,res2=false
   if(form.cardnu.length>16||form.cardnu.length<16){
    res=true
    
   }
   if(form.cv.length<3 ||form.cv.length>3){
    res1=true
    
   }
   if(form.name===""||form.date===""){
res2=true
   }
  
    const  handleChange=(e)=>{
        const {name,type,value}=e.target

    setForm({...form,[name]:value})
          }
    const {name,date,cv,cardnu}=form

  const handleClick=()=>{
  
  
    alert("Payment Successful")
    navigate("/")
  }

  const bgc=checked?"#00b5b7":"gray"




  return (
   <Box w={{base:"100%",lg:"80%"}} >
   
    <Heading as="h3" size="sm" m={2}>Add a new card</Heading>
    <Flex direction="column" gap={3}>
    
    <FormControl >
    

  <Input type='text' placeholder='Please enter name on the card'  name="name" value={name} onChange={handleChange}/>
 </FormControl>
  <FormControl>
  <InputGroup>
  <Input type='number' placeholder='4352XXXXXXXX2235' isInvalid={res} name="cardnu" value={cardnu} onChange={handleChange} />
  <InputRightElement children={<BsFillCreditCard2BackFill />} /> 
  </InputGroup>
  </FormControl>

 <FormControl>
 <FormLabel>Expiry MM/YY</FormLabel>
 <Input type="month" name="date" placeholder='Expiry MM/YY' value={date} onChange={handleChange} />
</FormControl>
<FormControl w={{base:"60%",md:"30%"}}>

 <Input type='number' placeholder='CVV' isInvalid={res1} name="cv"  value={cv} onChange={handleChange}/>
</FormControl>


 <HStack gap={1}>
 <Checkbox isChecked={checked} onChange={()=>setChecked(!checked)} name="checked"/>
 <Text fontSize='xs' >Save your card as per the RBI guidelines. You can delete it later if you change your mind.</Text>
 </HStack>
 <Button onClick={handleClick} isDisabled={!checked||res1||res||res2} bg={bgc}>SUBMIT MY ORDER</Button>
 </Flex>
 
 
 
   
   </Box>
  )
}

export default CreditCard