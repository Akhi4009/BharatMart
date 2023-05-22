import { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Searchbar2 } from './main2';
import products from './products';
 
 
 export function Searchbar(){

    const [query,setQuery]=useState("")
const [suggesstions,setSugessetions]=useState([])
const [set,setData]=useState([])

const queryHandler=useCallback((val)=>{
  setQuery(val)
},[])




useEffect(()=>{

  
if(query===""){
  setSugessetions([])
}else{
  let textQuery=query.trim().toLowerCase()
  
  let newSuggesstions=products.filter((item)=>{
return item.product_name.toLowerCase().indexOf(textQuery)!==-1?true:false
  }).map((item)=>item.product_name)
    setSugessetions(newSuggesstions)
  
 
}

},[query])

  return (
    <div className="App">
      
      
      <Searchbar2 queryHandler={queryHandler} suggesstions={suggesstions}/>
    </div>
  );
}

