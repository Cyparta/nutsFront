import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  TextField,
} from "@mui/material";
import {
  MainButton,
  MainButtonHvr,
  MainCard,
  SecondaryCard,
} from "../style/style";
import { CgMenuGridO } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import filterIcon from "../assets/filter.png";
import menuIcon from "../assets/menu.png";
import ProductCard from "../components/common/ProductCard";
import BasicPagination from "../components/common/BasicPagination";
import CustomSelect from "../components/common/CustomSelect";

import nutsImage from "../../src/assets/shop/shop-1.png";
import { useTheme } from "@mui/material/styles";
import ProductCardMenu from "../components/common/ProductCardMenu";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MainSelect from "../components/common/MainSelect";
import BreadCrumb from "../components/common/BreadCrumb";

// import {IoOptionsSharp} from 'react-icons/io';
// import {SlOptions} from 'react-icons/si';

const options = [
  "Egypt",
  "Angola",
  "UnitedState",
  "France",
  "England",
  "Turkey",
];

const Shop = () => {
  const theme = useTheme();
  const { status } = theme;

  const [isGrid, setIsGrid] = useState(true);

  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Layout>
        <Box></Box>
        <Container>
          <Box sx={{ mt: "39px", mb: "58px" }}>
            <SecondaryCard sx={{ padding: "40px 20px" }}>
              <Box>
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
                      Home | Nuts & Snacks
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "23px", flexWrap:{xs:"wrap", sm:"nowrap"} }}>
                    <FormControl fullWidth={false}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        sx={{
                          background: status.primary,
                          "& fieldset": {
                            color: "#fff !important",
                          },
                          "& .MuiSelect-icon": {
                            color: "#fff",
                          },
                          "& .MuiSelect-select": {
                            color: "#fff",
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem disabled value={""}>
                          featured
                        </MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ display: "flex", gap: "7px" }}>
                      <MainButtonHvr sx={{ padding: "0px !important" }} onClick={() => setIsGrid(false)}>
                        <img
                          src={filterIcon}
                          alt="filter icon"
                          style={{ width: "20%" }}
                        />
                      </MainButtonHvr>
                      <MainButtonHvr sx={{ padding: "0px !important" }} onClick={() => setIsGrid(true)}>
                        <img
                          src={menuIcon}
                          alt="meny icon"
                          style={{ width: "20%" }}
                        />
                      </MainButtonHvr>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </SecondaryCard>
          </Box>

          {isGrid ? (
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
              <Grid item xs={12} sm={6} md={3}>
                <ProductCard />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <ProductCardMenu />
              </Grid>
            </Grid>
          )}

          <Box sx={{ mt: "91px" }}>
            <BasicPagination />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Shop;
