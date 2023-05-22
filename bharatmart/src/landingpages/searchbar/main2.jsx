import React, { useEffect, useRef, useState } from "react"
import styled from 'styled-components'
import {useThrottle} from 'use-throttle'

 export const Searchbar2=({queryHandler,suggesstions})=>{

    const [input,setInput]=useState("")
    const [activeoption,setActiveOption]=useState(0)
    const [loadind,setLoading]=useState(false)
const scrollDiv=useRef()
    const inputHandlechange=(e)=>{
        setInput(e.target.value)
        setLoading(true)
    }
    const handleActivesuggesstions=(e)=>{
        switch(e.keyCode){
            case 38:
                if(activeoption===1){
                    scrollDiv.current.scrollTop=suggesstions.length*39;
                    setActiveOption(suggesstions.length)
                }
                else if(activeoption<=suggesstions.length-3){
                    scrollDiv.current.scrollTop-=39
                }if(activeoption>1){
                    setActiveOption((prev)=>prev-1)
                }
                
                break;
                case 40:
                    if(activeoption==suggesstions.length){
                        scrollDiv.current.scrollTop=0
                        setActiveOption(0)
                    }
                    else if(activeoption>=4){
                        scrollDiv.current.scrollTop+=39
                    }
                    setActiveOption((prev)=>prev+1)
                    break
            default:
                return;

        }
    }
    const setthrottle=useThrottle(input,1000)
    useEffect(()=>{
        queryHandler(setthrottle)
    },[setthrottle,queryHandler])
    return ( 
    <Wrapper onKeyUp={handleActivesuggesstions}>
         <SearchBarWarper>
<Input  value={input} onChange={inputHandlechange}/>


         </SearchBarWarper>
         <SuggesstionsBox limit={5} suggesstionsLength={suggesstions.length} active={activeoption}
         ref={scrollDiv}>
       {suggesstions.map((item,index)=>{
        return <div key={index} onMouseOver={()=>setActiveOption(index
            +1)}>{item}</div>
       })}
       </SuggesstionsBox>
     </Wrapper>
 )
    }

    const SuggesstionsBox=styled.div`
    border:0.5px solid black;
    max-height:${({limit})=>`${limit*39}px`};
    border-top-color:${({limit})=>(limit?"transparent":"black")};
    border-bottom-color:${({suggesstionsLength})=>(suggesstionsLength?"balck":"transparent")};
    overflow:auto;

    & *{
        padding:10px;
        text-align:left;
        padding-left:20px;
    }
& :nth-child(${({active})=>active}){
    background:rgba(0,0,0,0.07)
   
}
`
const SearchBarWarper=styled.div`
display:flex;
border:1px solid black;
height:40px;
`;
const Input=styled.input`
flex:1;
border:none;
font-size:20px;
placeholder:please enter the product name;

`

const Wrapper=styled.div`

max-width:350px;
margin:auto;
`;