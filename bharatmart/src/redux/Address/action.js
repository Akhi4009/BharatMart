import { ADDRESSGET_REQUEST,ADDRESSGET_SUCCESS,ADDRESSGET_FAILURE,ADD_ADDRESS,UPDATE_ADDRESS,DELETE_ADDRESS} from "./actionType";



export const AddressgetRequestAction = ()=>{
    return {type:ADDRESSGET_REQUEST}
}


export const AddressgetSuccessAction = (payload)=>{
    return {type:ADDRESSGET_SUCCESS,payload}
}

export const AddressgetFailureAction = ()=>{
    return {type:ADDRESSGET_FAILURE}
}

export const DeleteAddress=()=>{
    return {type:DELETE_ADDRESS}
}

export const AddAddress=()=>{
    return {type:ADD_ADDRESS}
}
export const UpdateAddres=()=>{
    return {type:UPDATE_ADDRESS}
}



export const getAddress=(token)=>async (dispatch)=>{
    dispatch(AddressgetRequestAction)
  try {
        const res = await fetch("https://outstanding-outfit-seal.cyclic.app/address", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
        });
        const res_1 = await res.json();
        console.log(res_1);
        dispatch(AddressgetSuccessAction(res_1.data));
    } catch (err) {
        console.log(err);
        dispatch(AddressgetFailureAction);
    }
}

export const addAddress=(payload,token)=>async(dispatch)=>{

    try{
      
        const res = await fetch(`https://outstanding-outfit-seal.cyclic.app/address/add`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(AddAddress())
       dispatch(getAddress(token))
     
    }catch(err){
        console.log(err)
    }
}

export const deleteAddress=(id,token)=>async(dispatch)=>{

    try{
       
        const res = await fetch(`https://outstanding-outfit-seal.cyclic.app/address/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(DeleteAddress)
       dispatch(getAddress(token))
       
    }catch(err){
        console.log(err)
    }
}


export const updateAddress=(payload,id,token)=>async(dispatch)=>{

    try{
        
        const res = await fetch(`https://outstanding-outfit-seal.cyclic.app/address/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "authorization":token 
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(UpdateAddres)
       dispatch(getAddress(token))
    }catch(err){
        console.log(err)
    }
}

