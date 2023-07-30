import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
import productCartImage from "../../assets/product/product-cart.png";
import { MainButtonHvr } from "../../style/style";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import {AiOutlineClose} from 'react-icons/ai';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const Info = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "200px 1fr",
    fontWeight: 500,
    fontSize: "20px",
    marginBottom: "24px",
  }));

export default function DialogCart({ open, handleClose }: any) {
    const theme = useTheme();
  const { status } = theme;
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{'& .MuiPaper-elevation': {
            maxWidth:"900px !important",
            padding:"60px 40px",
            background:"#F0EEEE"
        }}}
      >
        <Grid container spacing={2} sx={{position:"relative"}}>
          <Grid item xs={12} md={4}>
            <Box>
              <img
                src={productCartImage}
                alt="productCartImage"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Typography
                sx={{ fontWeight: "500", fontSize: "20px", mb: "24px" }}
              >
                Smoked Mixed Nuts Without Seeds And Peanuts
              </Typography>
              <Info>
                <span>PRICE:</span>
                $7.99
              </Info>
              <Info>
                <span>BRAND:</span>
                Elite Nuts
              </Info>
              <Info>
                <span>TYPE:</span>
                Nuts & Seeds
              </Info>
              <Info>
                <span>AVAILABILITY:</span>
                <span style={{ color: status.primary }}>Many In Stock</span>
              </Info>
              <Info>
                <span>WEIGHT:</span>
                <Box sx={{ display: "flex", gap: "17px" }}>
                  <Box
                    sx={{
                      border: "1px solid #90B400",
                      padding: "12px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    HALF POUND
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #777575",
                      padding: "12px",
                      borderRadius: "10px",
                      fontSize: "14px",
                    }}
                  >
                    ONE POUND
                  </Box>
                </Box>
              </Info>
              {/* QUANTITY: */}
              <Info>
                <span>QUANTITY:</span>
                <Box
                  sx={{ display: "flex", gap: "12px", color: status.primary }}
                >
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </Box>
              </Info>
              {/* addToCart */}
              <MainButtonHvr>Add To Cart</MainButtonHvr>

              <Box sx={{position:"absolute", top:"0", right:"0", cursor:"pointer"}} onClick={() => handleClose()}>
                <AiOutlineClose style={{color:status.primary, fontSize:"20px"}}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
