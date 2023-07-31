import React from "react";
import { Box, Container, Grid, Typography, Stack} from "@mui/material";
import Layout from "../components/layout/Layout";
import { MainButton, MainButtonHvr, MainCard, SecondaryCard } from "../style/style";
import cartImage from "../assets/cart/cart-1.png";
import styled from "@emotion/styled";
import productImage1 from "../assets/product/product-2.png";
import paymentImage from '../assets/payment/payment-1.png'
import paymentImage2 from '../assets/payment/payment-2.png'
import paymentImage3 from '../assets/payment/payment-3.png'
import { useTheme } from "@mui/material/styles";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

export const Info = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "125px 1fr",
  fontWeight: 500,
  fontSize: "20px",
  marginBottom: "24px",
  alignItems: "center",




  // Adjust the margin for small screens (max-width 600px)
  '@media (max-width: 600px)': {
    gridTemplateColumns: "70px 1fr",

  },

}));

export const InfoGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "125px 1fr",
  fontWeight: 500,
  fontSize: "20px",
  marginBottom: "24px",
  alignItems: "center",

  // Adjust the margin for small screens (max-width 600px)
  '@media (max-width: 600px)': {
    gridTemplateColumns: "1fr 1fr",

  },

}));
const Cart = () => {
  const theme = useTheme();
  const { status } = theme;
  return (
    <Layout>
      <Container>
        <SecondaryCard sx={{ mt: "43px", fontSize: "25px", fontWeight: "600" }}>
          Shopping Cart (2)
        </SecondaryCard>

        <MainCard sx={{ mt: "20px", position: "relative" }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "19px", sm: "27px" },
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ margin: "0 auto" }}>
              <img src={cartImage} alt="cart" style={{ maxWidth: "110px" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Info
                sx={{ fontSize: { xs: "12px", sm: "18px" }, fontWeight: "500" }}
              >
                <span>Name</span>
                Smoked Mixed Nuts Without Seeds And Peanuts
              </Info>
              <Info
                sx={{ fontSize: { xs: "12px", sm: "18px" }, fontWeight: "500" }}
              >
                <span>Price</span>$ 6.99
              </Info>

              <Info
                sx={{ fontSize: { xs: "12px", sm: "18px" }, fontWeight: "500" }}
              >
                <span>QUANTITY</span>
                <Box
                  sx={{
                    display: "flex",
                    gap: "12px",
                    color: status.primary,
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>

                  <MainButtonHvr
                    sx={{
                      padding: "6px 10px !important",
                      borderRadius: "5px !important",
                      fontSize: "12px !important",
                    }}
                  >
                    Update Cart
                  </MainButtonHvr>
                </Box>
              </Info>
            </Box>
            {/* <Box sx={{alignSelf:"self-start", justifySelf:"self-end"}}>
                <AiOutlineClose  style={{ color:status.primary}}/>
            </Box> */}
            <Box
              sx={{
                alignSelf: "self-start",
                justifySelf: "self-end",
                position: "absolute",
                top: "15px",
                right: "20px",
              }}
            >
              <AiOutlineClose style={{ color: status.primary }} />
            </Box>
          </Box>
        </MainCard>

        <MainCard mt="20px">
          <Box>
            <InfoGrid>
              <span>total</span>
              $13.98
            </InfoGrid>
            <InfoGrid>
              <span>Subtotal</span>
              $13.98
            </InfoGrid>
            <Stack direction="row" spacing={3} flexWrap={'wrap'} gap={"20px"}>
              <Box>
                <Typography>Shipping, taxes, and discounts will be calculated at checkout</Typography>
              </Box>
                <MainButtonHvr>Continue Shopping</MainButtonHvr>
                <MainButtonHvr>Update Cart</MainButtonHvr>
                <MainButtonHvr>Check Out</MainButtonHvr>
            </Stack>
            <Box sx={{display:"flex", justifyContent:"center", mt:"28px", gap:"24px", flexWrap:"wrap"}}>
              <img src={paymentImage} alt="test"/>
              <img src={paymentImage2} alt="test"/>
              <img src={paymentImage3} alt="test"/>
            </Box>
          </Box>
        </MainCard>

        {/* <Grid container>
          <Grid xs={4}>
            <Box>
              <img src={cartImage} alt="cart" />
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box>
            <Box sx={{flex:1}}>
                <Info>
                    <span>Name</span>
                    Smoked Mixed Nuts Without Seeds And Peanuts
                </Info>
                <Info>
                    <span>Price</span>
                    $ 6.99
                </Info>

                <Info>
                <span>QUANTITY</span>
                <Box
                  sx={{ display: "flex", gap: "12px", color: status.primary, alignItems:"center", flexWrap:"wrap"}}
                >
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>

                  <MainButtonHvr sx={{padding:"6px 10px !important", borderRadius:"5px !important", fontSize:"12px !important"}}>Update Cart</MainButtonHvr>
                </Box>
              </Info>
            </Box>
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </Layout>
  );
};

export default Cart;

// <Grid container spacing={3}>
//   <Grid item xs={12} sm={12} md={6}>
//     <img
//       src={productImage1}
//       alt="product"
//       style={{ width: "100%", borderRadius: "50px" }}
//     />
//     <Box sx={{ mt: "20px" }}>
//       <img src={productImage1} alt="test" />
//     </Box>
//   </Grid>
//   <Grid item xs={12} sm={12} md={6}>
//     <Typography
//       sx={{ fontWeight: "500", fontSize: "20px", mb: "24px" }}
//     >
//       Smoked Mixed Nuts Without Seeds And Peanuts
//     </Typography>
//     <Info>
//       <span>PRICE:</span>
//       $7.99
//     </Info>
//     <Info>
//       <span>BRAND:</span>
//       Elite Nuts
//     </Info>
//     <Info>
//       <span>TYPE:</span>
//       Nuts & Seeds
//     </Info>
//     <Info>
//       <span>AVAILABILITY:</span>
//       <span style={{ color: status.primary }}>Many In Stock</span>
//     </Info>
//     <Info>
//       <span>WEIGHT:</span>
//       <Box sx={{ display: "flex", gap: "17px" }}>
//         <Box
//           sx={{
//             border: "1px solid #90B400",
//             padding: "12px",
//             borderRadius: "10px",
//             fontSize: "14px",
//           }}
//         >
//           HALF POUND
//         </Box>
//         <Box
//           sx={{
//             border: "1px solid #777575",
//             padding: "12px",
//             borderRadius: "10px",
//             fontSize: "14px",
//           }}
//         >
//           ONE POUND
//         </Box>
//       </Box>
//     </Info>
//     {/* QUANTITY: */}
//     <Info>
//       <span>QUANTITY:</span>
//       <Box
//         sx={{ display: "flex", gap: "12px", color: status.primary }}
//       >
//         <span>-</span>
//         <span>0</span>
//         <span>+</span>
//       </Box>
//     </Info>
//     {/* addToCart */}
//     <Box
//       sx={{
//         display: "flex",
//         gap: "16px",
//         flexWrap: "wrap",
//         mt: "14px",
//       }}
//     >
//       <MainButtonHvr sx={{ padding: "8px 17px !important" }}>
//         Add To Cart
//       </MainButtonHvr>
//       <MainButtonHvr sx={{ padding: "8px 17px !important" }}>
//         Add To wishlist
//       </MainButtonHvr>
//     </Box>
//   </Grid>
// </Grid>
