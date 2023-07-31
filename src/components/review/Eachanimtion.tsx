import React, { useRef, useState } from 'react'
import { motion as m, useAnimation } from "framer-motion";
import { Stack } from '@mui/material';
import Detailofimage from './Detailofimage';
import { useDispatch, useSelector } from 'react-redux';
import { detailofimgnut } from '../../data/navlink';
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
    let [checkkick,setcheck]=useState(false)
  
    const reftoimage = useRef<HTMLImageElement|null>(null);
    let cardImage=useSelector((state:any)=>state.reviewnuts.card)
    function clicktoreviewdetail(event: React.MouseEvent<HTMLImageElement>,i:number){
      setcheck(!checkkick)
        if(index==0){
            controls.start({
                opacity: 0,
              }).then(()=>{
                const url=(event.target as HTMLImageElement).src
                const newUrl = url.replace("http://localhost:3000", "");
               const newtarget= detailofimgnut.find((elem)=>{return elem.image==newUrl})
               reftoimage.current?.setAttribute("src",cardImage.image)
                  dispatch({type:"selectimageslice/dataCard",payload:newtarget})
                
    
                controls.start({
                  x: 0, y:0,opacity: 1 ,width:"7%"
                })
              })
        }else if (index==1){
          controls.start({
            x: "52%",
            width:"24%",
            y:"-28%",
            opacity: 1,
          }).then(()=>{
            const url=(event.target as HTMLImageElement).src
                const newUrl = url.replace("http://localhost:3000", "");
               const newtarget= detailofimgnut.find((elem)=>{return elem.image==newUrl})
               reftoimage.current?.setAttribute("src",cardImage.image)
                  dispatch({type:"selectimageslice/dataCard",payload:newtarget})
                

            controls.start({
              x: 0, y:0,opacity: 1 ,width:"7%"
            })
          })
        }else if(index==2){
          controls.start({
            opacity: 0,
          }).then(()=>{
            const url=(event.target as HTMLImageElement).src
            const newUrl = url.replace("http://localhost:3000", "");
           const newtarget= detailofimgnut.find((elem)=>{return elem.image==newUrl})
           reftoimage.current?.setAttribute("src",cardImage.image)
              dispatch({type:"selectimageslice/dataCard",payload:newtarget})
            

            controls.start({
              x: 0, y:0,opacity: 1 ,width:"7%"
            })
          })
        }else if(index==3){
          controls.start({
            opacity: 0
          }).then(()=>{
            const url=(event.target as HTMLImageElement).src
                const newUrl = url.replace("http://localhost:3000", "");
               const newtarget= detailofimgnut.find((elem)=>{return elem.image==newUrl})
               reftoimage.current?.setAttribute("src",cardImage.image)
                  dispatch({type:"selectimageslice/dataCard",payload:newtarget})
                

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