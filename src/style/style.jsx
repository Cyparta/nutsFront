import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";

// Main Button : Green Button with red hover
export const MainButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "12px",
    padding: "10px 50px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "capitalize",
    ":hover": {
        background: theme.status.danger,
        color: "rgba(255, 255, 255, 1)",
    },
    transition:"all 0.5s"
}));

// mainButton : Green Button with dark hover
export const MainButtonHvr = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "12px",
    padding: "10px 50px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "capitalize",
    ":hover": {
        background: theme.status.dark,
        color: "rgba(255, 255, 255, 1)",
    },
    transition:"all 0.8s"
}));

// Danger Button : red Button
export const DangerButton = styled(Button)(({ theme }) => ({
    background: theme.status.danger,
    color: "rgba(255, 255, 255, 1)",
    borderRadius: "12px",
    padding: "10px 50px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "capitalize",
    ":hover": {
        background: theme.palette.primary.main,
        color: "rgba(255, 255, 255, 1)",
    },
}));

// Main Card 
export const MainCard = styled(Box)({
    background: "#F5F5F5",
    borderRadius: "20px",
    padding: "23px",
});

// special Card
export const FruitCard = styled(Box)(({theme}) => ({
    background: "linear-gradient(222deg, rgba(205, 148, 0, 0.76) 0%, #90B400 100%)",
    padding:"32px",
    borderRadius:"10px",
    height:"150px"
}))

// list item 
export const NavList = styled(Box)(({theme}) => ({
    color:theme.status.primary,
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "10px",
    padding:"0px",
    textTransform:"capitalize"
}))
