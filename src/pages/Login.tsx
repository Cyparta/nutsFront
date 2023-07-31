import React from "react";
import { Box, Typography, Container, InputLabel } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Layout from "../components/layout/Layout";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { InputField, MainButtonHvr } from "../style/style";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { RequestPostLogin } from "../reducer/User";
const Login = () => {
  const theme = useTheme();
  const { status } = theme;
  const matches = useMediaQuery("(min-width:700px)");
  const dispatch = useDispatch<AppDispatch>();
  const { errorMsg, loading, user } = useSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate()
  //---- useFormik
  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Please enter a vaild email"),
    }),
    onSubmit: (values) => {
        const { email, password } = values;
        dispatch(RequestPostLogin({ email, password })).then((req) => {{
            if (req.type == "RequestPostLogin/fulfilled") {
              localStorage.setItem("token", req.payload.data.token)
                setTimeout(() => {
                  navigate("/");
                    // router.push("/blog");
                }, 200);
                
            }
        }})
    },
});
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
          Login
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
              marginBottom: "66px",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.email}
                  </Typography>
                ) : null}
              </Box>
              <Box mb="20px">
                <InputLabel
                  sx={{ fontWeight: "300", color: "#212121", mb: "7px" }}
                >
                  Password
                </InputLabel>
                <InputField
                  type="password"
                  placeholder="Password"
                  id="password"
                  label=""
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Typography
                    component="span"
                    sx={{
                      color: "red",
                      mt: "",
                      fontSize: "14px",
                      padding: "0px 10px",
                    }}
                  >
                    {formik.errors.password}
                  </Typography>
                ) : null}
                {errorMsg !== "" ? <Box sx={{ color: "red", mt: "", fontSize: "14px", padding: "0px 10px" }}>{errorMsg}</Box> : undefined}
              </Box>
              {/* password */}
              <Box sx={{ textAlign: "center", mt: "30px", mb: "20px" }}>
                <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                  Forgot your Password ?
                </Typography>

                  <MainButtonHvr
                    sx={{
                      paddingY: "14px !important",
                      width: "80%",
                      my: "29px",
                    }}
                    type="submit"
                  >
                    Sign In
                  </MainButtonHvr>

                <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                  No account ? Create one here
                </Typography>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Login;
