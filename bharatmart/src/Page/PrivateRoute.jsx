
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({children}) => {
    
    const token=JSON.parse(localStorage.getItem("token"))||null
  

   
    if(token===null){
      return <Navigate to="/login" />
    }
    return children;
  };
  
  export default PrivateRoute;
  