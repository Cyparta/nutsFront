import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const NewSletter = () => {
  const theme = useTheme();
  const { status } = theme;
  return (
    <Box
      sx={{
        background: status.primary,
        color: "#fff",

        mt: "30px",
      }}
    >
      {/* <Container sx={{padding:"20px 0"}}>
        <Grid container alignItems={"center"} spacing={3} sx={{textAlign:{xs:"center", sm:"left"}}}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
              SIGN UP TO NEWSLETTER
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent:"center" }}>
              <input
                type="text"
                placeholder="Email Address"
                style={{
                  width: "80%",
                  background: "#fff",
                  border: "1px solid #90B400",
                  borderRadius: "10px",
                  padding: "19px 11px",
                  color: "#C3C3C3",
                }}
              />
              <Button
                variant="text"
                sx={{
                  background: "#fff",
                  color: "#90B400",
                  padding: "19px 11px",
                  borderRadius: "10px",
                  fontSize: "18px",
                }}
              >
                Subcribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container> */}
      <Container>
        <Box
          sx={{
            display: {xs:"block", md:"flex"},
            justifyContent: "space-between",
            alignItems:"center",
            gap:"20px",
            padding: "40px 0",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "25px", fontWeight: "500", mb:{xs:"20px", md:"0"} }}>
              SIGN UP TO NEWSLETTER
            </Typography>
          </Box>
          <Box sx={{flex:"1"}}>
            <Box sx={{ display: "flex", gap:"16px", justifyContent:{xs:"flex-start", md:"flex-end"}, flexWrap:"wrap" }}>
              <input
                type="text"
                placeholder="Email Address"
                style={{
                  width: "70%",
                  background: "#fff",
                  border: "1px solid #90B400",
                  borderRadius: "10px",
                  padding: "19px 11px",
                  color: "#C3C3C3",
                }}
              />
              <Button
                variant="text"
                sx={{
                  background: "#fff",
                  color: "#90B400",
                  padding: "19px 11px",
                  borderRadius: "10px",
                  fontSize: "18px",
                  "&:hover" : {
                    background:"#fff",
                    color:"#90B400"
                  }
                }}
              >
                Subcribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewSletter;
