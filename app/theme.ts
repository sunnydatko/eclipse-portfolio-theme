"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#A892D8",
      main: "#7B5DB8",
      dark: "#4A326F",
    },
    secondary: {
      light: "#E3C8A0",
      main: "#C79A63",
      dark: "#8A6338",
    },
    error: {
      light: "#F2A5B5",
      main: "#D96A83",
      dark: "#A3455D",
    },
    background: {
      default: "#050507",
      paper: "#0B0913",
    },
    grey: {
      100: "#F5F3F9",
      200: "#DDD8E8",
      300: "#B8B0C9",
      400: "#8F879F",
      500: "#6A6378",
      600: "#4D4759",
      700: "#342F3E",
      800: "#1C1A24",
      900: "#09080D",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-cormorant-garamond), serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-cormorant-garamond), serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-cormorant-garamond), serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-cormorant-garamond), serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-cormorant-garamond), serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-cormorant-garamond), serif",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained", disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#A892D8",
          transition: "color 0.3s",
          position: "relative",
          paddingBottom: "3px",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            borderRadius: "4px",
            backgroundColor: "#C8B8ED",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#C8B8ED",
            "&::before": {
              transformOrigin: "left",
              transform: "scaleX(1)",
            },
          },
        },
      },
    },
  },
});

export default theme;
