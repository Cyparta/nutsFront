import { Stack } from '@mui/material'
import React from 'react'
interface propsmenu{
    open:boolean,children:JSX.Element
}
function Dropcatogry({children,open}:propsmenu) {
  return(<Stack direction={"column"} alignItems={"flex-start"} justifyContent={"space-between"} sx={{backgroundColor:"white", padding:"20px",borderRadius:"20px","a":{
            textDecoration:"none",
            color:"black"
          },
        
          display:open===true?"flex":"none",
          boxShadow: '0px 4px 4px 0px #00000040'
    
      }}>
        {children}
      </Stack>)
      

    
    }
  


export default Dropcatogry