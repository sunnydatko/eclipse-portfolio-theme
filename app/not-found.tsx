"use client";

import { useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import notFoundBg from "./images/not-found-bg.png";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Footer from "./components/Footer";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0px); }
`;

// Deep violet channel — shifts left during burst
const glitch1 = keyframes`
  0%, 80%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  82%  { clip-path: inset(8%  0 54% 0); transform: translate(-6px); }
  84%  { clip-path: inset(62% 0 16% 0); transform: translate(6px);  }
  86%  { clip-path: inset(28% 0 58% 0); transform: translate(-4px); }
  88%  { clip-path: inset(78% 0  6% 0); transform: translate(5px);  }
  90%  { clip-path: inset(44% 0 38% 0); transform: translate(-6px); }
`;

// Bright violet channel — interleaved slices, shifts right
const glitch2 = keyframes`
  0%, 80%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  83%  { clip-path: inset(52% 0 28% 0); transform: translate(6px);  }
  85%  { clip-path: inset(18% 0 64% 0); transform: translate(-6px); }
  87%  { clip-path: inset(72% 0 10% 0); transform: translate(4px);  }
  89%  { clip-path: inset(34% 0 48% 0); transform: translate(-5px); }
  91%  { clip-path: inset(0  0 100% 0); transform: translate(0);    }
`;

// 404 breathes like an eclipse corona
const coronaPulse = keyframes`
  0%, 100% {
    text-shadow:
      0 0 20px rgba(123,93,184,0.45),
      0 0 60px rgba(123,93,184,0.18);
  }
  50% {
    text-shadow:
      0 0 40px rgba(168,146,216,0.80),
      0 0 100px rgba(123,93,184,0.40),
      0 0 180px rgba(74,50,111,0.30);
  }
`;

// Power flicker synced to glitch window
const flicker = keyframes`
  0%, 92%, 100% { opacity: 1;    }
  93%           { opacity: 0.75; }
  94%           { opacity: 1;    }
  95%           { opacity: 0.45; }
  96%           { opacity: 1;    }
`;

// Ambient nebula glow drifts slowly over the eclipse area
const nebulaFloat = keyframes`
  0%, 100% { transform: translate(0px, 0px) scale(1);    opacity: 0.55; }
  30%       { transform: translate(-18px, 12px) scale(1.06); opacity: 0.75; }
  60%       { transform: translate(12px, -10px) scale(0.96); opacity: 0.45; }
  80%       { transform: translate(-8px, 16px) scale(1.03);  opacity: 0.65; }
