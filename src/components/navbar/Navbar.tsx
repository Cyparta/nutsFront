// import styled from "@emotion/styled";

import { Box, Button, InputBase, Stack, Typography, useMediaQuery } from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import  React, { useRef, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import  img from "../../assets/image/icon_cart.png"
import user from "../../assets/user-1.png"
import { stylenav } from "./navbarstyle";
import { Link } from "react-router-dom";

import loginicon  from "../../assets/shape.png"
import backiconlogin from "../../assets/shapelogin.png"
import phoneimage from "../../assets/shapephone.png"
import Menudrop from "../Menudrop";

function Navbar() {
  const theme=useTheme()
  // const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [open,setOpen]=useState<Boolean>(false)
  const buttontouch :React.MutableRefObject<any>= useRef()
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
   
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '45%',
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
    backgroundColor:theme.palette.primary.main,
    padding:"20px",
    boxSizing:"border-box"
  }}>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-around"}spacing={2}>
    <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            LOGO
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
          <Stack direction={"row"} justifyContent={"space-between"}sx={{width:"25%"}} >
          <Box sx={Object.assign(stylenav,{img:{
            margin:"10px"
          }})}>
            <img src={img} alt=""/>
          </Box>
          <Box sx={Object.assign(stylenav,{position:"relation"})}>
            
            <Box sx={Object.assign(stylenav,{color:theme.palette.primary.light,cursor:"pointer",img:{
              margin:"10px"
            }})} onClick={()=>{setOpen(!open)}} ref={buttontouch}>
            <img src={user} alt="" onClick={()=>buttontouch.current.click()}/>
            {/* {`theme.breakpoints.up('sm') matches: ${matches}`} */}
            {matches?"Register":""}
              
            </Box>
        
            <Menudrop open={open}>
            <Box sx={stylenav}>
            <img src={loginicon} alt=""/>
              <Link to={"login"}>
                Login
              </Link>
            </Box>
            <Box sx={stylenav}>
            <img src={backiconlogin} alt=""/>
              <Link to={"profile"}>
                Create Account
              </Link>
            </Box>
           
            </Menudrop>
            
            </Box>
            <Box sx={stylenav}>
              <img src={phoneimage} alt={"phoneimage"}/>
              {matches?<a>
              + 1 (708) 770 - 4845</a>:""}
              
            </Box>
          </Stack>
    </Stack>
  </Box>
  )
}

export default Navbar
