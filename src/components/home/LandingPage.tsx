import React from "react";
import { Container, Grid, Typography, Box, Stack } from "@mui/material";
import { DangerButton, MainButton, MainCard } from "../../style/style";
import nutsImage from "../../assets/home/nuts-1.png";
// import { useTheme } from "@emotion/react";
import useTheme from "@mui/material/styles/useTheme";
import nutsImage2 from "../../assets/home/nuts-2.png";

const LandingPage = () => {
  const theme = useTheme();
  const { status } = theme;
  // const {muted} = palette
  // const {muted} = palette
  // console.log(theme.status.danger, theme.status.muted)
  return (
    <>
      <Box sx={{mt:"34px"}}>
        <Container>
          {/* tabs  */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              <Box>
                <MainCard sx={{ padding: "30px 39px !important" }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{ padding: "50px 0", alignItems: "center" }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
                        Fresh Nuts And Fruits
                      </Typography>
                      <Typography
                        sx={{ color: status.muted, mb: "48px", mt: "20px" }}
                      >
                        At Elite Nuts , we offer a wide range of products that
                        aims to meet every person`s needs and tastes.
                      </Typography>
                      <MainButton>Shop Now</MainButton>
                    </Box>
                    <Box>
                      <img
                        src={nutsImage}
                        alt="Fresh Nuts And Fruits"
                        style={{ width: "100%" }}
                      />
                    </Box>
                  </Stack>
                </MainCard>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ position: "relative", display:{xs:"none", md:"block"} }} className="landing-slider">
                {/* <img
                  src={nutsImage2}
                  alt="shop now"
                  style={{ width: "100%" }}
                /> */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    // height: "100%",
                    display: "flex",
                    alignItems: "end",
                    padding: "80px",
                  }}
                  className="landing-box"
                >
                  <DangerButton>shop now</DangerButton>
                </Box>
              </Box>
            </Grid>

            {/* <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={nutsImage2}
                  alt="shop now"
                  style={{ width: "100%" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    height: "100%",
                    display: "flex",
                    alignItems: "end",
                    padding: "80px",
                  }}
                >
                  <DangerButton>shop now</DangerButton>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
