import { Grid, GridItem } from '@chakra-ui/layout'
import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProductData } from '../../../redux/Product/action'

import ProductItem from '../ProductItem'

const Footwear = () => {
  const dispatch=useDispatch()

useEffect(()=>{
dispatch(getProductData())
},[])
const Product=useSelector(store=>store.productReducer.product)
console.log(Product.product)
const data=Product.product?.filter(ele=>ele.category==="footwear")
    
  return (
    <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={10} justifyContent="space-around" alignItems="center">
    {data && data.map(ele=>(
      <GridItem>
      <ProductItem key={ele._id}{...ele}/>
      </GridItem>
    ))}
    </Grid>
  )
}
export default Footwear