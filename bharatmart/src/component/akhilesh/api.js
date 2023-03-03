import axios,{AxiosResponse} from "axios"



export const getData=async(input)=>{
let res=await axios.get(`https://bharatmart.onrender.com/${input}`)
return res.data
}

export const addData=async(data)=>{
   let res=await axios.post("https://bharatmart.onrender.com/cart",data)
    return res.data
    
    }
    export const deleteProduct=(id)=>{
      axios.delete(`https://bharatmart.onrender.com/cart/${id}`)
  }
 