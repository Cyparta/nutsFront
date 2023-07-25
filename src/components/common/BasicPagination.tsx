import { Box } from "@mui/material";
import React from "react";
import Pagination from "@mui/material/Pagination";
const BasicPagination = ({allProducts, data}: any) => {
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: "50px",
        "& .MuiPaginationItem-root": { color: "red" },
        "& .Mui-selected": {
          borderBottom: "1px solid #000",
          background: "#000 !important"
        },
        "& .MuiPaginationItem-outlined": {
          color: "#fff",
          border: "none",
          borderRadius:"5px",
          background:"#90B400"
        },
        "& .MuiPaginationItem-outlined:hover": {
            background:"#000"
          },
        "& .MuiPaginationItem-previousNext": {
          background: "#90B400",
          color: "#fff",
          borderRadius: "8px",
        },
        "& .MuiPaginationItem-ellipsis": {
            background: "transparent",
            color:"#000"
        },
        "& .MuiPaginationItem-ellipsis:hover": {
            background: "transparent",
        },
      }}
    >
      <Pagination
        count={12}
        variant="outlined"
        onChange={(e, page) => {
          console.log('test')
        }}
      />
    </Box>
  );
};

export default BasicPagination;