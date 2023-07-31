import React, {useRef} from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { MainButton, MainButtonHvr } from "../../style/style";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import featureImage from "../../assets/home/featured-1.png";
import basketImage from "../../assets/basket.png";
import ProductCard from "../common/ProductCard";
import { useHref } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import '../../style/feature.css'
import {BsArrowRight} from 'react-icons/bs'


const Featured = () => {
  const theme = useTheme();
  const { status } = theme;

  const arrowRef = useRef<Slider>(null);

  const handlePrevClick = (): void => {
    if (arrowRef.current !== null) {
      arrowRef.current.slickPrev();
    }
  };

  const handleNextClick = (): void => {
    if (arrowRef.current !== null) {
      arrowRef.current.slickNext();
    }
  };

  const settings = {
    className:"feature",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows:2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb:"95px"
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
          <MainButtonHvr
            sx={{ padding: "13px 18px !important", borderRadius: "5px" }}
          >
            Featured Products
          </MainButtonHvr>
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
      {/* <Box sx={{ mt: "95px" }}>
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
      </Box> */}

    <div className="feature">

      <Slider {...settings}  ref={arrowRef}>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </Slider>

      <div className="slider-arrow">
        <button onClick={() => handlePrevClick()} className="back">
          <NavigateBeforeIcon />
        </button>
        <button
          onClick={() => {
            if (arrowRef.current !== null) {
              arrowRef.current.slickNext();
            }
          }}
          className="next"
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
    </Container>
  );
};

export default Featured;
