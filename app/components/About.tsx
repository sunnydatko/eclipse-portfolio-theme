"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const skills = [
  "LLMs",
  "AI Agents",
  "RAG",
  "Python",
  "TypeScript",
  "System Design",
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

        <Typography className="reveal" style={{ transitionDelay: "0.1s" }} variant="h3" sx={{ mb: 4 }}>
          Engineering intelligent systems at the frontier of what&apos;s possible
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
          I&apos;m an AI engineer focused on designing and building intelligent systems — from multi-agent pipelines and RAG architectures to production LLM integrations that deliver real business value. I work at the intersection of model capability and systems design, turning complex AI research into reliable, scalable infrastructure that teams can build on.
        </Typography>
      </Container>
    </Box>
  );
}
