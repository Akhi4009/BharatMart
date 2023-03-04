import { Grid, GridItem } from '@chakra-ui/layout'
import React,{useEffect, useState} from 'react'

import ProductItem from '../ProductItem'
import { useDispatch,useSelector } from 'react-redux'
import { getProductData } from '../../../redux/Product/action'

const Industrial = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(getProductData())
  },[])
  const Product=useSelector(store=>store.productReducer.product)

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