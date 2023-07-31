import React from "react";
import { Box, Typography, Container, InputLabel } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Layout from "../components/layout/Layout";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { InputField, MainButtonHvr } from "../style/style";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RequestPostLogin, RequestPostRegister } from "../reducer/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";


const Sign = () => {
  const theme = useTheme();
  const { status } = theme;
  const matches = useMediaQuery("(min-width:700px)");

  const dispatch = useDispatch<AppDispatch>();
  const { errorMsg, loading, user } = useSelector(
    (state: RootState) => state.user
  );

  const navigate = useNavigate()

  const phoneRegExp =
  /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;

  //---- useFormik
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      password: "",
      password2: "",
      email: "",
      username: "", phone: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter a vaild email"),
      phone: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ),
      password: Yup.string()
        .required("Please enter password")
        .min(
          8,
          "Password is too short - should be 8 chars minimum. and at least one letter"
        )
        .matches(/[a-zA-Z]/, "Password must contain at least one letter "),
      password2: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      console.log(values)
        const { email, password, password2, username, phone, first_name, last_name } = values;
        dispatch(
          RequestPostRegister({ email, password, password2, username, phone })
        ).then((result) => {
          if (result.type === "postRegister/fulfilled") {
            setTimeout(() => {
              navigate("/login");
            }, 500);
          }
        });
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
              marginBottom: "66px",
            }}
          >
            <form onSubmit={formik.handleSubmit}>

              <Box mb="20px">
                <InputLabel
                  sx={{ fontWeight: "300", color: "#212121", mb: "7px" }}
                >
                  First Name
                </InputLabel>
                <InputField
                  type="text"
                  placeholder="First Name"
                  id="first_name"
                  label=""
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.first_name && formik.errors.first_name ? (
                    <Typography
                      component="span"
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {formik.errors.first_name}
                    </Typography>
                  ) : null}
                  {errorMsg?.first_name && (
                    <Typography
                      component="span"
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {errorMsg?.first_name[0]}
                    </Typography>
                  )}
              </Box>
              <Box mb="20px">
                <InputLabel
                  sx={{ fontWeight: "300", color: "#212121", mb: "7px" }}
                >
                  Last Name
                </InputLabel>
                <InputField
                  type="text"
                  placeholder="last name"
                  id="last_name"
                  label=""
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                    <Typography
                      component="span"
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {formik.errors.last_name}
                    </Typography>
                  ) : null}
                {errorMsg?.last_name && (
                    <Typography
                      component="span"
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {errorMsg?.last_name[0]}
                    </Typography>
                )}
              </Box>
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
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {formik.errors.email}
                    </Typography>
                  ) : null}
                {errorMsg?.email && (
                    <Typography
                      component="span"
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {errorMsg?.email[0]}
                    </Typography>
                )}
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
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {formik.errors.password}
                    </Typography>
                  ) : null}
                {errorMsg?.password && (
                    <Typography
                      component="span"
                      sx={{ color: "red", mt: "1px", fontSize: "14px" }}
                    >
                      {errorMsg?.password[0]}
                    </Typography>
                )}
              </Box>

              <Box sx={{ textAlign: "center", mt: "30px", mb: "15px" }}>
                  <MainButtonHvr
                    sx={{
                      paddingY: "14px !important",
                      width: "80%",
                      my: "29px",
                    }}
                    type="submit"
                  >
                    Register
                  </MainButtonHvr>
              </Box>
            </form>

            <Link to="/shop" style={{color:"#000", textDecoration:"none"}}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <BiChevronLeft />
                Return To Store
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default Sign;
