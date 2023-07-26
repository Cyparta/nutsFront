import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
interface propsList{
    arraytomake:any,
    name:string
}
function Listtomodile({arraytomake,name}:propsList) {
    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
    function handleClickElement(event: React.MouseEvent<HTMLDivElement, MouseEvent>){
        if(anchorElement){
    setAnchorElement(null)


        }else{
            setAnchorElement(event.currentTarget)

        }
  }
 
  return (
<><ListItemButton onClick={handleClickElement}>
                
                <ListItemText primary={name} />
                {Boolean(anchorElement)?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}
              </ListItemButton>
              <Collapse in={Boolean(anchorElement)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {Object.keys(arraytomake).map((elem)=>{
                 
                  return <ListItemButton sx={{ pl: 4 }}>
                   
                     <ListItemText primary={elem} />
               
                  
                  </ListItemButton>})}
                </List>
              </Collapse>
                
                </>
  )
}

export default Listtomodile