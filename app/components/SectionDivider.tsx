"use client";

import { useId } from "react";
import Box from "@mui/material/Box";

export default function SectionDivider() {
  const uid = useId().replace(/:/g, "");
  const gradId = `corona-${uid}`;

  const rays = Array.from({ length: 8 }, (_, i) => {
    const a = (i * 45 - 22.5) * (Math.PI / 180);
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    const isMain = i % 2 === 0;
    return { cos, sin, isMain };
  });

  return (
    <Box
      aria-hidden
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 2, md: 3 },
        px: { xs: 3, md: 10 },
      }}
    >
      {/* Left arm */}
      <Box sx={{ flex: 1, position: "relative", height: 20, mr: 2 }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(to right, transparent 0%, rgba(123,93,184,0.12) 55%, rgba(199,154,99,0.38) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          {([4, 6, 10] as const).map((h, i) => (
            <Box
              key={i}
              sx={{
                width: "1px",
                height: `${h}px`,
                borderRadius: "1px",
                bgcolor: `rgba(199,154,99,${0.22 + i * 0.16})`,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Eclipse centerpiece */}
      <Box sx={{ flexShrink: 0 }}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <defs>
            <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E3C8A0" stopOpacity="1" />
              <stop offset="50%" stopColor="#C79A63" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7B5DB8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Breathing outer glow disc */}
          <circle cx="26" cy="26" r="24" fill={`url(#${gradId})`} opacity="0.1">
            <animate
              attributeName="opacity"
              values="0.06;0.18;0.06"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Slowly rotating dashed ring */}
          <circle
            cx="26"
            cy="26"
            r="21"
            fill="none"
            stroke="rgba(123,93,184,0.2)"
            strokeWidth="0.5"
            strokeDasharray="2 9"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 26 26"
              to="360 26 26"
              dur="40s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Fixed mid ring */}
          <circle
            cx="26"
            cy="26"
            r="18"
            fill="none"
            stroke="rgba(199,154,99,0.2)"
            strokeWidth="0.75"
          />

          {/* Glowing corona ring */}
          <circle
            cx="26"
            cy="26"
            r="14"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="2.5"
          >
            <animate
              attributeName="opacity"
              values="0.65;1;0.65"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Corona rays */}
          {rays.map(({ cos, sin, isMain }, i) => (
            <line
              key={i}
              x1={26 + cos * 15.5}
              y1={26 + sin * 15.5}
              x2={26 + cos * (isMain ? 21 : 19)}
              y2={26 + sin * (isMain ? 21 : 19)}
              stroke={
                isMain
                  ? "rgba(199,154,99,0.55)"
                  : "rgba(168,146,216,0.38)"
              }
              strokeWidth={isMain ? "1.5" : "0.75"}
              strokeLinecap="round"
            />
          ))}

          {/* Moon disc */}
          <circle cx="26" cy="26" r="12" fill="#06080f" />

          {/* Warm inner rim */}
          <circle
            cx="26"
            cy="26"
            r="13"
            fill="none"
            stroke="rgba(227,200,160,0.6)"
            strokeWidth="0.75"
          />
        </svg>
      </Box>

      {/* Right arm */}
      <Box sx={{ flex: 1, position: "relative", height: 20, ml: 2 }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(to left, transparent 0%, rgba(123,93,184,0.12) 55%, rgba(199,154,99,0.38) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "7px",
          }}
        >
          {([10, 6, 4] as const).map((h, i) => (
            <Box
              key={i}
              sx={{
                width: "1px",
                height: `${h}px`,
                borderRadius: "1px",
                bgcolor: `rgba(199,154,99,${0.54 - i * 0.16})`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