`;

const anim = (delay: string) => ({
  animation: `${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay} forwards`,
  opacity: 0,
  "@media (prefers-reduced-motion: reduce)": { animation: "none", opacity: 1 },
});

export default function NotFound() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const currentRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  };

  const handleMouseLeave = () => { mouseRef.current = null; };

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!bgRef.current) { rafRef.current = requestAnimationFrame(tick); return; }

      const target = mouseRef.current
        ? { x: (mouseRef.current.x - 0.5) * 22, y: (mouseRef.current.y - 0.5) * 14 }
        : { x: 0, y: 0 };

      currentRef.current.x = lerp(currentRef.current.x, target.x, 0.04);
      currentRef.current.y = lerp(currentRef.current.y, target.y, 0.04);

      bgRef.current.style.transform =
        `scale(1.07) translate(${currentRef.current.x.toFixed(2)}px, ${currentRef.current.y.toFixed(2)}px)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#05030A", display: "flex", flexDirection: "column" }}>
      <ResponsiveMenu />

      <Box
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          flex: 1,
          minHeight: { xs: "100svh", md: "auto" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image — parallax driven by RAF loop */}
        <Box
          ref={bgRef}
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${notFoundBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: { xs: "65% center", md: "center right" },
            opacity: 0.92,
            transform: "scale(1.07)",
            willChange: "transform",
          }}
        />

        {/* Drifting nebula glow — always animating, no interaction needed */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 55% 55% at 68% 42%, rgba(90,45,160,0.30) 0%, transparent 65%)",
            animation: `${nebulaFloat} 18s ease-in-out infinite`,
            pointerEvents: "none",
            zIndex: 1,
            "@media (prefers-reduced-motion: reduce)": { animation: "none" },
          }}
        />

        {/* Left-heavy gradient — text readable, eclipse visible on right */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: {
              xs: "linear-gradient(180deg, rgba(5,3,10,0.88) 0%, rgba(5,3,10,0.65) 45%, rgba(5,3,10,0.82) 100%)",
              md: "linear-gradient(90deg, rgba(5,3,10,0.97) 0%, rgba(5,3,10,0.93) 28%, rgba(5,3,10,0.65) 52%, rgba(5,3,10,0.08) 100%)",
            },
          }}
        />

        {/* Scanlines */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* HUD crosshair — top left */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: 24, md: 36 },
            left: { xs: 24, md: 44 },
            width: 20,
            height: 20,
            zIndex: 3,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              background: "rgba(168,146,216,0.40)",
            },
            "&::before": {
              top: "50%",
              left: 0,
              right: 0,
              height: "1px",
              transform: "translateY(-50%)",
            },
            "&::after": {
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              transform: "translateX(-50%)",
            },
          }}
        />

        {/* HUD accent dot */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: 30, md: 42 },
            left: { xs: 56, md: 76 },
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(168,146,216,0.45)",
            zIndex: 3,
          }}
        />

        <Container sx={{ position: "relative", zIndex: 4, py: { xs: 3, md: 14 }, pl: { md: 8, lg: 12 } }}>
          <Box
            sx={{
              maxWidth: { xs: "100%", md: 620 },
              textAlign: { xs: "center", md: "left" },
            }}
          >

            {/* Eyebrow — • PAGE NOT FOUND —— */}
            <Box
              sx={{
                ...anim("0.2s"),
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1.5,
                mb: { xs: 1.5, md: 4 },
              }}
            >
              <Box
                component="span"
                aria-hidden
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  color: "primary.light",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: 10, md: 11 },
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                }}
              >
                Page Not Found
              </Typography>
              <Box
                component="span"
                aria-hidden
                sx={{
                  width: 40,
                  height: "1px",
                  bgcolor: "rgba(168,146,216,0.38)",
                  flexShrink: 0,
                }}
              />
            </Box>

            {/* 404 — corona pulse + purple chromatic aberration */}
            <Box sx={{ ...anim("0.35s"), mb: 0, position: "relative" }}>
              {/* Behind-text corona bloom */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: "-30px -50px",
                  background:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(74,50,111,0.45) 0%, transparent 68%)",
                  filter: "blur(16px)",
                  pointerEvents: "none",
                }}
              />
              <Typography
                component="div"
                sx={{
                  fontFamily: "var(--font-cormorant-garamond), serif",
                  fontWeight: 700,
                  fontSize: { xs: "28vw", sm: "160px", md: "260px" },
                  lineHeight: 0.88,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(168,146,216,0.65)",
                  position: "relative",
                  animation: `${coronaPulse} 4s ease-in-out infinite, ${flicker} 6s infinite 1.5s`,
                  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                  "&::before": {
                    content: '"404"',
                    position: "absolute",
                    inset: 0,
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(110,50,190,0.90)",
                    animation: `${glitch1} 6s infinite`,
                    "@media (prefers-reduced-motion: reduce)": { display: "none" },
                  },
                  "&::after": {
                    content: '"404"',
                    position: "absolute",
                    inset: 0,
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(210,170,255,0.88)",
                    animation: `${glitch2} 6s infinite 0.04s`,
                    "@media (prefers-reduced-motion: reduce)": { display: "none" },
                  },
                }}
              >
                404
              </Typography>
            </Box>

            {/* Dash decorators */}
            <Box
              sx={{
                ...anim("0.5s"),
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                mt: { xs: 1, md: 3 },
                mb: { xs: 2, md: 4 },
              }}
            >
              <Box sx={{ width: 28, height: "1px", bgcolor: "rgba(168,146,216,0.55)" }} />
              <Box sx={{ width: 6, height: "1px", bgcolor: "rgba(168,146,216,0.30)" }} />
              <Box sx={{ width: 44, height: "1px", bgcolor: "rgba(168,146,216,0.18)" }} />
            </Box>

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                ...anim("0.65s"),
                fontSize: { xs: "22px", sm: "24px", md: "36px" },
                color: "common.white",
                lineHeight: 1.3,
                mb: { xs: 1, md: 1.5 },
              }}
            >
              Looks like you&apos;ve drifted
              <br />
              into uncharted space.
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                ...anim("0.8s"),
                color: "grey.400",
                fontSize: { xs: 13, md: 15 },
                lineHeight: 1.7,
                mb: { xs: 3, md: 6 },
              }}
            >
              Let&apos;s get you back on course.
            </Typography>

            {/* CTA */}
            <Box
              sx={{
                ...anim("1.0s"),
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                href="/"
                variant="outlined"
                sx={{
                  fontSize: { xs: 11, md: 12 },
                  fontWeight: 600,
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  px: 3,
                  py: 1.4,
                  borderColor: "rgba(180,140,255,0.35)",
                  color: "common.white",
                  boxShadow: "0 0 20px rgba(180,140,255,0.08)",
                  "&:hover": {
                    borderColor: "primary.light",
                    backgroundColor: "rgba(168,146,216,0.08)",
                    boxShadow: "0 0 28px rgba(180,140,255,0.18)",
                    color: "primary.light",
                  },
                  "& .arrow": { ml: 1.5, transition: "transform 0.3s" },
                  "&:hover .arrow": { transform: "translateX(4px)" },
                }}
              >
                Return Home
                <Box component="span" className="arrow" aria-hidden>
                  {" "}→
                </Box>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
