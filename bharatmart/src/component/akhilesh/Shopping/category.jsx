import React from 'react'
import { Image,Box,Text,Grid, GridItem,Flex,Stack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const category= [
  {
   "image": "https://shopping.imimg.com/style/ladies-wear.png",
   "title": "Ladies Wear",
   link:"/ladies"
  },
  {
   "image": "https://shopping.imimg.com/style/men-wear.png",
   "title": "Men Wear",
    "link":"/mens"
  },
  {
   "image": "https://shopping.imimg.com/style/footwear.png",
   "title": "Footwear",
   "link":"/footwear"
  },
  {
   "image": "https://shopping.imimg.com/style/beauty-products.png",
   "title": "Beauty Products",
   "link":"/ladies"
  },
  {
   "image": "https://shopping.imimg.com/style/mobile-accessories.png",
   "title": "Mobile Accessories",
   "link":"/industrial"
  },
  {
   "image": "https://shopping.imimg.com/style/home-decor.png",
   "title": "Home Decor",
   "link":"/mens"
  },
 
  {
   "image": "https://shopping.imimg.com/style/light.png",
   "title": "Light",
   "link":"/footwear"
  },
  {
   "image": "https://shopping.imimg.com/style/industrial-chemicals.png",
   "title": "Industrial Chemicals",
   "link":"/industrial"
  }
 ]


  

const Category = () => {

  
  return (
    <>
    <Grid justifyContent="space-around" alignItems="center" 
     templateColumns={{ base:"repeat(4,1fr)",md:"repeat(8,1fr)"}} m={5}>
    {category.map(ele=>(
      <GridItem key={ele.title} >
      <Stack alignItems="center">
      <Box boxShadow='xs' p='4' rounded='md' bg='white'>
      <Link to={ele.link}>
      <Image src={ele.image} alt={ele.title} />
      </Link>
      
    </Box>
       
        <Text>{ele.title}</Text>
      </Stack>
      </GridItem>
     
      
    ))}
    </Grid>
    </>
  )
}

export default Category