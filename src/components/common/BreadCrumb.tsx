import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import arrow from "../../assets/home/arrowRight.svg";
import React from "react";
import {BiChevronRight} from 'react-icons/bi'
const BreadCrumb = ({ crumbs = [] }: any) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        {crumbs?.map((crumb:any, index:any) => (
          <React.Fragment key={index}>
            <Typography  component="p">
              <Link
                to={crumb.link}
                style={{
                  color: "#212121",
                  opacity: crumb.active && "0.5",
                  textDecoration:"none"
                }}
              >
                {crumb.label}
              </Link>
            </Typography>
            <Typography sx={{padding:"0 10px", mt:"6px"}} component={'p'}>
                {!crumb.active && <BiChevronRight style={{fontSize:"20px"}}/> }
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default BreadCrumb;