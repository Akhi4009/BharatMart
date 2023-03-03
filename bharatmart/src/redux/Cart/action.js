import { CARTGET_REQUEST,CARTGET_SUCCESS,CARTGET_FAILURE,DELETE_DATA,ADDTOCART,UPDATE_CART } from "./actionTypes";




export const CartgetRequestAction = ()=>{
    return {type:CARTGET_REQUEST}
}


export const CartgetSuccessAction = (payload)=>{
    return {type:CARTGET_SUCCESS,payload}
}

export const CartgetFailureAction = ()=>{
    return {type:CARTGET_FAILURE}
}

export const DeleteItemCart=()=>{
    return {type:DELETE_DATA}
}

export const AddtoCart=()=>{
    return {type:ADDTOCART}
}
export const update=()=>{
    return {type:UPDATE_CART}
}





export const getCardData=()=>async (dispatch)=>{
   
    dispatch(CartgetRequestAction)
  try {
        const res = await fetch("http://localhost:8080/cart/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
                
            },
        });
        const res_1 = await res.json();
        console.log(res_1);
        dispatch(CartgetSuccessAction(res_1));
    } catch (err) {
        console.log(err);
        dispatch(CartgetFailureAction);
    }
}

export const deleteItemFromCart=(id)=>async(dispatch)=>{

    try{
       
        const res = await fetch(`http://localhost:8080/cart/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
              
            },
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(DeleteItemCart)
       dispatch(getCardData())
    }catch(err){
        console.log(err)
    }
}

export const deleteAllItemFromCart=(id)=>async(dispatch)=>{
console.log(id)
    try{
       
        const res = await fetch(`http://localhost:8080/cart/deleteAll/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        });
        const res_1= await res.json();
       
       dispatch(DeleteItemCart)
       dispatch(getCardData())
    }catch(err){
        console.log(err)
    }
}

export const addToCart=(payload)=>async(dispatch)=>{

    try{
      
        const res = await fetch(`http://localhost:8080/cart/add`,{
            method: "POST",
            headers: {
            
                "Content-type": "application/json"
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
      
       dispatch(AddtoCart)
       dispatch(getCardData())
    }catch(err){
        console.log(err)
    }
}

export const updateCart=(payload,id)=>async(dispatch)=>{

    try{
        
        const res = await fetch(`http://localhost:8080/cart/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
           
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(update)
       dispatch(getCardData())
    }catch(err){
        console.log(err)
    }
}
