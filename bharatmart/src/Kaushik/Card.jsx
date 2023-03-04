import React,{useState} from "react";

import "./Model.css";
import {
    Grid,
    Box,
    Flex,
    Stack,
    Text,
    Heading,
    Image,
    Button,
    UnorderedList,
    ListItem,
    useToast,
    OrderedList,
  } from "@chakra-ui/react";

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom"
const Card=({id,image,title,name,brand,price,ram,hard_drive_size,pns_h})=>{
    const [modal, setModal] = useState(false);
    const [length, setLength] = useState(0);
    
    const inputLength=()=>{
        setLength(length+1)
        console.log(length)
    }

    const toggleModal = () => {
        setModal(!modal);
      };
    const submitModal = () => {
        
        
if(length<10){
    toast.error('🦄 Enter 10 Digit Phone-Number', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        console.log(length)
        setLength(0)
}else if(length===10){
    setModal(!modal);
    toast.success("Supplier will Contact you sortly!",{
        position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",       })
    setLength(0)
}

           
        
     };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
     
    return <div style={{margin:"20px",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
    <img  style={{height:"300px",width:"100%"}} src={image} alt={title} />
    <p style={{color:"blue"}} >{title} {ram},{hard_drive_size}</p>
    <p style={{color:"teal"}}>{name}</p>
    <h3 style={{color:"teal",fontWeight:"bold"}}>{brand}</h3>
    
    <p>&#x20b9;{price} </p>
    {/* <p>{ram}</p>
    <p>{hard_drive_size}</p> */}
    <p>Call {pns_h}</p>
    <Link to={`/laptop/${id}`}>
    <button onClick={toggleModal} style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}} >Get Details</button></Link>
    {/* {modal && (
        <div className="modal"  >
          <div  onClick={toggleModal} className="overlay"></div>
          <div width={'200px'} className="modal-content">

            <h2 id="model-heading" >Contact Seller</h2>
            <Flex spacing={4} id="model-div" >
            <div id="prodDetail" >
            <img width={"200px"} height={'150px'} id="model-img"  src={image} alt="hh" />
            <p color="black" id="model-brand" >Brand: {brand}</p>
            <p color="black" id="model-detail"  >{title} {ram},{hard_drive_size}</p>

            </div>
           <div id="input-details">
            <h2 id="input_head"  >Enter Your Phone-Number </h2>
           <input  width={'60px'} color="red" id="input-box"  type="number" placeholder="Enter Your Phone-Number" onChange={inputLength} />
           <br/>
           <button id="input-btn" onClick={submitModal}  >Submit</button>
           <p id="input-quote" style={{color:"#047a70",margin:"5px"}} >You are just a click away to get quotes from sellers</p>

           </div>
       
           </Flex>
     
            <img className="close-modal" onClick={toggleModal} src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" style={{width:"36px",height:"36px"}} alt="" />
          </div>
        </div>
      )} */}
     
     <ToastContainer/>
    </div>
       
    
}
export default Card