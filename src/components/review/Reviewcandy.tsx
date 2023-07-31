import React, { useEffect, useRef, useState } from 'react'
import { MainCard } from '../../style/style'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { detailofimgnut, imagenuts } from '../../data/navlink'
import { Link } from 'react-router-dom'
import { motion as m, useAnimation } from "framer-motion";
import { Stack } from '@mui/material';
import Detailofimage from './Detailofimage';
import Eachanimtion from './Eachanimtion'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
// import { theme } from '../../utils/theme'
// import Detailofimage from './Detailofimage'

function Reviewcandy() {
   let review=useSelector((state:any)=>state.reviewnuts.card)
   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    // let controls = useAnimation()
    const reftoimage = useRef<HTMLImageElement|null>(null);
    const [click,setclick]=useState(false)

  
   
  return (
    <Container sx={{marginY:"10px"}}>
    <MainCard sx={{position:"relative",justifyContent:"flex-end",alignItems:"center",display:{sm:"none",xs:"none",md:"flex"}}}>
       
       {detailofimgnut.map((ele,i,array)=>{
        return  <Eachanimtion image={i===0?array[4].image:ele.id!==4?ele.image:""} index={i} ele={i===0?array[4]:ele.id!==4?ele:null} />
       })}
      <Detailofimage ele={review?review:detailofimgnut[0]}/>
    </MainCard>
    <Card sx={{display:{sm:"block",xs:"block",md:"none"},backgroundColor:"#F5F5F5",border:"none",marginBottom: "67px"}}>
       <Slider {...settings}>
        {/* <Box sx={{backgroundColor:theme.palette?.primary.}}>
        </Box> */}
      
        {detailofimgnut.map((ele)=>{
          return <CardContent sx={{display:"flex"}}>
            <Stack direction={"column"} justifyContent={"space-between"} alignItems={"center"}>
           <CardMedia
        component="img"
        height="150"
        
        image={ele.image}
        alt="Paella dish"
          sx={{objectFit: "contain",width:"auto"}}
      />
          <Box>
             <Typography sx={{ fontSize: 20,fontWeight:"bold" }} color="text.secondary" gutterBottom>
          {ele.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {ele.detail}
        </Typography>
        <Button size="small" color="primary">
        Share
      </Button>
        </Box>
        </Stack>
          </CardContent>
        })}
       </Slider></Card>
    </Container>
  )
}

export default Reviewcandy