import { Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import React, { useRef, useState } from 'react'
import {HiMenu} from "react-icons/hi";
import { chocolates, linknave, nutsandsnacks, turkeish } from '../../data/navlink';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InboxIcon from "@mui/icons-material/"
import Listtomodile from './Listtomodile';
function MobileNav() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(event)
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
  return (
   <><Button
   id="demo-positioned-button"
   aria-controls={open ? 'demo-positioned-menu' : undefined}
   aria-haspopup="true"
   aria-expanded={open ? 'true' : undefined}
   onClick={handleClick}
   sx={{color: "black",
       fontSize: "30px"}}
 >
   <HiMenu/>
 </Button>
 <Menu
   id="demo-positioned-menu"
   aria-labelledby="demo-positioned-button"
   anchorEl={anchorEl}
   open={open}
   onClose={handleClose}
   anchorOrigin={{
     vertical: 'top',
     horizontal: 'left',
   }}
   transformOrigin={{
     vertical: 'top',
     horizontal: 'left',
   }}
   sx={{".MuiPaper-root":{
    top: "127px !important",
   }}}
 >
              {/* {console.log(anchorElement)} */}

    {linknave.map((ele,index)=>{
        
           if(ele.type==="menu"){
            if(ele.href==="nuts"){
                return  <Listtomodile arraytomake={nutsandsnacks}name={ele.name}/>
              
                
            }else if(ele.href==="turkish"){
                return  <Listtomodile arraytomake={turkeish}name={ele.name}/>

            }else{
                return  <Listtomodile arraytomake={chocolates}name={ele.name}/>
            }
           }else{
               return <MenuItem onClick={handleClose}>{ele.name}</MenuItem>
           }
       })}
   
 </Menu>
   </>
  )
}

export default MobileNav
