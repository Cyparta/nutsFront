import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { MainButtonHvr } from "../../style/style";
import featureImage from "../../assets/home/featured-1.png";
import basketImage from "../../assets/basket.png";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {AiOutlineHeart, AiFillEye} from 'react-icons/ai';

const ProductCard = () => {
  const theme = useTheme();
  const { status } = theme;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        borderRadius: "20px 0px",
        textAlign: "center",
        padding: "27px 0",
        position:"relative"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/shop/1" style={{textDecoration:"none"}}>
        <img src={featureImage} alt="featured" style={{ width: "50%" }} />
      </Link>
      {isHovering ?  <Box sx={{mt:"-20px", display:"flex", justifyContent:"center", gap:"20px", position:"absolute", left:"50%", transform:"translateX(-50%)"}}>
        <Box sx={{background:"#fff", color:"#EC0808", padding:"5px", borderRadius:"5px", cursor:"pointer", fontSize:"25px"}}>
          <AiOutlineHeart />
        </Box>
        <Box sx={{background:"#fff", padding:"5px", borderRadius:"5px", cursor:"pointer", fontSize:"25px"}}>
          <AiFillEye />
        </Box>
      </Box> : "" }

      <Link to="/shop/1" style={{textDecoration:"none"}}>
        <Typography
          sx={{
            fontSize: "16px",
            color: status.dark,
            fontWeight: "500",
            mt: "28px",
            mb: "20px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            padding: "8px",
          }}
        >
          Milk Chocolate Assortment
        </Typography>
      </Link>
      <Typography sx={{ mb: "19px", fontWeight:"500", fontSize:"16px" }}>$ 9.99</Typography>
      <MainButtonHvr sx={{ padding: "10px 12px !important" }}>
        <img src={basketImage} style={{ padding: "0 10px" }} />
        Basket
      </MainButtonHvr>
    </Box>
  );
};

export default ProductCard;
