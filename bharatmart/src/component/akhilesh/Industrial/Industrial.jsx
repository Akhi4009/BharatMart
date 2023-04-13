import { Grid, GridItem } from '@chakra-ui/layout'


import ProductItem from '../ProductItem'


const Industrial = ({Product}) => {
 

  const data=Product.product?.filter(ele=>ele.category==="industrial")
      
 
  return (
    <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}}  justifyContent="space-around" alignItems="center" gap={10}>
    {data && data.map(ele=>(
      <GridItem key={ele._id}>
      <ProductItem  {...ele}/>
      </GridItem>
    ))}
    </Grid>
  )
}
export default Industrial