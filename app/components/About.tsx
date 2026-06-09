"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const skills = [
  "Python",
  "HTML & CSS",
  "Git",
  "GitHub",
  "Linux",
  "Flask",
  "ITIL®",
];

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          maxWidth: "860px !important",
        }}
      >
        <Typography
          component="span"
          className="reveal"
          sx={{
            display: "block",
            color: "primary.light",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: { xs: 12.5, md: 14 },
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          + About Me
        </Typography>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.1s" }}
          variant="h3"
          sx={{ mb: 4 }}
        >
          Detail-oriented, endlessly curious, and always building.
        </Typography>

        <Box
          className="reveal"
          style={{ transitionDelay: "0.2s" }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.25,
            mb: 4,
            justifyContent: "center",
          }}
        >
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Box>

        <Typography
          className="reveal"
          style={{ transitionDelay: "0.3s" }}
          sx={{
            color: "grey.300",
            fontSize: { xs: "17px", md: "21px" },
            lineHeight: 1.7,
            mb: 0,
          }}
        >
          I spent over a decade in the benefits technology space — navigating complex implementations, building client configurations from the ground up, and earning a reputation for never settling for surface-level solutions. In 2022, I made my technical curiosity official, enrolling in Western Governors University&apos;s Computer Science program and graduating in April 2026, adding rigorous CS fundamentals to my decade of real-world problem-solving.
        </Typography>
      </Container>
    </Box>
  );
}
