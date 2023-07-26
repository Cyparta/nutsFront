import React, { useEffect, useRef, useState } from 'react'
import { MainCard } from '../../style/style'
import { Box, Button, Container } from '@mui/material'
import { detailofimgnut, imagenuts } from '../../data/navlink'
import { Link } from 'react-router-dom'
import { motion as m, useAnimation } from "framer-motion";
import { Stack } from '@mui/material';
import Detailofimage from './Detailofimage';
import Eachanimtion from './Eachanimtion'
import { useSelector } from 'react-redux'
// import Detailofimage from './Detailofimage'

function Reviewcandy() {
   let review=useSelector((state:any)=>state.selectimageslice.value)
    let controls = useAnimation();
    const reftoimage = useRef<HTMLImageElement|null>(null);
    const [click,setclick]=useState(false)
    function clicktoreviewdetail(event: React.MouseEvent<HTMLImageElement>,i:number){
        // if(i==0){
            controls.start({
           
                x: "",
                width:"200%",
                opacity: 1,
                // zIndex: 1,
                transition: { duration: 0.3},
              });
        // }else if (i==1){

        // }
        setclick(!click)
    }
   useEffect(()=>{
    console.log(review)
   },[])
  return (
    <Container sx={{marginY:"10px"}}>
    <MainCard sx={{position:"relative",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
       
       {detailofimgnut.map((ele,i)=>{
        return     ele.id!==4? <Eachanimtion image={ele.image} index={i} ele={ele?ele:detailofimgnut[0]} />:<></>
       })}
  <Detailofimage ele={detailofimgnut[0]}/>
    </MainCard>
    </Container>
  )
}

export default Reviewcandy