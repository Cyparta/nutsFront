import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { MainButtonHvr } from "../../style/style";
import featureImage from "../../assets/home/featured-1.png";
import basketImage from "../../assets/basket.png";
import { useTheme } from "@mui/material/styles";

const ProductCard = () => {
  const theme = useTheme();
  const { status } = theme;
  return (
    <Box
      sx={{
        background: "#F5F5F5",
        borderRadius: "20px 0px",
        textAlign: "center",
        padding: "27px 0",
      }}
    >
      <img src={featureImage} alt="featured" style={{ width: "50%" }} />
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
      <Typography sx={{ mb: "19px" }}>$ 9.99</Typography>
      <MainButtonHvr sx={{ padding: "10px 12px !important" }}>
        <img src={basketImage} style={{ padding: "0 10px" }} />
        Basket
      </MainButtonHvr>
    </Box>
  );
};

export default ProductCard;
