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
      {/* Pixie wing mark — abstract double fairy wing with center sparkle */}
      <Box
        component="svg"
        viewBox="0 0 22 22"
        sx={{ width: starSize, height: starSize, flexShrink: 0, display: "block" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="bmWingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4C4F0" />
            <stop offset="100%" stopColor="#7B5DB8" />
          </linearGradient>
          <radialGradient id="bmGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(200,184,237,0.28)" />
            <stop offset="100%" stopColor="rgba(123,93,184,0)" />
          </radialGradient>
        </defs>

        {/* Soft glow halo */}
        <ellipse cx="11" cy="10" rx="9" ry="6.5" fill="url(#bmGlow)" />

        {/* Left upper wing */}
        <path
          d="M11 10.5 C11 7, 5 3.5, 2 6 C2 9.5, 7.5 11, 11 10.5 Z"
          fill="url(#bmWingGrad)"
          opacity="0.9"
        />

        {/* Right upper wing */}
        <path
          d="M11 10.5 C11 7, 17 3.5, 20 6 C20 9.5, 14.5 11, 11 10.5 Z"
          fill="url(#bmWingGrad)"
          opacity="0.9"
        />

        {/* Left lower wing */}
        <path
          d="M11 12 C11 14.5, 6 16, 4.5 14.5 C5 12.5, 8 12, 11 12 Z"
          fill="url(#bmWingGrad)"
          opacity="0.48"
        />

        {/* Right lower wing */}
        <path
          d="M11 12 C11 14.5, 16 16, 17.5 14.5 C17 12.5, 14 12, 11 12 Z"
          fill="url(#bmWingGrad)"
          opacity="0.48"
        />

        {/* Center 4-pointed sparkle */}
        <path
          d="M11 8.8 L11.55 10.45 L13.2 11 L11.55 11.55 L11 13.2 L10.45 11.55 L8.8 11 L10.45 10.45 Z"
          fill="white"
          opacity="0.95"
        />

        {/* Wing-tip sparkle dots */}
        <circle cx="2.5" cy="5.5" r="0.6" fill="rgba(255,255,255,0.75)" />
        <circle cx="19.5" cy="5.5" r="0.6" fill="rgba(255,255,255,0.75)" />
        <circle cx="4.5" cy="15" r="0.38" fill="rgba(255,255,255,0.4)" />
        <circle cx="17.5" cy="15" r="0.38" fill="rgba(255,255,255,0.4)" />
      </Box>

      <Typography
        component="span"
        sx={{
          fontFamily: "var(--font-cormorant-garamond), serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "common.white",
          lineHeight: 1,
        }}
      >
        Genivere
      </Typography>
    </Box>
  );
}
