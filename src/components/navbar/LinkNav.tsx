import {  Box, Button, IconButton, Menu, MenuItem, Stack, ThemeOptions, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuOfDrop from './MenuOfDrop';
import { chocolates, linknave, nutsandsnacks, turkeish } from '../../data/navlink';
import { useTheme } from '@emotion/react';
import Menudrop from '../Menudrop';

import MobileNav from './MobileNav';
// import { Theme, ThemeOptions } from '@mui/material/styles';
function LinkNav() {
    const [active,setAActive]=useState(0)
    const theme:ThemeOptions  =useTheme()
   
    const {breakpoints}=theme  || {}
    const down = breakpoints && breakpoints.down ? breakpoints.down : () => '';
  
    const matches = useMediaQuery(down('md'));
   
  return (
   <> {matches?<>
   <MobileNav/>
 </>:<Stack direction={"row"} justifyContent={"center"} alignItems={"center"} 
   sx={{a:{
       textDecoration:"none",
       margin:"10px",color:"black"
   },".active":{
       color:"#90B400"
   },backgroundColor:"#F7F7F7",padding:"15px"}}>
       {linknave.map((ele,index)=>{
           if(ele.type==="menu"){
               if(ele.href==="nuts"){
                   return <MenuOfDrop name={ele.name} objectData={nutsandsnacks}></MenuOfDrop>

               }else if(ele.href==="turkish"){
                   return <MenuOfDrop name={ele.name}objectData={turkeish}></MenuOfDrop>
               }else if(ele.href==="chocolates"){
                   return <MenuOfDrop name={ele.name}objectData={chocolates}></MenuOfDrop>
               }
           }else{
               return <Link to={ele.href}onClick={()=>setAActive(index)}  className={active===index?"active":""}>{ele.name}</Link>
           }
       })}
      
   </Stack>}
   
  </>
  )
}

export default LinkNav