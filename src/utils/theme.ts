import { Breakpoints, createTheme, ThemeOptions } from "@mui/material/styles";
// import library from "@mui/material/styles"
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      dark: string;
      muted: string;
      primary: string;
      footerBg:string,
      card: string
    },
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      dark: string;
      muted: string;
      primary: string;
      footerBg:string,
      card:string,
    },breakpoints?:{ values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    }
    down?: (key: keyof Breakpoints['values']) => string;
    up?: (key: keyof Breakpoints['values']) => string;
    between?: (start: keyof Breakpoints['values'], end: keyof Breakpoints['values']) => string;
   }
  } 
  
}

export const theme: ThemeOptions = createTheme({
  status: {
    danger: "#EC0808",
    dark: "#000000",
    muted: "#777575",
    primary: "#90B400",
    footerBg:"#F3F3F0",
    card:"#F3F3F0",
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
          maxWidth: "95% !important",
        },
      },
    },
  },
  breakpoints:{
    values:{
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
   
  }
});



