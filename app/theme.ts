"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#93C5FD",
      main: "#4B7DF4",
      dark: "#3560E8",
    },
    secondary: {
      light: "#1E3A8A",
      main: "#0B1736",
      dark: "#030712",
    },
    error: {
      light: "#FB923C",
      main: "#F97316",
      dark: "#EA580C",
    },
    background: {
      default: "#080d1a",
      paper: "#0f1729",
    },
    grey: {
      100: "#F8FAFC",
      200: "#E2E8F0",
      300: "#D7E2EE",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
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
          color: "#4B7DF4",
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
            backgroundColor: "#7DD3FC",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#7DD3FC",
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
