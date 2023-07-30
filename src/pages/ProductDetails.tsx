import React, {useRef} from "react";
import Layout from "../components/layout/Layout";
import { Box, Grid, Container, Typography } from "@mui/material";
import productImage from "../assets/product/product-1.webp";
import productImage2 from "../assets/product/product-2.png";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { MainButtonHvr } from "../style/style";
import Slider from "react-slick";
import ProductCard from "../components/common/ProductCard";
import DialogCart from "../components/common/DialogCart";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const Info

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export const Info = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  fontWeight: 500,
  fontSize: "20px",
  marginBottom: "24px",
}));

const ProductDetails = () => {
  const theme = useTheme();
  const { status } = theme;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows:4,

        },
      },
    ],
  };

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

  return (
    <Layout>
      <Container>
        {/* main Product */}
        <Box sx={{ mt: "40px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src={productImage}
                alt="product"
                style={{ width: "100%", borderRadius: "50px" }}
              />
              <Box sx={{ mt: "20px" }}>
                <img src={productImage2} alt="test" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography
                sx={{ fontWeight: "500", fontSize: "20px", mb: "24px" }}
              >
                Smoked Mixed Nuts Without Seeds And Peanuts
              </Typography>
              <Info>
                <span>PRICE:</span>
                $7.99
              </Info>
              <Info>
                <span>BRAND:</span>
                Elite Nuts
              </Info>
              <Info>
                <span>TYPE:</span>
                Nuts & Seeds
              </Info>
              <Info>
                <span>AVAILABILITY:</span>
                <span style={{ color: status.primary }}>Many In Stock</span>
              </Info>
              <Info>
                <span>WEIGHT:</span>
                <Box sx={{ display: "flex", gap: "17px" }}>
                  <Box
                    sx={{
                      border: "1px solid #90B400",
                      padding: "12px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    HALF POUND
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #777575",
                      padding: "12px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    ONE POUND
                  </Box>
                </Box>
              </Info>
              {/* QUANTITY: */}
              <Info>
                <span>QUANTITY:</span>
                <Box
                  sx={{ display: "flex", gap: "12px", color: status.primary }}
                >
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </Box>
              </Info>
              {/* addToCart */}
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  mt: "14px",
                }}
              >
                <MainButtonHvr
                  sx={{ padding: "8px 17px !important" }}
                  onClick={handleClickOpen}
                >
                  Add To Cart
                </MainButtonHvr>
                <MainButtonHvr sx={{ padding: "8px 17px !important" }}>
                  Add To wishlist
                </MainButtonHvr>
                <DialogCart open={open} handleClose={handleClose} />
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              width: "100%",
              background: "#777575",
              height: "1px",
              mt: "21px",
            }}
          ></Box>

          {/* related products */}
          <Box sx={{ mt: "21px" }}>
            <Typography>Related Products</Typography>
            <Typography sx={{ color: "#C3C3C3", fontSize: "12px", mb: "24px" }}>
              Related Products
            </Typography>
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
            </Slider>

            <div className="slider-arrow">
              <button onClick={() => handlePrevClick()} className="back">
                <NavigateBeforeIcon />
              </button>
              <button
                onClick={() => handleNextClick()}
                className="next"
              >
                <NavigateNextIcon />
              </button>
            </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ProductDetails;
