"use client";

import { useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import skyBg from "../images/hero-bg.png";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); filter: blur(6px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

const NEUTRAL =
  "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 0%, rgba(8,13,26,0.4) 100%)";


export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseOverlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mouseOverlayRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseOverlayRef.current.style.background = `radial-gradient(ellipse 70% 80% at ${x}% ${y}%, transparent 0%, rgba(8,13,26,0.4) 100%)`;
  };

  const handleMouseLeave = () => {
    if (mouseOverlayRef.current) mouseOverlayRef.current.style.background = NEUTRAL;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const progress = Math.min(window.scrollY / sectionRef.current.offsetHeight, 1);
      bgRef.current.style.transform = `scale(${1 + progress * 0.08})`;
      bgRef.current.style.opacity = String((1 - progress * 0.4) * 0.9);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: { xs: "100svh", md: "100vh" },
        overflow: "hidden",
        backgroundColor: "#080d1a",
      }}
    >
      {/* Background photo */}
      <Box
        ref={bgRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${skyBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "center" },
          willChange: "transform, opacity",
          transformOrigin: "center center",
          opacity: 0.9,
        }}
      />

      {/* Dark gradient — left-heavy so text stays legible, eclipse visible on right */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(180deg, rgba(8,13,26,0.80) 0%, rgba(8,13,26,0.60) 50%, rgba(8,13,26,0.85) 100%)",
            md: "linear-gradient(90deg, rgba(8,13,26,0.92) 0%, rgba(8,13,26,0.80) 30%, rgba(8,13,26,0.35) 60%, rgba(8,13,26,0.05) 100%)",
          },
        }}
      />

      {/* Cursor-tracked radial overlay — desktop only */}
      <Box
        ref={mouseOverlayRef}
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background: NEUTRAL,
          transition: "background 0.18s ease",
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2, py: { xs: 12, md: 10 } }}>
        <Box sx={{ maxWidth: { xs: "100%", md: 560 } }}>
          {/* Eyebrow */}
          <Typography
            sx={{
              ...anim("0.4s"),
              color: "primary.light",
              fontWeight: 600,
              fontSize: { xs: 11, md: 12 },
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            Hello, I&apos;m Alex Parker
          </Typography>

          {/* Accent rule — between eyebrow and headline */}
          <Box
            sx={{
              ...anim("0.55s"),
              width: 48,
              height: 2,
              borderRadius: 2,
              bgcolor: "secondary.main",
              mb: { xs: 3, md: 4 },
            }}
          />

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              ...anim("0.7s"),
              fontSize: { xs: "40px", sm: "56px", md: "72px" },
              lineHeight: 1.05,
              color: "common.white",
              mb: { xs: 3, md: 4 },
            }}
          >
            Building intelligent
            <br />
            systems that{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              matter.
            </Box>
          </Typography>

          {/* Intro */}
          <Typography
            sx={{
              ...anim("1.0s"),
              color: "grey.300",
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.65,
              maxWidth: 460,
              mb: { xs: 4, md: 5 },
            }}
          >
            AI engineer and builder focused on creating intelligent systems that
            learn, adapt, and deliver real impact.
          </Typography>

          {/* CTAs */}
          <Box
            sx={{
              ...anim("1.25s"),
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 3, md: 4 },
            }}
          >
            <Button
              variant="outlined"
              href="#experience"
              sx={{
                fontSize: { xs: 12, md: 13 },
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                px: 3,
                py: 1.4,
                borderColor: "rgba(255,255,255,0.55)",
                color: "common.white",
                "&:hover": {
                  borderColor: "common.white",
                  backgroundColor: "rgba(255,255,255,0.06)",
                },
                "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                "&:hover .arrow": { transform: "translateX(4px)" },
              }}
            >
              View My Work
              <Box component="span" className="arrow" aria-hidden>
                {" "}→
              </Box>
            </Button>

            <Box
              component="a"
              href="#about"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "grey.200",
                fontSize: { xs: 12, md: 13 },
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                borderBottom: "1px solid",
                borderColor: "rgba(200,184,237,0.45)",
                pb: "3px",
                transition: "color 0.3s, border-color 0.3s",
                textDecoration: "none",
                "&:hover": {
                  color: "common.white",
                  borderColor: "grey.300",
                },
              }}
            >
              About Me
            </Box>
          </Box>
        </Box>
      </Container>

    </Box>
  );
}
