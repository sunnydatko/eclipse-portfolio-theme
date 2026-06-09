"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      // Lavender-purple — matches the fairy's iridescent wings
      light: "#BBA8E2",
      main: "#8257B5",
      dark: "#4D2E6B",
    },
    secondary: {
      // Warm amber — matches the candlelight in the forest scene
      light: "#E8C48C",
      main: "#C8905E",
      dark: "#8C5E34",
    },
    error: {
      light: "#FFD29A",
      main: "#FFB454",
      dark: "#C97A17",
    },
    info: {
      // Cool blue-teal — echoes the iridescent wing colour in the hero
      light: "#93C5E8",
      main: "#5A9FD4",
      dark: "#3A7AB0",
    },
    background: {
      // Warm dark — deep forest night, slight purple undertone
      default: "#080510",
      paper: "#100C1C",
    },
    grey: {
      // Warm grey scale — purple-tinted, inspired by forest shadows
      100: "#F5F2F9",
      200: "#E0D8EC",
      300: "#C0B4D0",
      400: "#9488A8",
      500: "#6E6480",
      600: "#504863",
      700: "#362F48",
      800: "#1E1A2C",
      900: "#0C0A14",
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
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: "rgba(90,159,212,0.45)",
          color: "rgba(147,197,232,0.80)",
          transition: "border-color 0.25s, color 0.25s, background-color 0.25s",
          "&:hover": {
            borderColor: "rgba(90,159,212,0.65)",
            color: "#93C5E8",
            backgroundColor: "rgba(90,159,212,0.06)",
          },
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#BBA8E2",
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
            backgroundColor: "#D4C4F0",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#D4C4F0",
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
