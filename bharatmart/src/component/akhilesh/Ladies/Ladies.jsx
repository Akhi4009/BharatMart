import { Grid, GridItem } from '@chakra-ui/layout'



import ProductItem from '../ProductItem'



const Ladies = ({Product}) => {
 

const data=Product.product?.filter(ele=>ele.category==="ladies")




  return (
    <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={10} justifyContent="space-around" alignItems="center">
    {data && data.map(ele=>(
      <GridItem key={ele._id}>
      <ProductItem  {...ele}/>
      </GridItem>
    ))}
    </Grid>
  )
}

export default Ladies