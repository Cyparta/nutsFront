import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
interface PropsDetail{
    ele:{id: number;
        image: string;
        detail: string;
        title: string;}
}
function Detailofimage({ele}:PropsDetail) {
  return (
    <Card sx={{ maxWidth: "80%",".MuiCard-root":{
        
    },backgroundColor:"transparent",boxShadow:"none"}}>
    <CardActionArea sx={{display:"flex",justifyContent:"center",alignItems:"center" }}>
      <CardMedia
        component="img"
        height="342"
        image={ele.image}
        sx={{objectFit: "contain"}}
        alt="green iguana"
      />
      <CardActions sx={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start" ,flexDirection:"column"}}>
        <Typography gutterBottom variant="h5" component="div">
          {ele.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {ele.detail}
        </Typography>
        <Button size="small" color="primary">
        Share
      </Button>
        </CardActions>
    </CardActionArea>
   
      
    
  </Card>
  )
}

export default Detailofimage