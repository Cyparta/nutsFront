import { Box, Button, Grid, Menu, MenuItem } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Menudrop from '../Menudrop';
import { stylelistclass } from '../../style/navbar';
import { imagechocolates, imagenuts, imageturkeish } from '../../data/navlink';
import { useNavigate } from 'react-router-dom';

interface propsmenu{
    name:string,onClick?:()=>{},objectData:any
}
function MenuOfDrop({name,objectData}:propsmenu) {
  let navigate=useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e: any,name:string) => {
      console.log(e.target,name)
      navigate(`/shop/${name}`)
      setAnchorEl(null);
    };
  
  return (
    <>
    <Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    sx={{color:open?"#90B400":"black"}}
    
  >
    {name}
    {open?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}
  </Button>
    
    {name.includes("Nuts & Snacks")?<Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
    sx={{ul:{
    width: "100% !important",
    display:"flex",
    flexDirection: "column",
    alignSelf:"start",
    height: "500px",
    flexWrap: "wrap",
    
    paddingInlineStart:0, 
    },".MuiMenuItem-root":{
      width:"150px"
    },".MuiMenu-paper":{
      minWidth: "60%",
      padding: "15px",
    }}}
  >
{Object.keys(objectData).map((ele,key)=>{
      return <Box sx={{color:"#90B400",padding:"20px"}} key={key}> {ele}
       
       {objectData[ele].map((elem:any)=>{
        return <MenuItem   onClick={(e)=>handleClose(e,elem.href)} sx={{color:"black",fontWeight:"500",width:"25%"}}>{elem.title}</MenuItem>
       })}
       </Box>

})}
  <Box sx={{position:"relative",height:"100%",    width: "35%"}}>
    {imagenuts.map((ele,i)=><img src={ele} style={{position:"absolute",top:`${70*i}px`,left:`${30*i>=90?0:30*i}px`,right:`${30*i>=90?30*i:0}px`}}/>)}
  </Box>
  </Menu>:name.includes("TURKISH DELIGHTS")?<Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
    sx={{ul:{
    width: "100% !important",
    display:"flex",
    flexDirection: "row",
    alignSelf:"start",
    flexWrap: "wrap",
    paddingInlineStart:0, 
    },".MuiMenuItem-root":{
      width:"50%"
    },".MuiMenu-paper":{
      maxWidth: "80%",
      left:"58px !important",
      padding: "15px",
    }}}
  >
{Object.keys(objectData).map((ele,key )=>{
      return <Box sx={{color:"#90B400",padding:"20px"}}key={key}> {ele}
       
       {objectData[ele].map((elem:any)=>{
        return <MenuItem onClick={(e)=>handleClose(e,elem.href)} sx={{color:"black",fontWeight:"500",width:"25%"}}>{elem.title}</MenuItem>
       })}
       </Box>

})}
  <Box sx={{position:"relative",height:"100%",marginRight:"30%", display: "flex",
    justifyContent: "space-between",
    width: "100%"}}>
    {imageturkeish.map((ele,i)=><img src={ele}/>)}
  </Box>
  </Menu>:<Menu
   id="basic-menu"
   anchorEl={anchorEl}
   open={open}
   onClose={handleClose}
   MenuListProps={{
     'aria-labelledby': 'basic-button',
   }}
   sx={{ul:{
   width: "100% !important",
   display:"flex",
   flexDirection: "column",
   alignSelf:"start",
   height: "500px",
   flexWrap: "wrap",
   
   paddingInlineStart:0, 
   },".MuiMenuItem-root":{
     width:"150px"
   },".MuiMenu-paper":{
     minWidth: "50%",
     padding: "15px",
    }}}
  >
{Object.keys(objectData).map((ele,key)=>{
      return <Box sx={{color:"#90B400",padding:"20px"}} key={key}> {ele}
       
       {objectData[ele].map((elem:any)=>{
        return <MenuItem onClick={(e)=>handleClose(e,elem.href)} sx={{color:"black",fontWeight:"500",width:"25%"}}>{elem.title}</MenuItem>
       })}
       </Box>

})}
  <Box >
    {imagechocolates.map((ele,i)=><img src={ele}/>)}
  </Box>
  </Menu>}
  </>
  )
}

export default MenuOfDrop