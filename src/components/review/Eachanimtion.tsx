import React, { useRef, useState } from 'react'
import { motion as m, useAnimation } from "framer-motion";
import { Stack } from '@mui/material';
import Detailofimage from './Detailofimage';
import { useDispatch, useSelector } from 'react-redux';
interface Eachanimtionprops{
    image:string|undefined,index:number,ele:{
        id: number;
    image: string;
    detail: string;
    title: string;
    }|null
}
function Eachanimtion({image,index,ele}:Eachanimtionprops) {
    let controls = useAnimation();
    let dispatch=useDispatch()
    const reftoimage = useRef<HTMLImageElement|null>(null);
    let cardImage=useSelector((state:any)=>state.reviewnuts.card)
    function clicktoreviewdetail(event: React.MouseEvent<HTMLImageElement>,i:number){
        if(index==0){
            controls.start({
                opacity: 0,
              }).then(()=>{
                dispatch({type:"selectimageslice/set",payload:ele})
                reftoimage.current?.setAttribute("src",cardImage.image)
    
                controls.start({
                  x: 0, y:0,opacity: 1 ,width:"7%"
                })
              })
        }else if (index==1){
          controls.start({
            x: 210,
            width:"30%",
            y:-75,
            opacity: 1,
          }).then(()=>{
            dispatch({type:"selectimageslice/set",payload:ele})
            reftoimage.current?.setAttribute("src",cardImage.image)

            controls.start({
              x: 0, y:0,opacity: 1 ,width:"7%"
            })
          })
        }else if(index==2){
          controls.start({
            opacity: 0,
          }).then(()=>{
            dispatch({type:"selectimageslice/set",payload:ele})
            reftoimage.current?.setAttribute("src",cardImage.image)

            controls.start({
              x: 0, y:0,opacity: 1 ,width:"7%"
            })
          })
        }else if(index==3){
          controls.start({
            opacity: 0
          }).then(()=>{
            dispatch({type:"selectimageslice/set",payload:ele})
            reftoimage.current?.setAttribute("src",cardImage.image)

            controls.start({
              x: 0, y:0,opacity: 1 ,width:"7%"
            })
          })
        }
        
    }
  return (
    // <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
    <m.img
    key={index}
    initial={{  x: 0, y:0,opacity: 1 ,width:"7%"}}
    animate={controls}
    exit={{  x:0,y:0,opacity: 1 ,width:"7%"}}
    
    style={{position:"absolute",top:`${index==0?23:(90*index)+23}px`,left:`${index==1?4:index==2?5:index==3?10:6}%`,width:"7%",cursor:"pointer"}}
   
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