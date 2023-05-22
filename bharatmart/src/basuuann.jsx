import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { BsCheckLg } from "react-icons/bs";



const Home = () => {
  let [Carousel, setCarousel] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCarousel(!Carousel);
    }, 3000);
  }, [Carousel]);

  let sec1 = [
    {
      img: "https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg",
      title: "Brick Making Machines",
      d1: "Fly Ash Brick Making Machine",
      d2: "Cement Brick Making Machine",
      d3: "Clay Brick Making Machine",
    },
    {
      img: "https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg",
      title: "Passenger Lifts",
      d1: "Residential Elevator",
      d2: "Kone Passenger lift",
      d3: "Stair Lift",
    },
    {
      img: "https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg",
      title: "TMT Bars",
      d1: "TATA TMT Bars",
      d2: "Kamdhenu TMT Bars",
      d3: "",
    },
    {
      img: "https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg",
      title: "Plywoods",
      d1: "Shuttering Plywood",
      d2: "Laminated Plywood",
      d3: "Waterproof Plywood",
    },
    {
      img: "https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg",
      title: "Excavator",
      d1: "Hitachi Excavator",
      d2: "Hyundai Excavator",
      d3: "Komatsu Excavator",
    },
    {
      img: "https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg",
      title: "Emulsion Paints",
      d1: "Asian Emulsion Paints",
      d2: "Berger Emulsion Paints",
      d3: "Nerolac Emulsion Paints",
    },
  ];
  let hide1 = [
    {
      img: "https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg",
      title: "Wooden Door",
      d1: "Designer Wooden Door",
      d2: "Plywood Door",
      d3: "Wooden Flush Doors",
    },
    {
      img: "https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg",
      title: "PVC Pipes",
      d1: "Finolex Pipes",
      d2: "Rigid PVC Pipes",
      d3: "Flexible PVC Pipes",
    },
    {
      img: "https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg",
      title: "Building Brick",
      d1: "Red Brick",
      d2: "Fly Ash Bricks",
      d3: "Cement Brick",
    },
  ];
  let sec2 = [
    {
      img: "https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg",
      title: "Office Automation Products",
      d1: "Multifunction Printer",
      d2: "Xerox Machines",
      d3: "Fingerprint Scanners",
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg",
      title: "Sensors & Transducers",
      d1: "Level Sensors",
      d2: "Proximity Sensor",
      d3: "Sensor for Home & Office Load Cell",
    },
    {
      img: "https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg",
      title: "Process Controllers",
      d1: "Process Controllers",
      d2: "Level Controllers",
      d3: "Motor & Temperature Controllers",
    },
    {
      img: "https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg",
      title: "Control & Automation",
      d1: "VFD",
      d2: "PLC",
      d3: "HMI",
    },
    {
      img: "https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg",
      title: "Diodes & Active Devices",
      d1: "Integrated Circuits",
      d2: "Thyristors",
      d3: "Light Emitting Diode",
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg",
      title: "Wires & Cables",
      d1: "House Wire",
      d2: "Armoured Cable",
      d3: "Power Cable",
    },
  ];
  let hide2 = [
    {
      img: "https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg",
      title: "Commercial Lights",
      d1: "Flood Lights",
      d2: "Street Lights",
      d3: "Panel Light",
    },
    {
      img: "https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png",
      title: "Battries",
      d1: "Lithium Battery",
      d2: "Inverter Batteries",
      d3: "Electric Vehicle Battery",
    },
    {
      img: "https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg",
      title: "Solar & Renewable Energy",
      d1: "Solar Panels",
      d2: "Solar Inverter",
      d3: "Solar Pumps",
    },
  ];
  let sec3 = [
    {
      img: "https://5.imimg.com/data5/KT/MJ/MY-16675294/pharmaceutical-drug-125x125.jpg",
      title: "Pharmaceutical Drug",
      d1: "Anticoagulant and Antiplatelet Drugs",
      d2: "Antiparasitic Drug",
      d3: "Antibiotic Tablets, Capsule & Syrup",
      d4: "Antifungal Injection, Tablet & Syrup",
    },
    {
      img: "https://3.imimg.com/data3/JR/DH/GLADMIN-7427/nutritional-supplements-125x125.jpg",
      title: "Nutraceuticals",
      d1: "Vitamin Tablets & Capsules",
      d2: "Weight Loss Supplement",
      d3: "Dietary Supplements",
      d4: "Mineral Supplement",
    },
    {
      img: "https://5.imimg.com/data5/PQ/HW/MY-7191707/thinq-mass-gainer-282-lbs-29-125x125.png",
      title: "Fitness Supplements",
      d1: "Weight Gain Nutrition",
      d2: "Weight Gain Capsule",
      d3: "Pre workout Supplements",
      d4: "Immune Booster",
    },
    {
      img: "https://3.imimg.com/data3/BA/YT/MY-2018319/multidisciplinary-care-125x125.jpg",
      title: "Medical Treatment Services",
      d1: "Dental Treatment Services",
      d2: "Medical Surgery Services",
      d3: "Eye Treatment",
      d4: "Plastic Surgery Services",
    },
    {
      img: "https://5.imimg.com/data5/JM/MB/MY-4222986/8-125x125.jpg",
      title: "Medical Test Services",
      d1: "CT Scan Services",
      d2: "Ultrasound Services",
      d3: "ECHO Cardiography",
      d4: "Blood Testing",
    },
    {
      img: "https://5.imimg.com/data5/YC/QB/MY-3773531/allopathic-pcd-pharma-franchise-125x125.jpg",
      title: "PCD Pharma Franchise",
      d1: "Pharma Franchise",
      d2: "Allopathic",
      d3: "Ayurvedic",
      d4: "Veterinary",
    },
  ];
  let sec4 = [
    {
      img: "https://3.imimg.com/data3/WE/MN/MY-2/food-processing-machine-125x125.jpg",
      title: "Food Processing Machine",
      d1: "Flour Mill",
      d2: "Spice Processing Machines",
      d3: "Rice Mill Machinery",
    },
    {
      img: "https://3.imimg.com/data3/SF/NU/MY-2/high-speed-automatic-t-shirt-bag-making-machine-two-line--125x125.jpg",
      title: "Bag Making Machine",
      d1: "Non Woven Bag Making Machine",
      d2: "Proximity Sensor",
      d3: "Sensor for Home & Office Load Cell",
    },
    {
      img: "https://5.imimg.com/data5/NG/VV/GLADMIN-2/nop300-125x125.png",
      title: "Snack Machine",
      d1: "Namkeen Making Machines",
      d2: "Popcorn Machines",
      d3: "Motor & Temperature Controllers",
    },
    {
      img: "https://3.imimg.com/data3/UK/HT/MY-2/deck-125x125.jpg",
      title: "Bakery & Dairy Machinery",
      d1: "Bakery Machinery",
      d2: "Bakery Oven",
      d3: "Sweets Making Machine",
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/MW/VE/VZ/87939/cnc-lathe-machine-125x125.png",
      title: "CNC Machines & Lathe Machine",
      d1: "Integrated Circuits",
      d2: "Thyristors",
      d3: "Light Emitting Diode",
    },
    {
      img: "https://3.imimg.com/data3/TU/LV/GLADMIN-2070/flexographic-printing-machine-125x125.jpg",
      title: "Printing Machine",
      d1: "House Wire",
      d2: "Armoured Cable",
      d3: "Power Cable",
    },
    {
        img: "https://3.imimg.com/data3/GF/WP/GLADMIN-45894/industrial-compressor-125x125.jpg",
        title: "Air Compressors",
        d1: "Flood Lights",
        d2: "Street Lights",
        d3: "Panel Light",
      },
      {
        img: "https://5.imimg.com/data5/PA/NP/GLADMIN-2/seawaterfiltrationsystem-125x125.jpg",
        title: "Water Purification Plants",
        d1: "Lithium Battery",
        d2: "Inverter Batteries",
        d3: "Electric Vehicle Battery",
      },
      {
        img: "https://3.imimg.com/data3/YN/LI/MY-2/dsc_2766-125x125.jpg",
        title: "Food Processing Plants",
        d1: "Oil Free Air Compressor",
        d2: "Reciprocating Compressors",
        d3: "Refrigeration Compressors",
      }
  ];
  let hide4 = [
    ,
  ];
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const [query, setQuery] = useState("");
  // console.log('query:', query)
  return (
    <>
   
      <Box backgroundColor="#F3F3F3" align="center" marginTop="50px">
        {/* --------------------------------Banner & Search---------------------------------- */}
        {/* https://utils.imimg.com/imsrchui/imgs/hpNewBanner1.jpg */}
        <Box
          backgroundImage={'/banner1.jpg'}
          backgroundPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          backgroundSize="cover"
          minHeight={{ base: "120px", sm: "220px" }}
        >
          <Box position="absolute" w={["90%", "85%", "75%", "65%", "60%"]}>
            <Text
              textAlign="center"
              outline="0"
              margin="0"
              padding="10px"
              border="0"
              font="inherit"
              verticalAlign="baseline"
              color="#f9f9f9"
              fontSize={{ base: "12px", sm: "17", md: "22px" }}
            >
              {/* Search for products & find verified sellers near you */}
            </Text>
            <Flex>
              <Select
                fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                backgroundColor="gray"
                color="black"
                width={{ sm: "20%", md: "30%" }}
                height={{ base: "20px", sm: "30px", md: "50px" }}
                display={{ base: "none", sm: "flex" }}
                borderRadius="0px"
                placeholder="All India"
              >
                {state?.map((el) => (
                  <option style={{ fontSize: "12px" }} value="option2">
                    {el}
                  </option>
                ))}
              </Select>
              <Box display={{sm:"none",md:"block",base:"none"}} >
              <Input
              border={'1px solid black'}
                onChange={(e) => setQuery(e.target.value)}
                paddingLeft="10px"
                fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                variant="unstyled"
                placeholder=" Enter product/service name"
                bg="white"
                height={{ base: "19px", sm: "29px", md: "49px" }}
                width={{ base: "320px", sm: "260px", md: "320px",lg:"360px" }}
                borderRadius="0px"
              />
             
                <Button
                  fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                  borderRadius="0px"
                  fontFamily="arial"
                  background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                  colorScheme="#fff"
                  p="5px 22px"
                  border="none"
                  margin="0"
                  height={{ base: "20px", sm: "30px", md: "50px" }}
                  position="relative"
                color={'white'}
                  top="0"
                  cursor="pointer"
                  width={{lg:"100px",md:"70px"}}
                  fontWeight="700"
                  text-indent="30px"
                >
                  Search
                </Button>
              
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* -------------------------------MegaMenu--------------------------------------- */}
        <Box backgroundColor="gray">
          
        </Box>
        <hr />
        {/* -------------------------------Carousel------------------------------------------ */}
        <Box backgroundColor="white">
          <Flex>
            <Box
              w={{ base: "0%", md: "35%" }}
              display={{ base: "none", md: "flex" }}
              flexDirection="column"
            >
              <Heading
                align="left"
                p={{ base: "5px 5px 5px 5px", md: "40px 20px 10px 20px" }}
                fontSize={{ base: "15px", sm: "18px", md: "22px", lg: "30px" }}
                fontFamily="Arial"
                color="#333"
              >
                We connect
              </Heading>
              <Heading
                align="left"
                p={{ base: "0px 10px", md: "0px 20px" }}
                fontSize={{ base: "18px", sm: "20px", md: "25px", lg: "35px" }}
                fontFamily="Arial"
                color="#333"
              >
                Buyers & Sellers
              </Heading>
              <Text
                align="left"
                p="20px"
                fontSize={{ base: "12px", sm: "13px", md: "15px", lg: "20px" }}
              >
                IndiaMART is India's largest online B2B marketplace, connecting
                buyers with suppliers.
              </Text>
              <Image
                p={{
                  base: "0px",
                  md: "10px 20px 10px 20px",
                  xl: "30px 20px 10px 20px",
                }}
                w={{ md: "100%", lg: "80%" }}
                src={"https://utils.imimg.com/imsrchui/imgs/hpNewBanner1.jpg"}
              />
            </Box>
            <Box
              w={{ base: "100%", md: "65%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box w="100%" p="20px">
                {Carousel ? (
                  <Image src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
                ) : (
                  <Box position="relative">
                    <Image src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
                    <Box
                    bg="gray"
                      border="1px solid gray"
                      left="50%"
                      top="20%"
                      p="15px"
                      w="50%"
                      position="absolute"
                    >
                      <Flex>
                        <Select
                          fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                          backgroundColor="black"
                          color="white"
                          width={{ sm: "20%", md: "30%" }}
                          h={{ base: "20px", md: "30px" }}
                          display={{ base: "none", sm: "flex" }}
                          borderRadius="0px"
                          placeholder="All India"
                        >
                          {state?.map((el) => (
                            <option
                            backgroundColor={'black'}
                              style={{ fontSize: "12px" }}
                              value="option2"
                            >
                              {el}
                            </option>
                          ))}
                        </Select>
                       
                      </Flex>
                      <Input
                        border={'1px solid black'}
                        fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                        variant="unstyled"
                        placeholder="Mobile No."
                        bg="white"
                        h={{ base: "15px", sm: "15px", md: "20px", xl: "25px" }}
                        m="5px 0px"
                        borderRadius="0px"
                        p="10px"
                      />
                      <Input
                        border={'1px solid black'}
                        display={{ base: "none", sm: "flex" }}
                        fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                        variant="unstyled"
                        placeholder=" Enter Your Name"
                        bg="white"
                        h={{ base: "15px", sm: "15px", md: "20px", xl: "25px" }}
                        p="10px"
                        m="5px 0px"
                        borderRadius="0px"
                      />
                      <Button
                        fontSize={{ base: "11px", sm: "12px", md: "13px" }}
                        borderRadius="0px"
                        fontFamily="arial"
                        background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                        colorScheme="#fff"
                        border="none"
                        margin="0"
                        h={{ base: "15px", sm: "25px", md: "30px", xl: "40px" }}
                        position="relative"
                        left="-4px"
                        top="0"
                        cursor="pointer"
                        width="142px"
                        fontWeight="700"
                        text-indent="30px"
                        color={'white'}
                      >
                        Search
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* ------------------------------Construction------------------------------------ */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Building Construction Material & Equipment
          </Heading>
          <Flex height="100%" w="95%" m="auto" p="10px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/building-construction.jpg"

              >
                <a href="/">
                  <Button
                    top="400px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="100%"
                p="0px 20px 0px 0px"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/building-construction.jpg"
              />
            </Box>
            <SimpleGrid
              height="100%"
              w={{ base: "100%", xl: "72%" }}
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec1.map((el) => (
                <Flex
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">

                    <Image width={'100%'} height={'100%'} src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                      color={'black'}
                    >
                      {el.title}
                    </Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
              {hide1.map((el) => (
                <Flex
                  display={{ base: "none", md: "flex" }}
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                     color={'black'}
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* ------------------------------Electronics------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Electronics & Electrical Goods & Supplies
          </Heading>
          <Flex height="100%" w="95%" m="auto" p="10px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/electronics-electrical-goods.jpg"
              >
                <a href="/Projector">
                  <Button
                    top="360px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="100%"
                p="0px 20px 0px 0px"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/electronics-electrical-goods.jpg"
              />
            </Box>
            <SimpleGrid
              height="100%"
              w={{ base: "100%", xl: "72%" }}
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec2.map((el) => (
                <Flex
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                      color={'black'}
                    >
                      {el.title}
                    </Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
              {hide2.map((el) => (
                <a href="/solar">
                  <Flex
                    display={{ base: "none", md: "flex" }}
                    p="10px"
                    flexDirection={{ base: "column", sm: "row" }}
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  >
                    <Box w="50%">
                      <Image src={el.img} />
                    </Box>
                    <Box p="0px 10px" align="start">
                      <Text
                        fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                        pb="5px"
                        fontWeight="700"
                        color={'black'}
                      >
                        {el.title}
                      </Text>
                      <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d1}
                      </Text>
                      <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d2}
                      </Text>
                      <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d3}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* -------------------------------Cities------------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "30px" }}
            fontFamily="Arial"
            color="#333"
          >
            Find Suppliers from Top Cities
          </Heading>
          <Flex justifyContent="space-around">
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"https://thumbs.dreamstime.com/b/india-new-delhi-modern-city-landscape-skyline-panorama-silhouette-shape-vector-logo-icon-new-delhi-city-skyline-silhouette-vector-114846134.jpg"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
               color={'black'}
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Delhi
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"https://i.pinimg.com/originals/43/97/90/439790d8360d52868c3dac574f291049.png"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
               color={'black'}
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Bengaluru
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"https://thumbs.dreamstime.com/b/icon-chennai-emblematic-buildings-chennai-silhouette-design-city-vector-art-100216255.jpg"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
               color={'black'}
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Chennai
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/png;base64,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"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
               color={'black'}
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Mumbai
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUXFRYVGBcWFRUVFxYVFRgXFhUVFxgYHSggGBolGxcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtLS8rLS0tLS0tLS0tLS0tLS0tLS0tLS01LS0tLS8tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOgA2QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAEMQAAEDAQUDCQYCBwgDAAAAAAEAAhEDBAUSITFBUXEGEyIyYYGRwdEUUmKSobFC8HKCk6LS4fEVFiMzNENTsiSDwv/EABoBAQACAwEAAAAAAAAAAAAAAAABBAIDBQb/xAA2EQACAQIDBAgEBQUBAAAAAAAAAQIDEQQhMRJBUXETYYGRsdHh8AUiocEUMkJS8RUjM3KCU//aAAwDAQACEQMRAD8A9xQhCAEIQgBCEIAQhCAEIQgBCaTGZUSrelFutRvd0vspSb0IlJRzbsTUKpff9AficeDT5pn94qO5/wAo9Vn0NT9rNP4mj+5d5coVSL/obXOHFp8l3pXtQdpUHf0f+0KHTmtUzKNenLSS70T0JjHgiQQR2Zp6wNoIQhACEIQAhCEAIQhACEIQAhCEAJpclJSAIBWpUIQAhRrZbGUm4nmNw2nsA2rMXhfVSpk3oN3DbxPkFtpUZVNNOJXr4mFHXXgX1tvalSyJl3ujM9+wKmtd+1ndVuAb4k+Jy+irLNqTtDSRxXYO1jcTMkzEajSDKuRw8I7r8/L+TmzxdSosnbl5/wAEatXc/Nzi7iSUxLUEExpJTVbWmRReuYJyE1AKiEieBGe1RoErjqbyzMOIPEg+IVhZr+rM60PHbkfEecqrJSLGUIz/ADK5nCrKH5HY2FivqlUyJwO3HTuOitV50rC7r2qUspxN90+R2KpUwe+Hc/M6FH4juqLtXl5dxtUKDYLwZWEtOe1p1H8u1SyqTTTszpxkpK8XdD0JrU5QZAhCEAIQhACQpUIBoCchCAFW3rejaIjV50b5ncEXxeQotyzedB5nsWPq1C4lzjJOZJVrD4fb+aWniUMXi+j+SH5vD1HWm0OqOxPMn7dg3Bc0icujpkjjNtu7EaYzCe6qTt8AB9kxIlrhNipUJEIESpE5SBW700lKmqLE9QqVCRCASITlIFpVHNIc0kEaELU3Re4q9F8B/wBHcO3sWVlIDHFaqlKNRWepYoYidF3Wm9e9/WehgJVTXJevODA/rj94b+KuVypwcHss71OpGpHajoCEIWJmIU3EdyehACEIQAo1utTaTC92zQbzsAUlY+/7fzlTCD0WZcd58v6rbRpdJK27eV8TX6GF9+4r7VaHVHF7jmfpuA7FzQlXWVlkjz7bbuwTUIUkCpyRIhIiE5CAEiEiEAnISISCROSIQKkQkQAnBIlQkVjy0gtMEGQe1bO6reKzAdHDJw7fRYtSrrthpVAfwnJ3Df3aqvXpbcctVoWsJiOinno9fP3uNyhc2Pn86rouWd4EIQgBCEICuvq181SJHWOTeJ29wlYtX9/1cVQNy6OWeYBIkmNuUKpeARp3xhOk94IBXSwyUYczi42TqVOWXn75EcFIhCtFAE5IkQCoAQnRGuuX1UMlIQtjjuQUhKRA+oE5CRSASLvZaBe7CNzj4AkfWEtOo07AMyILcRyMEu7JWLlZ2MlC6v73eZHTiU6syDu7NxBg/Zc1KdzFqzsCVKxskDeQPFX173RTpUS8YpYBtnFJAzHfsWE6kYtJ7zbToyqRlJaLX32FCkTWuBEhPAlbDUAYUFK525MUK4djUcnrVip4TqzLuPV9O4K6pvlY25bRgqt3OyPfp9YWsXMxMNmfPP32ndwVXbpK+qy8voSUJlN8p6rlsE0ugSU5Qr3qYaNQ/DHzdHzUpXdiJS2U3wMe+1FznOOeIk6wQewpoeXHC0GTszJOz7LkrPk/RcazXAGBik7OqRrxIyXXnaEW+H2POU9qpJRvq/Eh1rFUaJdTIG8jJMo0HPMNaXHcBK2N80XPovYwS4iBmBtG0qs5M2GtSL+dbEgAHEDMHsK0RxV6bk7X4FyWBtVUFez1dtCir2Z7OuxzZ0kQuK0vK+i91JpYCcLwTGZiCNNuZUXkvZcXTc3ouaQDs62F3A5HuKzjXXRbb7jVPCNV+ij3++sjXVdrqrtobOZ8uP2VpfdyB7Q6kIewBoGxzR+Ez91c2ei1jQ1ogAQNT9TquypSxEnPaW7Q6NPBwVPYlv19DzkHUEQQYIOoO4p62drsTDzj8EucyDtmJLYGkz5LFPa5rsDxDwBI4gHxzV+jXVU5mJwzob7r3bvOlGk57g1oknIBXA5OuxMBIwkdIjUHPIbxoJVtdV2NpAOBlxEE7DOeW5Waq1cU2/k0LtDAR2b1dfftkWxWJlIEMEAme3xUK9LpbUxPblUjLWCR7zRrOQ7grdCqqck73zL7pxcdlrIx9rueq2mKhgkAl4B6u2Rv2kqqXoqyd/Xayk0PadXQQSMyZMj0H0hXaGJu9mXYcvFYJRW3DRa+fmU60/K0H2R/Fk5/EB3rM0xJHELWcqGzZan6p8HNWdd2qU+f3RhhVejV/wBfszB2aoQezb6q0a2aVR7cwwNPGXQVWULO9+TGF2zIE9xOxaW4rnfzVelUlhcQ3QHTPEN+u/ZsW+vOMVdvh45/Qr4elKbsk7WffZ2z01Kuo0Ckyrsc5w8ACPNcwru9rncyzClTxPPOyAANHTrw3z6LPmlUoktqMLRMSQYnsOhUUqimm0977hXoyptJrcr8Lnady29nq42NdvAPiM1hwVq+T9SaI7C4fWfNV8ZH5U+stfDp2nKPFeD9WWKdjKahc87BJVTykfFA9rmj6z5K2VNyo/yR+m3zWyj/AJI8zRif8MuTMothyfoltESIkkjgcwfBZBcLQ1xzDjwkrpVaXSK17HFw9dUZOVr5WPSkLzGvRqsYx7iQ2oCW9I7DGf3SWKnUqvbTaTidMSSBkCc/BV/wStfbVuXAvf1LPZ2Hfnx03bz09QLooOZSa1wggunbq4kfQrzy0F7HOYSZa4tMExIMFd61mqtpMql3ReSBmZkTqO4qfwdklta9XVzI/qF3fYeSd89M1fdxR6WheYWqlUp4cRPSa1wzObXaLhz7vePiUWBvpL6B/E9l2cPr6HqyzF78nqleu6oHhohoEgmYGemizj7JWFRtIuIc6Ikn8WYndqrL+7Nq95vzn0SNJUntKolfqE6zxEdl0m0nnn6G1psgAbhCesC25LQajqYcMTWhx6RiHEgZx2FOq8nLW0Tk7sa8z9YWr8PT/wDRe+03LF1d1J9/obxC8rqOqNJa4kEZEEkEJaBqPc1jXGXEAZnU5Lb+B37X0NP9TWmx9fQ9TVXft2G0UwwODSHB0kToCI+qwVpFRjnMc4gtJB6R2buxTbsuqtXaXU3CAcPScRnAO7tRYbo7T20uuweN6W9Po2+Kv37i6urk9UZU/wAUgsb1SCQSciDG4Hfu3LR2qzNqMLHThcIMGMl59eVgr0I5yYOjg4kE7uxQOed7x8Ss5YeVW0tvuXqaoYqFBOHRtcbv0N/ydu59nY9joMvLgQZlsADvyVwvMLZQq0i0PJGIBwzOh8+xPu6zVa78DDnBOZIECPVYzwu1ebmu42U8dsWpKm8srXz8D0xUXK+mTZnRsc0nhMeYVE/k3awJkHsDz5wqa0sqMJZUkEagk/khRRw8XJOM07Z+8ycRi57DjOm1e619As9fDkdPstjyXfLHjtnxA9FiVq+RJ6NXi37OVjFr+03y8Sp8Pf8AfXb4M0iEIXIO+SVU8pWTQPY5p+seatlAvqnioVB8M/L0vJZ03aafWaq8dqnJdT8DFLpZqBqPawauMep8FzVxcmGmx9of1WCBlnJjTt0HeutUm4Rutd3M4FGmqk0npv5LX6Em+QyvSq0mDpUcLm9oAzA7pHGFneS/+qpcXf8AQq6sN7WNtTExlRrnnCXGSMyJmXHbnooVisfM3i1myXFvBzCfpp3KvTexCcGmvlbV+Wf1LlX56lOomn8yTtzy+mXYiNeV0V3VnuFIkF7iDGoJJBUm96LmWKg14LXB7pB1/EVwvG+7Q2s9oqkAPcAIbkASANFPtj3VrNZS84nPqwTlnJc3Z2LO9RbDla11pfdHr5GtKm+kUL3s9bW1Syt1nflNYQ6g0t61FrZG3AQAftPcVQcn7FztdoPVb0ncG7O8wO9X7rX/AOfUpnNj2NY4bOqCPq4j9ZcXWIWShVEkPquwAncJAOWgInxC105uFPYvm7W/617jbVpxnV6TdFtS/wCdO/JD72ANus7xmHBhB35nPwIUW+bBanV6hY1+EnKHQIgaBSKoxGwO2g4TxbhHkVDvq+LQyvUayqQ0OgCG5ZDsWVNSvFRtknr/ALWIrOFpOd85J5W3wT3ne5KNVgtIqYg/mZzMmIdGcqis941mGW1XCPiJHeDkVd3Dan1BanVHFzuZiTGgDtyzRK304tzkpJXyvw0RVrSSp03Fu3zb89eo0V+kV7PStIEOnC+NuufiP3lz5K0QHVK7+rSBP6xB8p8QulvBpWGkx2TnvLoOoGZ82+KnB1CzWenRrNcTUGNwbvyOeY0yH6q0OVqWxHe2ly1dvBFlRvWVSVlaKbv+5qyv49hA5T0Q/m7SwdGo0T2OA29sZdy6XVTe6xVRTBLjUbGHX/bJjulS2PoWihUoUGuaWjG0HfM5Znbl+sod1Wh1Ow1XsOFwqNgwDqaYOvYUTbgo2zUla/PK/VYOMekc73UoSu1xWTt73j7a19OwllcnG54wBxxOABB14B3iqe47Fz1ZjD1ZxO/Rbn9ch3q6uu2PtVKtTrw7C3EHwAQc40y2fdN5OllnoOtFUHpnC2NSNsabZ8FO3KEJr9V93GWluzMxcIVKlOV/ktv1tF537cuR35QubaKLqjNaNQg9oyBPDTwKgci/9R/6z9wrG6bbYy40qVNzedEGcwcjlmTvI71H5OWI0rU5rj0gHj9XEIcT2rDa2aU6dmssr62frc2pbdenUunnZ20v6pooKduqtMio4Hi71V5ba3tNj510c5TOEkbQY9QeIKoK9HDmJjQzqDrs14q8s7DSsFQuyNRwDQdoyz8A49ys1rfLJa3Xqilh3K0oN5bLb+z7zPLXci2/4dQ/EB4f1WRW35JUsNnafeLneX/ysca7Uu1G34cr1+Sb8F9y5QhC5B3iSmVGggg6ER4p6QhAYB9PASDqCR3jJJel5TRZRa0tAOJxnrH0k/QKx5SWfBVnY8T3jIj7HvVTUYCIK7ELTUZvmecqbVKUqa5dn8WKsq/dfrTUo1XMOOkC1xkdMFpHdmZ7yqSrSLTn3HemFbZwjPXr+pqp1ZQ06vo7r6na2VsdRzwIxOJjdiJMKzs98tFOgwsJ5p2I5jpakAeI8FTJQkqcZJJ7vK3gI1ZRk5Lf6PxRMtFuD61SoZaHk8W6Qe6Apl73tzxaSRk3DAnV0Y3Z6aZBUpSp0Ubp8CVWnZrjmy6p32MFJpYZp1McgjMEkwPEeCmVb8sr3FzrNJOpMSVmggrB4eDe/fve82RxVRK2W7VJ6ZF9Zr7osqVC2iRTewDAMI0mZ4yugv2zszp2VocNCYEHjBWcShHh6fX3sLF1FpbfuW934FhUvB1au2pWEtBHRGQABnCDxieKbfF4mvUL9BkANwGz7nvULFlGxNWapxTTtpkjU6snFpvV3fMl3VbjQqtqASBII3g6jz7la2S+6TRVa6kXMqPLoJBAnDln2j7LPhKVE6MJu7MqdedNWj4cVYurwv1ppmlQpCk13WIiSNogD6qNe15iqylTY0tZTbEEgydJMdn3KrUJGjCNrLT7idepK6b1suxblw7Baby0hwMEEEHcRmCtLSv+ma3PYS0mnhc3eQZDgfEeCzRCRKlKM9SKVadP8vPuNKb8so6tmBiIkCMtNh3lVF7Xq+0OBdAaOq0aD1PaoKVRChCD2ks+ttmVTE1Jx2W8upJeAL0i76HN0mM2tAB4xn9ZWGuGy87XYNgOJ3AZ/UwO9egKnjpZqPb5HQ+GU8pT7Pv5AiUJIVA6pKQhCAqr/snOUjHWbmOG0eH2WQXoixd9WHmqhgdF2bfNvd6K9hKn6H2fc5XxGjpUXJ/by7itqMDhBUCtTLTB8VYJHsBEFX07HKauViF0rUy0we5c1mYiohIEsoAKRCFIBKgpFAFCISJZQAkSlIgBKhIgBKkShACRKVKuqwmtUawaauO4DU+XEhQ2optkxi5NRjqzTcj7FhpmqRm/Ifoj1P2Cv02mwNAaBAAAA3AZAJy4dSbnJyZ6ajSVKCgtwIQhYG0koQhAChXlYRVYWnXVp3FTCUAqU2ndESipKz0PP6tItJa4QQYITFrL7uvnRjZ1wPmG7juWTIjI6rrUaqqRuefxFCVKVnpufvfxGVGAiCoNWkWmD4qxTajA4QVuTsVmitKRdKtMtMHuKbTbMrO+RiIEFK9w0GiagYIQlUgEiF29mO0hp3E5/wAlF0iUm9DkEFD2EGDqkQgEISqQCREpCgFaCTAzJyA3nct5cN18xTz67s3dm4Dh91A5OXLhirUEOjotP4fiPb9vto1y8ViNr5I6bztYDCbH9yeu7q/nw5ghCFSOkCEIQElCEIBrkiehACpr4ucVemzJ/wBHce3tVyhZQm4O6MKlONSOzLQ88qMLSQ4EEagpq2143aysMxDho4ajs7QstbrtqUjmJHvDTv3Lp0sRGeWj4eRxMRhJ0s1muPn56EF1LEIP9FBtDMJjZv3qxLty51GAiCt6ZVaW4rULpVpFpg9x3phWy5rBIhAQC0zBBOwhWBDtkxJMiMJk5EncBlCryEixlG5lGVjraXAkRoJ8JJA8FyQlhZJWRDd2IhClXfdtSsYY3La45AcT5JKSirsRi5O0c2RWiTAzJyAG0rW3DyfwxUrDpatbsb2u3ns2fafdNyU6GfWf7x2dgGz7q0XMr4va+WGnv3x5HZwuAUPmqa8OHn4cwQhCpHSBCEIAQhCAkoQhACEIQAhCEAJj2SnoQFFbbjpvzb0D2aeGzuVPaboqs/DiG9uf01WyeyVxK3wxM45a8/dypVwVKedrPq8tDBVGA5H+igVaZaYPcV6TWoMf1mh3EAqvtFw0HiMJHBx85VuGNjvT99xRn8Nn+lp968/EwSVa5/JOnsqPHGD5Bc/7oN/5j8g9VtWLpcfozS/h9dbvqvMyqRa5vJKntqOPAAeqlUeTNnbq0u/ScfKFDxlJce4lfDq74Lm/JMxCsLFc1erpTIHvHojjnme5bizWGlT6lMNO8AT46rutE8c/0rv8izT+GL9cu718jP2DkvTbnVOM7hk31P5yV9TYGgBoAA0AEAdychU51Jzd5O50KVGFJWgre+IIQhYG0EIQgBCEIAQhCAkoWcvhjxVYxj3tBYXGKj9h3YszoO9cLLj52kOce5jidXv3E+9mMvzkTTljEpuOy9Ur5b7duV8zG+ZqkKmZz3/EXaZiu5u4ERiOme3PsQTWH+w46aWg5aTqc9p/Mq4ZFyhVBFbIikXAgf77gQZPaQREfnSXZ6EjphzTuFV7vrKAmIUf2Vu9/wC0qfxI9lbvf+0qfxICQmPZK5eyt3v/AGlT+JHsrd7/ANpU/iQCISmyt+L9o/1R7I34vnf6oBEJfZG/F87/AFR7I34vnf6oBEJfZG/F87/VHsjfi+d/qgEQl9kb8Xzv9VEtV3k5sqPaRsLnkH94HPTX65rGTsslcEpCjWSzlwl88A+oIO38X5+ileyN+L53+qRkpK6AiFCvJwpAQHGZ/HU2cCd67VacCRTe7LZUd4ZlFNOTitV9wd0Lk2gCYLXgRM84/XcM129kb8Xzv9VkBEJfY2/F87/VHsbfi+d/qgEQl9jb8Xzv9Uvsrfi+d/qgK297sfVc2pTeA5oLYIyIMyD4xBCi3ZdFbnG1KrgMJJDcjrwyG/KUIVWWEpyn0jvfXV2vuy99ZFt52/sJgmGunLMVIkBpYPwx1YGmcZznJ/YbdMLt5mrMmCM5GeqEK0SPoXM1hBaHgjP/ADTuI3bifySinc7ZBwukRrU0jKQAInIIQgLTG/3B838knOP9z94eiVCAVrnTm2BvmfJdUIQAhCEAIQhACEIQAhCEAIQhAQLzp1XAc0YOc5xsyXRzKs5PZGWRYTunPFxQhYRjaTfG3tADTqzk9sTtZMDPLJ3BLzdXLps7egc+HSyQhZga+nV2Pb1QM2EjFtOuQ7M0c3Wnrs+Q7/0t352IQgOlNr56Tmkbg0gzltnj4hSEIQH/2Q=="}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
               color={'black'}
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Ahmedabad
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-around">
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/jpeg;base64,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"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
               color={'black'}
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
              >
                Kolkata
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/jpeg;base64,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"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
                color={'black'}
              >
                Pune
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/jpeg;base64,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"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
                color={'black'}
              >
                Surat
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/png;base64,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"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
                color={'black'}
              >
                Jaipur
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              p={{ base: "10px 0px", md: "25px 0px" }}
              cursor="pointer"
            >
              <Image
                src={"data:image/png;base64,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"}
                pb="10px"
                w={{ base: "40px", sm: "60px", md: "80px" }}
              />
              <Text
                fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                textAlign="center"
                color={'black'}
              >
                Hyderabad
              </Text>
            </Box>
          </Flex>
        </Box>
        {/* -------------------------------Medicine------------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px 0px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Pharmaceutical Drug, Medicine, Medical Care & Consultation
          </Heading>
          <Flex w="95%" m="auto" p="10px 0px 0px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/bigBn06.jpg"
              >
                <a href="/Medicines">
                  <Button
                    top="350px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="90%"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/bigBn06.jpg"
              />
            </Box>
            <SimpleGrid
              w={{ base: "100%", xl: "72%" }}
              height="100%"
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec3.map((el) => (
                <a href="/Medicines">
                  <Flex
                    p="10px"
                    flexDirection={{ base: "column", sm: "row" }}
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  >
                    <Box w="50%">
                      <Image src={el.img} />
                    </Box>
                    <Box p="0px 10px" align="start">
                      <Text
                        fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                        pb="5px"
                        fontWeight="700"
                        color={'black'}
                      >
                        {el.title}
                      </Text>
                      <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d1}
                      </Text>
                      <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d2}
                      </Text>
                      <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d3}
                      </Text>
                      <Text fontSize={{ base: "10px", sm: "12px" }}>
                        {el.d4}
                      </Text>
                    </Box>
                  </Flex>
                </a>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* --------------------------------Brands------------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "30px" }}
            fontFamily="Arial"
            color="#333"
          >
            Explore products from Premium Brands
          </Heading>
          <Flex justifyContent="space-around">
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"data:image/png;base64,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"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAAC/v7/09PSioqLS0tIwMDD6+vrl5eV7e3vx8fF4eHjLy8tQUFBGRkarq6vY2NiOjo7e3t6EhIS3t7cXFxcMDAyampo+Pj5hYWHb29uwsLDs7OwgICCgoKBXV1dsbGwsLCyJiYm8vLxlZWU3NzckJCSrYnspAAAE5klEQVR4nO2d13KrQAyGg4MDbsENN1xTzvs/4okhTgyIErMrrTT67pmR/lkWrcry9KQoiqIoiqIoimKTPbUBTJj724Pn7ajNYMB04WX0qS1xnuTi3RhT2+I4vneHilVHz8sxpbbHYYaTvFZeSG2Ruyy9ItQWucuopFVMbZKzvJa08rbUNrnKS1krb01tlKNAWunHEKb4GdT9vZoFqNWA2iwneQe10pMhxBDW6oXaLicBgoYrS2q7XKQcuKesqO1yElgrr0dtl4usYa1eqe1ykoqFpfl3gCOslU9tl5PEoFYTarOcpA8vLGqz3GQAaqUZUhBQKz3ngISQVhphwUSqVXvKeXetFVZSTvrNqU1yl1VBqteA2iKHKWilcXsdOalOQ2pz3OZeKq3lNPAj1ZsG7Y0cPO8wWUT6CUwJ5j1/NjiPZlH/ue0zu2gwyYqum8nAH7d+jjXD5SCfgBkljVt4fw2UL0aJdMEisGizWdekQPtAQH8LwCI8y7GZV7vtvfjgOpnOqh/J1pfMnS08Nfh9ei88sV9fGh5JH5P3yQxqVtUv59/kQuiDPTQQ0tofKmqm0EI5ToNgvGitVIqopMTHn1x/gAW1h8YIi2kEC2yonTTE2L5UX8QiDtwJilZfCIhRoYS6HVbsc4QV/XtW+KR2tiMVtWVLnKnd7URFr6M1WJ8V/xZadmZG7W8X3lClilmfqaeoWp2p3e3GAVMr1ttVZfueHZgfpQNMrbhXzODRG9UKAnNhse9HakqeG4T/uCaeVidqVzuDeIBmn2yoGuqyAP85sWc0rQTkk/1mLw0hoON7i6WVgIWF9y1kH2JhJkipPTUA2pYlobhqvQJ9g3myIQVLKwlvIZpYEr6Fcyyx3qg9NUCv2U0z8D/qIJbsJezvaLks1sWvb1q1RJpAQpsRmljUjprgrGK1By3nQO2oCdDE4p9RRhRLwkU+aOdoCffoo23wEoJStNAhofbUAPDFOxaQkPtDO+5IuIgTrxBG7akB0FI0EnZ4vGbSEbWr3cEr3kt4D/HEKo4KM+SCJpaAkgVaCC+hMQQvdhBwgzDO8GoG+9YQ1Gkwamc7gzmJcqZ2titoeYcr3MMHvMnoK8wvWNmjisV98B5XrJh35QIt/ydBLcxIK4VzoQd12jCF87kHrRz2A+PhMLQraH555dtUgy+W5x2pnX6Upiv+rBAzrSTiVS3y8Dz8EInFM2WDOX5/B7XbjwH+5MQ6XCv6GwqxuDYwU2zxfG9nIxCL7/09qFf3ZFC73AF0rThPPiHesZLBOWWKnajh3VSDvLQ4ZwCxlxbvhYXa9cB7x0pB1IrzpzADMYyndtUA5b8VWoJp3i8HVnGa76nwnor/2JuGa7qhAMp11Px39wyMLGBM7aQxEBqQJEwefmO9LMa4Gl3C9qmHf8vyPZavauNbtwexGj8ImA3LYzGQ51r9qsHaD8MEjO+UsBZtse6QrMJS56SQY04RK7GpuM39hoWMPN+iaiPGG2skRe4lDP/jSbRWLQoY23XS6+92/V4yazxRSrhMspa6nPw2KRT+Qr/ujwWcO99bsr9UKAX3Nz5HFbnDE/vCVyuAc2J8rHF9B00v8mwdfYBh/qu4mjX+kamXH5z6FL9b3RMsv3fvw0fScrRynow+r+fLf9uI+TDmIwRhyLuRQ1EURVEURTHCf8eYSCcC+BLCAAAAAElFTkSuQmCC"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo.png"} />
            </Box>
          </Flex>
          <Flex justifyContent="space-around">
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"data:image/jpeg;base64,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"} />
            </Box>
            <Box
              w="12%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
            </Box>
            <Box
              w="12%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
            </Box>
            <Box
              w="12%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"data:image/png;base64,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"} />
            </Box>
            <Box
              w="20%"
              display="flex"
              justifyContent="center"
              p={{ base: "10px", md: "20px 25px" }}
              alignItems="center"
            >
              <Image src={"data:image/png;base64,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"} />
            </Box>
          </Flex>
        </Box>
        {/* -------------------------------Industrial---------------------------------- */}
        <Box
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Heading
            align="left"
            p="5px 10px"
            fontSize={{ base: "18px", sm: "22px", md: "28px" }}
            fontFamily="Arial"
            color="#333"
          >
            Industrial Plants, Machinery & Equipment
          </Heading>
          <Flex height="100%" w="95%" m="auto" p="10px 0px">
            <Box
              w={{ base: "0%", xl: "28%" }}
              visibility={{ base: "hidden", xl: "visible" }}
            >
              <Box
                position="relative"
                backgroundImage="https://hm.imimg.com/imhome_gifs/industrial-plants-machinery.jpg"
              >
                <a href="/">
                  <Button
                    top="400px"
                    right="30%"
                    position="absolute"
                    fontSize={{ base: "12px", sm: "13px", md: "15px" }}
                    borderRadius="0px"
                    fontFamily="arial"
                    background="teal"
                    colorScheme="white"
                    p="5px 22px"
                    border="none"
                    margin="0"
                    height={{ base: "20px", sm: "30px", md: "50px" }}
                    cursor="pointer"
                    width="142px"
                    fontWeight="700"
                    text-indent="30px"
                  >
                    View All
                  </Button>
                </a>
              </Box>
              <Image
                height="100%"
                p="0px 20px 0px 0px"
                objectFit="cover"
                src="https://hm.imimg.com/imhome_gifs/industrial-plants-machinery.jpg"
              />
            </Box>
            <SimpleGrid
              height="100%"
              w={{ base: "100%", xl: "72%" }}
              columns={{ base: 2, md: 3 }}
              spacing={5}
            >
              {sec4.map((el) => (
                <Flex
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                      color={'black'}
                    >
                      {el.title}
                    </Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text  color={'black'} fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
              {hide4.map((el) => (
                <Flex
                  display={{ base: "none", md: "flex" }}
                  p="10px"
                  flexDirection={{ base: "column", sm: "row" }}
                  boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                >
                  <Box w="50%">
                    <Image src={el.img} />
                  </Box>
                  <Box p="0px 10px" align="start">
                    <Text
                      fontSize={{ base: "10px", sm: "12px", md: "13px" }}
                      pb="5px"
                      fontWeight="700"
                    >
                      {el.title}
                    </Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d1}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d2}</Text>
                    <Text fontSize={{ base: "10px", sm: "12px" }}>{el.d3}</Text>
                  </Box>
                </Flex>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
        {/* -------------------------------Software---------------------------------- */}
        <Flex
          borderTop="3px solid purple"
          backgroundColor="white"
          marginTop="20px"
          w="96%"
        >
          <Box p={{ base: "10px", md: "50px" }} align="start">
            <Image w={{ base: "20%", md: "50%" }} src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
            <Heading
              p={{ base: "10px 0px 0px 0px", md: "20px 0px 0px 0px" }}
              fontSize={{ base: "18px", sm: "20px", md: "30px" }}
              fontFamily="Arial"
              color="#333"
            >
              Accounting Software
            </Heading>
            <Text
              p={{ base: "0px 0px 10px 0px", md: "0px 0px 20px 0px" }}
              fontSize={{ base: "12px", sm: "13px", md: "20px" }}
            >
              Trusted by 3,60,000+ Small Businesses across different domains
            </Text>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                GST Accounting Software
              </Text>
            </Flex>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                e-Invoice Software
              </Text>
            </Flex>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                Inventory Management Software
              </Text>
            </Flex>
            <Flex gap={5}>
              <Box pt="5px">
                <BsCheckLg
                  color="blue"
                  fontSize={{ base: "15px", md: "20px" }}
                />
              </Box>
              <Text fontSize={{ base: "12px", sm: "13px", md: "18px" }}>
                e-Way Billing Software
              </Text>
            </Flex>
          </Box>
          <Box p={{ base: "10px", md: "50px 0px 0px 0px" }}>
            <Image
              display={{ base: "none", lg: "flex" }}
              w="50%"
              src={"https://i.ibb.co/Zc5Y127/logo-bharatmart2.png"}
            />
          </Box>
        </Flex>
        {/* -------------------------------Mobile App--------------------------------- */}
        <Flex
          borderTop="3px solid purple"
          backgroundColor="white"
          justifyContent="space-evenly"
          margin="20px"
          w="96%"
        >
          <Box p={{ base: "10px", md: "50px 0px 0px 0px" }}>
            <Image w="70%" src={"https://i.ibb.co/Zc5Y127/logo-bharatmart2.png"} />
          </Box>
          <Box p={{ base: "10px", md: "100px 0px 50px 0px" }} align="start">
            <Heading
              p={{ base: "10px 0px 0px 0px", md: "20px 0px 0px 0px" }}
              fontSize={{ base: "18px", sm: "20px", md: "30px" }}
              fontFamily="Arial"
              color="#333"
            >
              Get BharatMART App
            </Heading>
            <Text
              p={{ base: "0px 0px 10px 0px", md: "0px 0px 20px 0px" }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            >
              Search for products/services and connect with verified sellers on
              the go!
            </Text>
            <Flex>
              <Input
              border={'1px solid black'}
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                variant="outline"
                placeholder=" Enter Mobile No."
                bg="white"
                height={{ base: "15px", sm: "20px", md: "30px" }}
                borderRadius="0px"
                margin="10px 0px"
              />
              <Button
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                borderRadius="0px"
                fontFamily="arial"
                background="-webkit-gradient(linear,left top,left bottom,from(#058b80),to(#02625a))"
                colorScheme="#fff"
                p="5px 22px"
                border="none"
                margin="10px 0px"
                height={{ base: "15px", sm: "20px", md: "30px" }}
                position="relative"
                left="-4px"
                cursor="pointer"
                width="142px"
                fontWeight="700"
                text-indent="30px"
              >
                Search
              </Button>
            </Flex>
            <Text
              p={{ base: "0px 0px 10px 0px", md: "0px 0px 20px 0px" }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            >
              We will send you a link, open it on your phone to download the App
            </Text>
            <Image w={{ base: "20%", md: "50%" }} src={"https://5.imimg.com/data5/GLADMIN/Default/2022/4/SX/OM/DM/32732628/suitcase-courier-service-250x250.jpeg"} />
          </Box>
        </Flex>

        {/* ------------------------------------------------------------------------- */}
      </Box>
    
    </>
  );
};
export default Home;