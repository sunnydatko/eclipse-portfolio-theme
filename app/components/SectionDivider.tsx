import Box from "@mui/material/Box";

export default function SectionDivider() {
  return (
    <Box
      aria-hidden
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 2, md: 3 },
        px: { xs: 3, md: 8 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06))",
        }}
      />
      <Box
        component="span"
        sx={{
          color: "secondary.light",
          fontSize: { xs: "10px", md: "12px" },
          opacity: 0.45,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        ✦
      </Box>
      <Box
        sx={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)",
        }}
      />
    </Box>
  );
}
