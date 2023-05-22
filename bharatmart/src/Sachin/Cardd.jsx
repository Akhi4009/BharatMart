import React,{useState} from "react";




import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
     <div ><p > <span style={{fontWeight:"bold",color:"green"}} >CALL</span> {pns_h}</p></div>
    <button onClick={toggleModal} style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}} >Contact Supplier</button>
    {modal && (
        <div className="modal" >
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <h2 style={{fontWeight:"bold",color:"teal"}} >Contact Seller</h2>
            <div style={{display:"flex"}}>
            <div style={{width:"35%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",margin:"10px"}}>
            <img style={{width:"200px",height:"210px"}} src={image} alt="hh" />
            <p style={{color:"teal",margin:"5px",fontWeight:"bold"}}>Brand: {brand}</p>
            <p  style={{color:"gray",margin:"5px"}} >{title} {ram},{hard_drive_size}</p>

            </div>
           <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",margin:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <h2 style={{color:"#047a70",fontSize:"25px",fontWeight:"bold"}} >Enter Your Phone-Number </h2>
           <input style={{width:"80%",border:"1px solid gray",height:"20px"}} type="number" placeholder="Enter Your Phone-Number" onChange={inputLength} />
           <br/>
           <button onClick={submitModal} style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}} >Submit</button>
           <p style={{color:"#047a70",margin:"5px"}} >You are just a click away to get quotes from sellers</p>

           </div>
       
           </div>
     
            <img className="close-modal" onClick={toggleModal} src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" style={{width:"36px",height:"36px"}} alt="" />
          </div>
        </div>
      )}
     
     <ToastContainer/>
    </div>
       
    
}
export default Card