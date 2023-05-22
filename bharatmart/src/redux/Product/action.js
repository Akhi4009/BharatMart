import {PRODUCTGET_REQUEST,PRODUCTGET_SUCCESS,PRODUCTGET_FAILURE, DELETE_PRODUCT,ADDTOPRODUCT,UPDATE_PRODUCT } from "./actionTypes";




export const ProductgetRequestAction = ()=>{
    return {type:PRODUCTGET_REQUEST}
}


export const ProductgetSuccessAction = (payload)=>{
    return {type:PRODUCTGET_SUCCESS,payload}
}

export const ProductgetFailureAction = ()=>{
    return {type:PRODUCTGET_FAILURE}
}

export const DeleteItemProduct=()=>{
    return {type:DELETE_PRODUCT}
}

export const AddtoProduct=()=>{
    return {type:ADDTOPRODUCT}
}
export const UpdateProduct=()=>{
    return {type:UPDATE_PRODUCT}
}





export const getProductData=()=>async (dispatch)=>{
   
    dispatch(ProductgetRequestAction)
  try {
        const res = await fetch("https://victorious-top-hat-crab.cyclic.app/product/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
                
            },
        });
        const res_1 = await res.json();
       
        dispatch(ProductgetSuccessAction(res_1));
    } catch (err) {
        console.log(err);
        dispatch(ProductgetFailureAction);
    }
}

export const deleteItemFromProduct=(id)=>async(dispatch)=>{

    try{
       
        const res = await fetch(`https://victorious-top-hat-crab.cyclic.app/product/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
              
            },
        });
       
      
       dispatch(DeleteItemProduct)
       dispatch(getProductData())
    }catch(err){
        console.log(err)
    }
}



export const addToProduct=(payload)=>async(dispatch)=>{

    try{
      
        const res = await fetch(`https://victorious-top-hat-crab.cyclic.app/product/cart`,{
            method: "POST",
            headers: {
            
                "Content-type": "application/json"
            },
            body:JSON.stringify(payload)
        });
   
     
       dispatch(AddtoProduct)
       dispatch(getProductData())
    }catch(err){
        console.log(err)
    }
}

export const updateProduct=(payload,id)=>async(dispatch)=>{

    try{
        
        const res = await fetch(`https://victorious-top-hat-crab.cyclic.app/product/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
           
            },
            body:JSON.stringify(payload)
        });
       
     
       dispatch(UpdateProduct)
       dispatch(getProductData())
    }catch(err){
        console.log(err)
    }
}
