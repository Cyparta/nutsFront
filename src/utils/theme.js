import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#90B400",
        light: "white",
      },
      danger: {
        main:"#EC0808"
      },
      dark: {
        main:"#000000"
      }
    },
    components: {
        MuiContainer: {
          styleOverrides: {
            maxWidthLg: {
              maxWidth: '1700px !important',
            },
          },
        },
      },
  });