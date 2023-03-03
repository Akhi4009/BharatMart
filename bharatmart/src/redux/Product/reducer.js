import React from "react";
import {PRODUCTGET_REQUEST,PRODUCTGET_SUCCESS,PRODUCTGET_FAILURE, DELETE_PRODUCT,ADDTOPRODUCT,UPDATE_PRODUCT } from "./actionTypes";


const InitialState = {
product:[],
isLoading:false,
isError:false,

}

export const reducer = (state=InitialState,{type,payload})=>{

   switch(type){
    case PRODUCTGET_REQUEST: {return {...state,isLoading:true}};
    case PRODUCTGET_SUCCESS: {
      
      return {...state,product:payload,isLoading:false}};
    case PRODUCTGET_FAILURE: {return {...state,isError:true}};

    case DELETE_PRODUCT:{return {...state,isLoading:false,isError:false}}
   
    case ADDTOPRODUCT:{return {...state,isloading:false,isError:false }}

    case UPDATE_PRODUCT:{return {...state,isLoading:false,isError:false}}


    default: return state;
   }
}