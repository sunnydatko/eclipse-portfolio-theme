"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { testimonials } from "../helpers/data";
import testimonialAvatar from "../images/testimonial-avatar.png";

const imageMap: Record<string, StaticImageData> = {
  "testimonial-avatar": testimonialAvatar,
};

export default function Testimonial() {
  const { quote, name, title, image } = testimonials[0];
  const avatarSrc = image ? imageMap[image] : undefined;

  return (
    <Box
      component="section"
      id="testimonial"
      sx={{
        py: { xs: 10, md: 14 },
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "140%", md: "1000px" },
          height: { xs: "140%", md: "700px" },
          background:
            "radial-gradient(circle, rgba(123,93,184,0.22), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ maxWidth: "620px !important", textAlign: "center", position: "relative" }}>
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
            mb: 3,
          }}
        >
          + Recommendation
        </Typography>

        <Box className="reveal" style={{ transitionDelay: "0.1s" }}>
          <Box
            sx={{
              position: "relative",
              background: "rgba(8, 4, 18, 0.90)",
              backdropFilter: "blur(20px) saturate(140%)",
              WebkitBackdropFilter: "blur(20px) saturate(140%)",
              border: "1px solid rgba(150,110,255,0.08)",
              borderRadius: "20px",
              p: { xs: 4, md: 6 },
              transform: "rotate(-0.8deg)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.08) inset, 0 0 60px rgba(123,93,184,0.28), 0 0 120px rgba(123,93,184,0.14), 0 32px 64px rgba(0,0,0,0.7)",
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "60%",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(123,93,184,0.7), transparent)",
              }}
            />

            <Typography
              sx={{
                color: "primary.light",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "6rem", md: "8rem" },
                lineHeight: 0.5,
                mb: 5,
                userSelect: "none",
                opacity: 0.85,
              }}
              aria-hidden
            >
              &ldquo;
            </Typography>

            <Typography
              sx={{
                color: "grey.200",
                fontSize: { xs: "18px", md: "21px" },
                lineHeight: 1.85,
                fontStyle: "italic",
                mb: 1,
              }}
            >
              {quote}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
                mt: 4,
              }}
            >
              {avatarSrc && (
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid rgba(150,110,255,0.6)",
                    boxShadow: "0 0 18px rgba(155,110,255,0.55), 0 0 42px rgba(155,110,255,0.18)",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image
                    src={avatarSrc!}
                    alt={name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100px"
                  />
                </Box>
              )}
              <Box>
                <Typography
                  sx={{
                    color: "common.white",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: 15, md: 16 },
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: { xs: 12, md: 13 },
                    letterSpacing: "0.04em",
                    mt: 0.5,
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
