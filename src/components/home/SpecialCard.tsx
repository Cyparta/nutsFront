import React, { useState } from "react";
import sectionImage from "../../assets/home/section-1.png";
import sectionImage2 from "../../assets/home/section-2.png";
import sectionImage3 from "../../assets/home/section-3.png";
import { Box, Grid, Typography } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import sectionHover from "../../assets/home/section-hover-1.webp";
import { useTheme } from "@mui/material/styles";
import { MainButton, MainButtonHvr } from "../../style/style";
const SpecialCard = ({top, left}: any) => {
  const theme = useTheme();
  const { status } = theme;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Box sx={{ position: "absolute", top: top, left: left }}>
      <Box
        sx={{
          width: "30px",
          height: "30px",
          padding: "6px",
          background: "red",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          cursor: "pointer",
          fontSize: "15px",
          fontWeigth: "400",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaPlus />
      </Box>
      {isHovering ? (
        <Box
          sx={{
            position: "absolute",
            background: "#FFFFFF",
            color: "#000",
            borderRadius: "10px",
            padding: "12px",
            width: "160px",
            textAlign: "center",
            left: "-68px",
            zIndex:"88"
          }}
        >
          <img src={sectionHover} alt="section hover" />
          <Typography
            sx={{ color: status.primary, fontSize: "14px", mt: "5px" }}
          >
            Dehydrated Apricot
          </Typography>
          <Typography sx={{ my: "10px", fontSize: "14px", fontWeight: "500" }}>
            $3.99 - 7.99
          </Typography>
          <MainButtonHvr
            sx={{
              padding: "5px 10px !important",
              borderRadius: "5px !important",
              fontSize: "14px !important",
            }}
          >
            Add To Cart
          </MainButtonHvr>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SpecialCard;
