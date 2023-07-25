import { Stack } from '@mui/material'
import React from 'react'

function Menudrop({children,open}:any) {
 
  return (
    <Stack direction={"column"} alignItems={"flex-start"} justifyContent={"space-between"} sx={{backgroundColor:"white", padding:"20px",borderRadius:"20px","a":{
        textDecoration:"none",
        color:"black"
      },
      position: "absolute",
      top: "7%",
      left: "68%",
      display:open===true?"flex":"none",
      boxShadow: '0px 4px 4px 0px #00000040'

  }}>
    {children}
  </Stack>
  )
}

export default Menudrop