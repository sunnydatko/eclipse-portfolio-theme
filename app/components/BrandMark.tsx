"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type BrandMarkProps = {
  starSize?: number;
  fontSize?: number;
};

export default function BrandMark({ starSize = 22, fontSize = 16 }: BrandMarkProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {/* Eclipse icon — dark disk with diamond-ring star at 1 o'clock */}
      <Box
        component="svg"
        viewBox="0 0 22 22"
        sx={{ width: starSize, height: starSize, flexShrink: 0, display: "block" }}
        aria-hidden
      >
        {/* Outer orbital ring */}
        <circle
          cx="11"
          cy="11"
          r="10.25"
          fill="none"
          stroke="rgba(168,146,216,0.28)"
          strokeWidth="0.5"
        />
        {/* Eclipse dark disk */}
        <circle
          cx="11"
          cy="11"
          r="8.5"
          fill="#07050F"
          stroke="rgba(123,93,184,0.42)"
          strokeWidth="0.75"
        />
        {/* Corona glow at 1 o'clock (30° from top, on circle edge) */}
        <circle cx="15.25" cy="3.64" r="2" fill="rgba(255,235,200,0.45)" />
        {/* Star core */}
        <circle cx="15.25" cy="3.64" r="0.85" fill="white" />
      </Box>

      <Typography
        component="span"
        sx={{
          fontFamily: "var(--font-cormorant-garamond), serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "common.white",
          lineHeight: 1,
        }}
      >
        Alex Parker
      </Typography>
    </Box>
  );
}
