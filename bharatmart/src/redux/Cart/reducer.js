import React from "react";
import { CARTGET_REQUEST,CARTGET_SUCCESS,CARTGET_FAILURE, DELETE_DATA, ADDTOCART, UPDATE_CART } from "./actionTypes";


const InitialState = {
cart:[],
isLoading:false,
isError:false,

}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case CARTGET_REQUEST: {return {...state,isLoading:true}};
    case CARTGET_SUCCESS: {
      
      return {...state,cart:payload,isLoading:false}};
    case CARTGET_FAILURE: {return {...state,isError:true}};

    case DELETE_DATA:{return {...state,isLoading:false,isError:false}}
   
    case ADDTOCART:{return {...state,isloading:false,isError:false }}

    case UPDATE_CART:{return {...state,isLoading:false,isError:false}}


    default: return state;
   }
}