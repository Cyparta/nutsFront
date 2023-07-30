import React from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import Layout from "../components/layout/Layout";
import paymentImage1 from "../assets/payment/payment-1.png";
import paymentImage2 from "../assets/payment/payment-2.png";
import paymentImage3 from "../assets/payment/payment-3.png";
import {
  InputControl,
  InputField,
  MainButton,
  MainButtonHvr,
  MainCard,
} from "../style/style";
import { useTheme } from "@mui/material/styles";
// import {AiOutlineArrowLeft} from 'react-icons/ai';
import { BsChevronLeft } from "react-icons/bs";
import CustomSelect from "../components/common/CustomSelect";
import cartImage from '../assets/payment/cart-1.png';
import styled from "@emotion/styled";
import ControlledRadioButtonsGroup from "../components/common/ControlledRadioButtonsGroup";
import BreadCrumb from "../components/common/BreadCrumb";

const options = [
  "Egypt",
  "Angola",
  "UnitedState",
  "France",
  "England",
  "Turkey",
];

export const Info = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "200px 1fr",
  fontWeight: 500,
  fontSize: "16px",
  marginBottom: "13px",
  alignItems:"center"
}));

const Payment = () => {
  const theme = useTheme();
  const { status } = theme;

  const crumbs = [
    { label: "Home", link: "/", active: false },
    { label: "information", link: "/cart", active: false },
    { label: "Shipping", link: "/cart", active: false },
    { label: "Payment", link: "/payment", active: true },
  ];
  return (
    <Box>
      <Layout>
        <Container>
          <Typography mt="75px" fontWeight={600} fontSize={'20px'}>Elite Nuts</Typography>
          <Box mt="41px">
            <BreadCrumb crumbs={crumbs}/>
          </Box>
          <Grid container spacing={6} mt="20px">
            <Grid item xs={12} md={6}>
              <Box>
                {/* Express checkout */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "500",
                    }}
                  >
                    Express checkout
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "28px",
                      mt: "32px",
                      flexWrap:"wrap",
                    }}
                  >
                    <img src={paymentImage1} alt="" />
                    <img src={paymentImage2} alt="" />
                    <img src={paymentImage3} alt="" />
                  </Box>
                  <Typography
                    sx={{
                      color: "#C3C3C3",
                      textAlign: "center",
                      mt: "32px",
                      fontSize: "25px",
                    }}
                  >
                    OR
                  </Typography>
                </Box>
                <Box>
                  <form>
                    {/* Contact */}
                    <Box>
                      <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
                        Contact
                      </Typography>
                      <InputControl
                        type="text"
                        placeholder="Email or mobile phone number"
                        sx={{ mt: "19px" }}
                      />

                      <Box sx={{ mt: "19px" }}>
                        <input type="checkbox" />
                        <span>Email me with news and offers</span>
                      </Box>
                    </Box>

                    {/* Delivery method */}
                    <Box sx={{ mt: "39px"}}>
                      <Typography sx={{ fontSize: "25px", fontWeight: "600", mb:"19px"  }}>
                        Delivery method
                      </Typography>

                      <ControlledRadioButtonsGroup />
                    </Box>

                    {/* Shipping address */}
                    <Box sx={{ mt: "39px" }}>
                      <Typography
                        sx={{ fontSize: "25px", fontWeight: "600", mb: "29px" }}
                      >
                        Shipping address
                      </Typography>
                      <Box>
                        <CustomSelect
                          options={options}
                          label="Country / Region"
                          defaultValue="United States"
                          handleSelect={(option: string) => {
                            // formik.setFieldValue("services", option);
                            console.log(option);
                          }}
                        />
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: "18px", flexWrap: "wrap" }}
                      >
                        <Box sx={{ flex: "1" }}>
                          <InputControl
                            type="text"
                            placeholder="first Name"
                            sx={{ mt: "19px" }}
                          />
                        </Box>
                        <Box sx={{ flex: "1" }}>
                          <InputControl
                            type="text"
                            placeholder="first Name"
                            sx={{ mt: "19px" }}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <InputControl
                          type="text"
                          placeholder="Company (Optional)"
                          sx={{ mt: "19px" }}
                        />
                      </Box>
                      <Box>
                        <InputControl
                          type="text"
                          placeholder="Address"
                          sx={{ mt: "19px" }}
                        />
                      </Box>
                      <Box>
                        <InputControl
                          type="text"
                          placeholder="Apartment , Suit , etc. (Optional)"
                          sx={{ mt: "19px" }}
                        />
                      </Box>
                      <Box
                        sx={{ display: "flex", gap: "18px", flexWrap: "wrap" }}
                      >
                        <Box sx={{ flex: "1" }}>
                          <InputControl
                            type="text"
                            placeholder="city"
                            sx={{ mt: "19px" }}
                          />
                        </Box>
                        <Box sx={{ flex: "1", mt: "15px" }}>
                          <CustomSelect
                            label="Slate"
                            options={options}
                            defaultValue="Alabama"
                            handleSelect={(option: string) => {
                              // formik.setFieldValue("services", option);
                              console.log(option);
                            }}
                          />
                        </Box>
                        <Box sx={{ flex: "1" }}>
                          <InputControl
                            type="text"
                            placeholder="ZIP code"
                            sx={{ mt: "19px" }}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <InputControl
                          type="text"
                          placeholder="Phone"
                          sx={{ mt: "19px" }}
                        />
                      </Box>
                    </Box>
                  </form>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "43px",
                  }}
                >
                  <Box sx={{ color: status.primary }}>
                    <BsChevronLeft style={{ marginRight: "9px" }} />
                    Return to Cart
                  </Box>
                  <MainButtonHvr>Continue to Shopping</MainButtonHvr>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sx={{display:{xs:"none", md:"block"}}}>
              <Box sx={{height:"98%"}}>
                <MainCard sx={{height:"98%", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)"}}>
                  <Stack direction="row" spacing={3}>
                    <img src={cartImage} alt="test"/>
                    <Box>
                      <Box sx={{fontSize:"14px", fontWeight:"500", display:"flex", justifyContent:"space-between", gap:"27px", flexWrap:"wrap"}}>
                        <Typography>Pistachio Rahet Ward</Typography>
                        <Typography>$ 6.99</Typography>
                      </Box>
                      <Typography sx={{color:"#C3C3C3", fontSize:"12px", mt:"8px"}}>Half Pound</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={3} mt="5px" mb="10px">
                    <InputField type="text" placeholder="Discount Code"/>
                    <Button sx={{
                      background:"#777575", color:"#fff", padding:"20px", 
                      ":hover": {
                        background: '#777575',
                        color: "#fff",
                    },
                  }}>Apply</Button>
                  </Stack>

                  <Info mt="13px">
                    <span>Subtotal</span>
                    <span style={{fontSize:"14px"}}>$ 6.99</span>
                  </Info>
                  <Info>
                    <span>Shipping</span>
                    <span style={{fontSize:"14px", color:"#777575"}}>Calculated at next step</span>

                  </Info>
                  <Info>
                    <span>Estimated taxes</span>
                    <span style={{fontSize:"14px"}}>$0.68</span>
                  </Info>
                  <Info>
                    <span>Total</span>
                    <span style={{fontSize:"14px"}}>USD$7.67</span>
                  </Info>
                </MainCard>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </Box>
  );
};

export default Payment;
