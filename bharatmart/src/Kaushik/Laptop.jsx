import React, { useEffect, useState } from "react";
// import "./laptop.css";
import { getTodos, htl, lth, hP, APple, DEll,LEnovo,ACer,TOshiba,MIcrosoft } from "./api";
import Card from "./Card";
// import { Product } from "./constant";
import axios, { AxiosResponse } from "axios"
import {
    Grid,
    Box,
    Image,
    Flex,
    Stack,
    Text,
    Heading,
    Checkbox,
    Select,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    GridItem,
    Divider,
    SimpleGrid,
    Button,
  } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavMenu from "./Menu";

import {Link} from "react-router-dom"

const Laptop = () => {
    const [laptop, setLaptop] = useState([])

    const [visible, setVisible] = useState(15) 

    const showMore = () => {
        setVisible((prev) => prev + 15)
    }
  
    const hp = () => {
        hP().then((res) => {
            setLaptop(res)
        })
    }
    const apple = () => {
        APple().then((res) => {
            setLaptop(res)
        })
    }
    const dell = () => {
        DEll().then((res) => {
            setLaptop(res)
        })
    }
    const acer = () => {
        ACer().then((res) => {
            setLaptop(res)
        })
    }
    const microsoft = () => {
        MIcrosoft().then((res) => {
            setLaptop(res)
        })
    }
    const lenovo = () => {
        LEnovo().then((res) => {
            setLaptop(res)
        })
    }
    const toshiba = () => {
        TOshiba().then((res) => {
            setLaptop(res)
        })
    }

   

    const HandleChange =(e)=> {
        if (e.target.value === "asc") {
            lth().then((res) => {
                setLaptop(res)
            })
        } else if (e.target.value === "dsc") {
            htl().then((res) => {
                setLaptop(res)
            })
        } else if (e.target.value === "all") {
            getTodos().then((res) => {
                setLaptop(res)
            })
        }
    }
   

        useEffect(() => {
            getTodos().then((res) => {

                setLaptop(res)
                console.log(res);

            })
        }, [])

        return (
        <>
        
       
         <Box>
            <Box>
         <Navbar/>
         </Box>
         <Heading>Laptop</Heading>
           
            <Stack display={{  md: "none",lg:"none"}} justifyContent={'space-around'}>
            
            <Box  className="sort" >
          
          <Select   width={'40%'} style={{margin:"10px",outline:"none",border:"0px"}} onChange={HandleChange} > Sort by: All
              <option  value="all"><Text fontSize={"5px"}>Sort by: All</Text></option>
              <option   value="asc"><Text fontSize={"5px"}>Price:Ascending</Text></option>
              <option   value="dsc"><Text fontSize={"5px"}>Price:Descending</Text></option>
          </Select>
      </Box> 
      <Flex  alignItems={'center'} width={'95%'}  justifyContent={'space-around'}>
                <Text  _hover={{
    
    color: "green",
  }}  cursor={"pointer"} onClick={lenovo} fontSize={'11px'}    >Lenovo</Text>
                <Text  _hover={{
    
    color: "green",
  }}  cursor={"pointer"} onClick={hp}  fontSize={'11px'}>HP</Text>
                <Text  _hover={{
    
    color: "green",
  }}  cursor={"pointer"} onClick={acer}  fontSize={'11px'}>Acer</Text>
                <Text  _hover={{
    
    color: "green",
  }}  cursor={"pointer"} onClick={dell}  fontSize={'11px'}>Dell</Text>
                <Text  _hover={{
    
    color: "green",
  }}  cursor={"pointer"} onClick={toshiba}  fontSize={'11px'}>Toshiba</Text>
                <Text  _hover={{
    
    color: "green",
  }}  cursor={"pointer"} onClick={apple}  fontSize={'11px'}>Apple</Text>
                
                </Flex>
            </Stack>
            <Flex width={'100%'} justifyContent={'space-around'}>
                <Box display={{base: "none", sm: "none", md: "block"}} width={{lg:'20%',md:"20%"}}>
           <Box  className="sort" >
          
                <Select style={{margin:"10px",outline:"none",border:"0px"}} onChange={HandleChange} > Sort by: All
                    <option value="all">Sort by: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </Select>
            </Box>  
            <Box  className="mainDiv">
            <Box className="filter"  >
                <Button style={{width:"100%",border:"1px solid gray",fontWeight:"bold",marginTop:"5px",background:"teal",color:"white"}} >Related Brands</Button>
                <Box>
                    <Text cursor={'pointer'} onClick={lenovo} >Lenovo</Text>
            {/* <Image style={{width:"70px",height:"30px",cursor:"pointer"}} onClick={lenovo} src="https://www.pngmart.com/files/4/Lenovo-Logo-Transparent-PNG.png" alt="lenovo" /> */}
            </Box>
            <Box >
            <Text cursor={'pointer'}   onClick={hp} >HP</Text>
              {/* <img style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={hp} src="https://cdn.freebiesupply.com/images/large/2x/hewlett-packard-logo-black-and-white.png" alt="hp" /> */}

            </Box>
            <Box>
            <Text cursor={'pointer'}  onClick={acer} >Acer</Text>
            {/* <Image style={{width:"60px",height:"30px",cursor:"pointer"}} onClick={acer} src="https://w7.pngwing.com/pngs/505/721/png-transparent-laptop-acer-iconia-tab-a500-acer-aspire-computer-laptop-electronics-text-trademark.png" alt="acer" /> */}
            </Box>
            <Box>
            <Text cursor={'pointer'}   onClick={dell} >Dell</Text>
            {/* <img style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={dell} src="https://www.freeiconspng.com/thumbs/dell-logo-icon-png/dell-icon-11.jpg" alt="dell" /> */}
            </Box>
            <Box>
            <Text cursor={'pointer'}   onClick={toshiba} >Toshiba</Text>
            {/* <img style={{width:"70px",height:"30px",cursor:"pointer"}} onClick={toshiba} src="https://cdn.freebiesupply.com/images/large/2x/toshiba-logo-png-transparent.png" alt="toshiba" /> */}
            </Box>
            <Box>
            <Text cursor={'pointer'} onClick={apple} >Apple</Text>
            {/* <img style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={apple} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png" alt="apple" /> */}
            </Box>
         
            <Box>
            <Text cursor={'pointer'} onClick={microsoft} >Microsoft</Text>
            {/* <img style={{width:"70px",height:"30px",cursor:"pointer"}} onClick={microsoft} src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png" alt="ms" /> */}
            </Box>
           
            <Button style={{width:"100%",border:"1px solid gray",fontWeight:"bold",marginTop:"5px",background:"teal",color:"white"}} >Related Category</Button>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Mobile Workstations</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Refurbished Laptops</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Notebook Computers</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Second Hand Laptop</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Mini Laptop</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Dell Second Hand Laptop</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Second Hand Lenovo Laptop</p>
            <button style={{width:"100%",border:"1px solid gray",fontWeight:"bold",marginTop:"5px",background:"teal",color:"white"}} >Related Services</button>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Rental</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Battery Repair</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Skin Designing </p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Adapter Repair</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Repairing Services</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Data Recovery</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop AMC Services</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Motherboard Repairing</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Repairing Course</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Screen Repairing Services</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Laptop Keyboard Repairing Services</p>
            <Button style={{width:"100%",border:"1px solid gray",fontWeight:"bold",marginTop:"5px",background:"teal",color:"white"}} >Hard Drive Size</Button>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Less than 500 GB</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >500GB to 1 TB</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >More than 1 TB </p>
            <Button style={{width:"100%",border:"1px solid gray",fontWeight:"bold",marginTop:"5px",background:"teal",color:"white"}} >Color</Button>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Silver</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >Gray</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >White</p>
            <Button style={{width:"100%",border:"1px solid gray",fontWeight:"bold",marginTop:"5px",background:"teal",color:"white"}} ><Text fontSize={{lg:"20px",md:"12px",sm:"10px"}} >Recommended Searches</Text></Button>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >phones</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >tv</p>
            <p style={{fontSize:"14px",color:"gray",marginTop:"5px"}} >hard-disk</p>
          
            

            </Box>
 
         
            
          
           

            
            </Box>
            </Box>
            <Box width={{lg:'76%',md:"76%",sm:"90%"}}>
            <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 4, md: 4 }}
            >{laptop?.slice(0, visible).map((el) => {
                return <Card key={el.id} {...el} />
            })}
            
          
            </SimpleGrid> 
            </Box>
            </Flex>
            <Button marginLeft={{base:"28%",lg:"45%",md:"40%"}} style={{background:"#2e3192",color:"white",width:"150px",fontWeight:"bold",borderRadius:"7px",border:"none",height:"30px",cursor:"pointer"}}  onClick={showMore} >Show More</Button>
            <Footer/>
            </Box>  
</>

)
        }
    

export default Laptop

