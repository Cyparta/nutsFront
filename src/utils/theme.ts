import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      dark: string;
      muted: string;
      primary: string;
      footerBg:string,
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      dark: string;
      muted: string;
      primary: string;
      footerBg:string,
    };
  }
}

export const theme: ThemeOptions = createTheme({
  status: {
    danger: "#EC0808",
    dark: "#000000",
    muted: "#777575",
    primary: "#90B400",
    footerBg:"#F3F3F0",
  },
  palette: {
    primary: {
      main: "#90B400",
      light: "white",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1400px !important",
        },
      },
    },
  },
});
