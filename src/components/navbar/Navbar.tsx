// import styled from "@emotion/styled";

import { Box, Button, InputBase, Stack, Typography, useMediaQuery } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import  React, { useRef, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import  img from "../../assets/Basket (2).png"
import user from "../../assets/user-1.png"
import { stylenav } from "./navbarstyle";
import { Link, useNavigate } from "react-router-dom";

import loginicon  from "../../assets/shapeblock.png"
import backiconlogin from "../../assets/shapelogin.png"
import phoneimage from "../../assets/shape.png"
import Menudrop from "../Menudrop";
import imagelogo from "../../assets/logos/logoelitenuts.png"
function Navbar() {
  const theme=useTheme()
  let navigate=useNavigate()
  // const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open,setOpen]=useState<Boolean>(false)
  const buttontouch :React.MutableRefObject<any>= useRef()
  const loginpart :React.MutableRefObject<any>= useRef()
  const createaccount :React.MutableRefObject<any>= useRef()

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
   border:"1px solid " + theme.palette.primary.main,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
     
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
    },
    width:"100%"
  }));
 

  return (
  <Box sx={{
    backgroundColor:theme.palette.primary.light,
    padding:"20px 80px",
    boxSizing:"border-box"
  }}>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"}>
          <Typography
            noWrap
            component="img"
            src={imagelogo}
          >
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Stack direction={"row"} justifyContent={"center"}sx={{width:"36%"}} >
          <Box sx={Object.assign(stylenav,{img:{
            margin:"7px",display:{
              sm:"none",md:'block'
            }
          }})} onClick={()=>navigate("/cart")}>
            <img src={img} alt="logo"/>
          </Box>
          <Box sx={Object.assign(stylenav,{position:"relation"})}>
            
            <Box sx={Object.assign(stylenav,{color:theme.palette.primary.main,cursor:"pointer",img:{
              margin:"7px",
             
            }})} onClick={()=>{setOpen(!open)}} ref={buttontouch}>
            <img src={user} alt="" />
            {/* {`theme.breakpoints.up('sm') matches: ${matches}`} */}
            {matches?"Register":""}
              
            </Box>
        
            <Menudrop open={open} >
            <Box sx={stylenav} onClick={()=>navigate("/login")}>
            <img src={loginicon} alt=""/>
              <Link to="/login" >
                Login
              </Link>
            </Box>
            <Box sx={stylenav} onClick={()=>navigate("/sign")}>
            <img src={backiconlogin} alt=""onClick={()=>createaccount.current.click()}/>
              <Link to="/sign" >
                Create Account
              </Link>
            </Box>
           
            </Menudrop>
            
            </Box>
            <Box sx={stylenav}>
              <img src={phoneimage} alt={"phoneimage"} />
              {matches?<a>
              + 1 (708) 770 - 4845</a>:""}
              
            </Box>
          </Stack>
    </Stack>
  </Box>
  )
}

export default Navbar
