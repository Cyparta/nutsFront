import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { NavList } from "../../style/style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import cypartaLogo from "../../assets/logos/cyparta.png";
import {
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCreditCard,
} from "react-icons/fa";

const Footer = () => {
  const theme = useTheme();
  const { status } = theme;
  return (
    <Box sx={{ background: status.footerBg }}>
      <Container maxWidth="md">
        {/* links */}
        <Grid container sx={{ pt: "64px", pb: "99px" }}  columnSpacing={3}>
          <Grid item xs={12} sm={6} md={4} mb="24px">
            <Typography
              sx={{ color: "#000", fontSize: "20px", fontWeight: "600" }}
            >
              LINKS
            </Typography>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <NavList>search</NavList>
              <NavList>about us</NavList>
              <NavList>Contact Us</NavList>
              <NavList>Terms Of Service</NavList>
              <NavList>Refund Policy</NavList>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb="24px">
            <Typography
              sx={{ color: "#000", fontSize: "20px", fontWeight: "600" }}
            >
              PRODUCTS
            </Typography>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <NavList>Nuts & Snacks</NavList>
              <NavList>Turkish Delight</NavList>
              <NavList>Chocolate & Sweets</NavList>
              <NavList>Coffee</NavList>
              <NavList>Spices</NavList>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4} mb="24px">
            <Typography
              sx={{ color: "#000", fontSize: "20px", fontWeight: "600" }}
            >
              EXTRAS
            </Typography>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              <NavList>Privacy Policy</NavList>
              <NavList>Refund Policy</NavList>
              <NavList>Terms Of Service</NavList>
            </ul>
          </Grid>
        </Grid>
        {/* contact  */}
      </Container>
       {/* <Box
        sx={{
          textAlign: "center",
          padding: "10px",
          fontSize: "20px",
          fontWeight: "600",
          color: "#777575",
        }}
        className="line"
      >
        <span>CONTACT US</span>
      </Box>  */}
      <Divider
        sx={{
          fontSize: "20px",
          textAlign: "center",
          padding: "10px",
          fontWeight: "600",
          color: "#777575",
        }}
      >
        CONTACT US
      </Divider>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
            mt: "24px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LocationOnIcon sx={{ color: status.primary }} />
            <span>
              9007 W 151st St, <br /> Orland Park, IL 60462
            </span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <PhoneIcon sx={{ color: status.primary }} />
            <span>+1 (708) 770-4845</span>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <MailOutlineIcon sx={{ color: status.primary }} />
            <span>Contact@elitenutsysa.com</span>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: "10px", mt: "30px" }}>
          <Box
            sx={{
              background: "#fff",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            <FacebookOutlinedIcon sx={{ color: "#4267B2" }} />
          </Box>
          <Box
            sx={{
              background: "#fff",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            <InstagramIcon />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            mt: "40px",
            flexWrap: "wrap",
            justifyContent: "space-between",
            pb: "35px",
            alignItems: "center",
          }}
        >
          <Box>Copyright © 2023, Elite Nutsst</Box>
          <Box sx={{ display: "flex", gap: "6px" }}>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "5px",
                padding: "7px 7px",
              }}
            >
              <FaCcVisa style={{ fontSize: "20px" }} />
            </Box>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "5px",
                padding: "7px 7px",
              }}
            >
              <FaCcMastercard style={{ fontSize: "20px" }} />
            </Box>

            <Box
              sx={{
                background: "#fff",
                borderRadius: "5px",
                padding: "7px 7px",
              }}
            >
              <FaCcPaypal style={{ fontSize: "20px" }} />
            </Box>
            <Box
              sx={{
                background: "#fff",
                borderRadius: "5px",
                padding: "7px 7px",
              }}
            >
              <FaCreditCard style={{ fontSize: "20px" }} />
            </Box>

            {/* <FaCcVisa style={{fontSize:"20px"}}/>
            <FaCcMastercard style={{fontSize:"20px"}}/>
            <FaCreditCard style={{fontSize:"20px"}}/> */}
          </Box>
          <Box>
            Powered by <img src={cypartaLogo} alt="cyparta logo" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
