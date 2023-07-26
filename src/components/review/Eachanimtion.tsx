import React, { useRef, useState } from 'react'
import { motion as m, useAnimation } from "framer-motion";
import { Stack } from '@mui/material';
import Detailofimage from './Detailofimage';
import { useDispatch } from 'react-redux';
interface Eachanimtionprops{
    image:string,index:number,ele:{
        id: number;
    image: string;
    detail: string;
    title: string;
    }
}
function Eachanimtion({image,index,ele}:Eachanimtionprops) {
    let controls = useAnimation();
    let dispatch=useDispatch()
    const reftoimage = useRef<HTMLImageElement|null>(null);
    const [click,setclick]=useState(false)
    function clicktoreviewdetail(event: React.MouseEvent<HTMLImageElement>,i:number){
        // if(i==0){
            controls.start({
           
                x: 400,
                width:"50%",
                y:-250,
                opacity: 0,
                // zIndex: 1,
                transition: { duration: 3},
              }).then(()=>{
                dispatch({type:"SelectImageSlice/set",payload:ele})
              })
        // }else if (i==1){

        // }
        
    }
  return (
    // <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
    <m.img
    initial={{  x: 0, y:0,opacity: 1 ,width:"100%"}}
    animate={controls}
    style={{position:"absolute",top:`${index==0?23:(90*index)+23}px`,left:`${index==1?4:index==2?5:index==3?10:6}%`,width:"10%",cursor:"pointer"}}
    transition={{
        repeat:5,
        repeatType: "reverse",
        duration: 2
      }}
    // onClick={()=>reftoimage.current?.click()}
    src={image}
    onClick={(event)=>clicktoreviewdetail(event,index)} ref={reftoimage}
  >
    </m.img>
    
    /* <Detailofimage ele={ele}/> */

  
    // </Stack/>
  )
}

export default Eachanimtion