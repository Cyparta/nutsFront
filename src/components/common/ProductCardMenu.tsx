import React from "react";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import nutsImage from "../../assets/shop/shop-1.png";
import { useTheme } from "@mui/material/styles";
import {AiOutlineHeart, AiOutlineEye} from "react-icons/ai";
import {BsCart4} from 'react-icons/bs';
import BasketImg from '../../assets/basket.png';

const ProductCardMenu = () => {
  const theme = useTheme();
  const { status } = theme;
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        borderRadius: "20px 0px",
        // textAlign: "center",
        padding: "50px 0 20px",
      }}
    >
      <Box sx={{ display: "flex", gap: "19px", alignItems:"center" }}>
        <Box>
        <img
          src={nutsImage}
          alt="Smoked Mixed Nuts Without Seeds And Peanuts"
        />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "16px", fontWeight: "500", mb: "9px" }}>
            Smoked Mixed Nuts Without Seeds And Peanuts
          </Typography>
          <Typography sx={{ color: status.primary, mb: "12px" }}>
            $ 7.99
          </Typography>
          <Typography sx={{ color: "#A6A4A4", maxWidth: "263px" }}>
            Tangy And Tasty Mixture Of Nuts That Leaves A Smoky Flavor Lingering
            In Your Mouth.
          </Typography>
          <Box sx={{display:"flex", mt:"30px", gap:"13px"}}>
            <Box sx={{background:"#fff", padding:"5px", borderRadius:"5px"}}>
              <AiOutlineHeart  style={{fontSize:"20px", color:"#EC0808"}}/>
            </Box>
            <Box sx={{background:"#fff", padding:"5px", borderRadius:"5px"}}>
              <AiOutlineEye style={{fontSize:"20px"}}/>
            </Box>
            <Box sx={{background:"#fff", padding:"5px", borderRadius:"5px"}}>
                <BsCart4 style={{fontSize:"20px", color:"#90B400"}}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCardMenu;
