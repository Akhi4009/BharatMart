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



export const getAddress=()=>async (dispatch)=>{
    dispatch(AddressgetRequestAction)
  try {
        const res = await fetch("http://localhost:8080/address", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                
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

export const addAddress=(payload)=>async(dispatch)=>{

    try{
      
        const res = await fetch(`http://localhost:8080/address/add`,{
            method: "POST",
            headers: {
                "Content-type": "application/json",
                
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(AddAddress())
       dispatch(getAddress())
     
    }catch(err){
        console.log(err)
    }
}

export const deleteAddress=(id)=>async(dispatch)=>{

    try{
       
        const res = await fetch(`http://localhost:8080/address/delete/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(DeleteAddress)
       dispatch(getAddress())
       
    }catch(err){
        console.log(err)
    }
}


export const updateAddress=(payload,id,)=>async(dispatch)=>{

    try{
        
        const res = await fetch(`http://localhost:8080/address/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
               
            },
            body:JSON.stringify(payload)
        });
        const res_1= await res.json();
       console.log(res_1)
       dispatch(UpdateAddres)
       dispatch(getAddress())
    }catch(err){
        console.log(err)
    }
}

