import { ADDRESSGET_REQUEST,ADDRESSGET_SUCCESS,ADDRESSGET_FAILURE,ADD_ADDRESS,UPDATE_ADDRESS,DELETE_ADDRESS} from "./actionType";



const InitialState = {
    Address:[],
    isLoading:false,
    isError:false,
   
    }
    
    export const reducer = (state=InitialState,{type,payload})=>{
    
       switch(type){
        case ADDRESSGET_REQUEST: {return {...state,isLoading:true}};
        case ADDRESSGET_SUCCESS: {return {...state,Address:payload,isLoading:false}};
        case ADDRESSGET_FAILURE: {return {...state,isError:true,isAddress:false}};
    
        case DELETE_ADDRESS:{return {...state,isLoading:false,isError:false}}
       
        case ADD_ADDRESS:{return {...state,isloading:false,isError:false }}
    
        case UPDATE_ADDRESS:{return {...state,isLoading:false,isError:false}}
    
    
        default: return state;
       }
    }