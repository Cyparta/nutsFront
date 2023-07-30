import React, { useState } from 'react'
import sectionImage from '../../assets/home/section-1.png'
import sectionImage2 from '../../assets/home/section-2.png'
import sectionImage3 from '../../assets/home/section-3.png'
import { Box, Grid, Typography } from '@mui/material'
import SpecialCard from './SpecialCard'

const ShopSection = () => {

  return (
    <div>
        <Box sx={{mt:"113px"}}>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} sx={{position:"relative"}}>
                    <img src={sectionImage} alt="section image" style={{width:"100%", height:"100%"}}/>
                    {/* <Box sx={{position:"absolute", top:"49%", left:"24%"}}>
                        <Box sx={{width:"30px", height:"30px", padding:"6px", background:"red", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", color:"#fff", cursor:"pointer", fontSize:"15px", fontWeigth:"400"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <FaPlus />
                        </Box>
                        {isHovering ? <Box sx={{position:"absolute", background:"#FFFFFF", color:"#000", borderRadius: "10px", padding:"12px", width:"160px", textAlign:"center", left:"-68px"}}>
                            <img src={sectionHover} alt="section hover"/>
                            <Typography sx={{color:status.primary, fontSize:"14px", mt:"5px"}}>
                                Dehydrated Apricot
                            </Typography>
                            <Typography sx={{my:"10px", fontSize:"14px", fontWeight:"500"}}>
                                $3.99 - 7.99
                            </Typography>
                            <MainButtonHvr sx={{padding:"5px 10px !important", borderRadius:"5px !important", fontSize:"14px !important"}}>Add To Cart</MainButtonHvr>
                        </Box> : ""}
                    </Box>
                    <Box sx={{position:"absolute", top:"15%", left:"36%"}}>
                        <Box sx={{width:"30px", height:"30px", padding:"6px", background:"red", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", color:"#fff", cursor:"pointer", fontSize:"15px", fontWeigth:"400"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <FaPlus />
                        </Box>
                        {isHovering ? <Box sx={{position:"absolute", background:"#FFFFFF", color:"#000", borderRadius: "10px", padding:"12px", width:"160px", textAlign:"center", left:"-68px"}}>
                            <img src={sectionHover} alt="section hover"/>
                            <Typography sx={{color:status.primary, fontSize:"14px", mt:"5px"}}>
                                Dehydrated Apricot
                            </Typography>
                            <Typography sx={{my:"10px", fontSize:"14px", fontWeight:"500"}}>
                                $3.99 - 7.99
                            </Typography>
                            <MainButtonHvr sx={{padding:"5px 10px !important", borderRadius:"5px !important", fontSize:"14px !important"}}>Add To Cart</MainButtonHvr>
                        </Box> : ""}
                    </Box> */}
                    <SpecialCard top="15%" left="36%"/>
                    <SpecialCard top="15%" left="78%"/>
                    <SpecialCard top="32%" left="14%"/>
                    <SpecialCard top="49%" left="75%"/>
                    <SpecialCard top="65%" left="60%"/>
                    <SpecialCard top="65%" left="14%"/>
                    <SpecialCard top="82%" left="45%"/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={{position:"relative"}}>
                    <img src={sectionImage2} alt="section image" style={{width:"100%", height:"100%"}}/>
                    <SpecialCard top="20%" left="6%"/>
                    <SpecialCard top="20%" left="47%"/>
                    <SpecialCard top="50%" left="23%"/>
                    <SpecialCard top="50%" left="67%"/>
                    <SpecialCard top="80%" left="45%"/>
                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={{position:"relative"}}>
                    <img src={sectionImage3} alt="section image" style={{width:"100%", height:"100%"}}/>
                    <SpecialCard top="19%" left="12%"/>
                    <SpecialCard top="20%" left="66%"/>
                    <SpecialCard top="62%" left="23%"/>
                    <SpecialCard top="50%" left="67%"/>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default ShopSection