import React from "react";
import { Box, Typography, Container, InputLabel } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout from "../components/layout/Layout";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { InputField, MainButtonHvr } from "../style/style";
import { Link } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const { status } = theme;
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Layout>
      <Box>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            mt: "66px",
            mb: "66px",
          }}
        >
          Create Account
        </Typography>

        <Container>
          <Box
            sx={{
              background: status.card,
              padding: "70px 60px",
              borderRadius: "20px",
              width: matches ? "600px" : "auto",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 19px 40px",
              margin: "0 auto",
              marginBottom:"66px"
            }}
          >
            <Box mb="20px">
              <InputLabel
                sx={{ fontWeight: "300", color: "#212121", mb: "7px" }}
              >
                Email
              </InputLabel>
              <InputField
                type="email"
                placeholder="email"
                id="email"
                label=""
                variant="outlined"
              />
            </Box>
            <Box mb="20px">
              <InputLabel
                sx={{ fontWeight: "300", color: "#212121", mb: "7px" }}
              >
                Password
              </InputLabel>
              <InputField
                type="text"
                placeholder="Password"
                id="first_name"
                label=""
                variant="outlined"
              />
            </Box>
            {/* password */}
            <Box sx={{textAlign:"center", mt:"30px", mb:"20px"}}>
              <Typography sx={{ fontSize: "14px", fontWeight: "500", }}>
                Forgot your Password ?
              </Typography>
              <Link to="/sign">
                <MainButtonHvr
                  sx={{
                    paddingY: "14px !important",
                    width: "80%",
                    my: "29px",
                  }}
                >
                  Sign In
                </MainButtonHvr>
              </Link>
              <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                No account ? Create one here
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Login;
