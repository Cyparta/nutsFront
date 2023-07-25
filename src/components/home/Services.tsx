import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { FruitCard } from "../../style/style";
import servicesImage from "../../assets/home/services-1.png";
import servicesImage2 from "../../assets/home/services-2.png";
import servicesImage3 from "../../assets/home/services-3.png";
import servicesImage4 from "../../assets/home/services-4.png";

const Services = () => {
  return (
    <Container sx={{ my: "70px" }}>
      <Box>
        {/* tabs */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <FruitCard>
                <img src={servicesImage} alt="NUTS & SNACKS" />
                <Typography sx={{ color: "#fff" }}>NUTS & SNACKS</Typography>
              </FruitCard>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <FruitCard
                sx={{
                  background:
                    "linear-gradient(222deg, rgba(248, 120, 3, 0.76) 0%, #E1D800 100%) !important",
                }}
              >
                <img src={servicesImage2} alt="COFFEE" />
                <Typography sx={{ color: "#fff" }}>COFFEE</Typography>
              </FruitCard>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <FruitCard
                sx={{
                  background:
                    "linear-gradient(222deg, rgba(205, 0, 0, 0.76) 0%, rgba(222, 217, 0, 0.54) 100%) !important",
                }}
              >
                
                <img src={servicesImage3} alt="CHOCOLATES & SWEETS" />
                <Typography sx={{ color: "#fff" }}>
                  CHOCOLATES & <br /> SWEETS
                </Typography>
              </FruitCard>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: "center" }}>
              <FruitCard
                sx={{
                  background:
                    "linear-gradient(222deg, rgba(205, 0, 86, 0.76) 0%, rgba(248, 120, 3, 0.76) 100%) !important",
                }}
              >
                <img src={servicesImage4} alt="TURKISH DELIGHTS" />
                <Typography sx={{ color: "#fff" }}>TURKISH DELIGHTS</Typography>
              </FruitCard>
            </Box>
          </Grid>
        </Grid>
        {/* test slider */}
      </Box>
    </Container>
  );
};

export default Services;
