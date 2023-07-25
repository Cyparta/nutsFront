import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Container, Typography, Stack, Grid} from "@mui/material";
import { MainButton, MainButtonHvr, MainCard } from "../style/style";
import { CgMenuGridO } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import filterIcon from '../assets/filter.png'
import menuIcon from '../assets/menu.png'
import ProductCard from "../components/common/ProductCard";
import BasicPagination from "../components/common/BasicPagination";
import CustomSelect from "../components/common/CustomSelect";

// import {IoOptionsSharp} from 'react-icons/io'
// import {SlOptions} from 'react-icons/si'

const Shop = () => {
  return (
    <>
      <Layout>
        <Box></Box>
        <Container>
          <Box sx={{ mt: "39px", mb:"58px" }}>
            <MainCard sx={{padding:"40px 20px", borderRadius:"10px !important"}}>
              <Box>
                <Stack
                  direction={"row"}
                  sx={{ justifyContent: "space-between", flexWrap:"wrap", gap:"20px", alignItems:"center" }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
                      Home | Nuts & Snacks
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "23px" }}>
                    <MainButtonHvr>Featured</MainButtonHvr>
                    <Box sx={{display:"flex", gap:"7px"}}>
                      <MainButtonHvr sx={{ padding: "0 !important" }}>
                        <img src={filterIcon} alt="filter icon"/>
                      </MainButtonHvr>
                      <MainButtonHvr sx={{ padding: "0 !important" }}>
                        <img src={menuIcon} alt="meny icon"/>
                      </MainButtonHvr>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </MainCard>
          </Box>

          <Grid container spacing={3}>
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
        
        <Box sx={{mt:"91px"}}>
          <BasicPagination />
        </Box>


        <CustomSelect options={["test", "test"]} handleSelect={() => console.log("yes")}/>
        </Container>
      </Layout>
    </>
  );
};

export default Shop;
