import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { MainButton, MainButtonHvr } from "../../style/style";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import featureImage from "../../assets/home/featured-1.png";
import basketImage from '../../assets/basket.png'
import ProductCard from "../common/ProductCard";

const Featured = () => {
  const theme = useTheme();
  const { status } = theme;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    slidesPerRow: 6,
    speed: 500,
    rows: 2,
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            color: status.dark,
            fontWeight: 600,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          Top Products
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <MainButton
            sx={{ padding: "13px 18px !important", borderRadius: "5px" }}
          >
            Featured Products
          </MainButton>
          <MainButton
            sx={{
              background: "#F3F3F0 !important",
              color: "#000 !important",
              padding: "13px 18px !important",
              borderRadius: "5px",
            }}
          >
            New Products
          </MainButton>
          <MainButton
            sx={{
              background: "#F3F3F0 !important",
              color: "#000 !important",
              padding: "13px 18px !important",
              borderRadius: "5px",
            }}
          >
            Best Selling Products
          </MainButton>
        </Box>
      </Box>
      <Box sx={{ mt: "95px" }}>
        <Grid container spacing={4}>
          
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProductCard />
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default Featured;
