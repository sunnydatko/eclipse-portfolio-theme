"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 600);
    const removeTimer = setTimeout(() => setVisible(false), 1100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        role="status"
        aria-label="Loading"
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050507",
          zIndex: 9999,
          opacity: fading ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: fading ? "none" : "auto",
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="pxCenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(212,196,240,0.55)" />
              <stop offset="35%" stopColor="rgba(168,146,216,0.22)" />
              <stop offset="70%" stopColor="rgba(90,60,160,0.08)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <filter id="pxSparkleGlow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pxDotGlow" x="-300%" y="-300%" width="700%" height="700%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background twinkling stars */}
          <circle cx="28" cy="35" r="1" fill="white" className="px-star-a" />
          <circle cx="172" cy="42" r="0.9" fill="white" className="px-star-b" />
          <circle cx="18" cy="152" r="0.8" fill="white" className="px-star-c" />
          <circle cx="178" cy="162" r="0.9" fill="white" className="px-star-a" />
          <circle cx="45" cy="178" r="0.7" fill="white" className="px-star-b" />
          <circle cx="158" cy="20" r="0.8" fill="white" className="px-star-c" />
          <circle cx="185" cy="90" r="0.7" fill="white" className="px-star-a" />
          <circle cx="15" cy="80" r="0.9" fill="white" className="px-star-b" />
          <circle cx="88" cy="12" r="0.8" fill="white" className="px-star-c" />
          <circle cx="108" cy="185" r="0.7" fill="white" className="px-star-a" />

          {/* Soft center glow aura */}
          <circle cx="100" cy="100" r="72" fill="url(#pxCenterGlow)" />

          {/* Faint orbit ring traces */}
          <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(168,146,216,0.08)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="54" fill="none" stroke="rgba(168,146,216,0.06)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(168,146,216,0.04)" strokeWidth="0.5" />

          {/* Orbit 1 — close ring (r=35), two white sparks, fast clockwise */}
          <g className="px-orbit1-a">
            <circle cx="100" cy="65" r="2.8" fill="white" style={{ filter: "url(#pxDotGlow)" }} />
          </g>
          <g className="px-orbit1-b">
            <circle cx="100" cy="135" r="2.2" fill="rgba(255,255,255,0.7)" style={{ filter: "url(#pxDotGlow)" }} />
          </g>

          {/* Orbit 2 — medium ring (r=54), lavender spark, counter-clockwise */}
          <g className="px-orbit2">
            <circle cx="100" cy="46" r="2.5" fill="#C8B8ED" style={{ filter: "url(#pxDotGlow)" }} />
          </g>

          {/* Orbit 3 — outer ring (r=72), golden spark, slow clockwise */}
          <g className="px-orbit3-a">
            <circle cx="100" cy="28" r="2" fill="#E3C8A0" style={{ filter: "url(#pxDotGlow)" }} />
          </g>
          <g className="px-orbit3-b">
            <circle cx="62.8" cy="136" r="1.6" fill="rgba(227,200,160,0.7)" style={{ filter: "url(#pxDotGlow)" }} />
          </g>

          {/* Central 4-pointed sparkle star */}
          <path
            d="M100,81 L104.5,95.5 L119,100 L104.5,104.5 L100,119 L95.5,104.5 L81,100 L95.5,95.5 Z"
            fill="rgba(212,196,240,0.25)"
            style={{ filter: "url(#pxSparkleGlow)" }}
            className="px-star-pulse"
          />
          <path
            d="M100,86 L103.2,96.8 L114,100 L103.2,103.2 L100,114 L96.8,103.2 L86,100 L96.8,96.8 Z"
            fill="rgba(200,184,237,0.7)"
            style={{ filter: "url(#pxSparkleGlow)" }}
            className="px-star-pulse"
          />
          <path
            d="M100,90 L102.2,97.8 L110,100 L102.2,102.2 L100,110 L97.8,102.2 L90,100 L97.8,97.8 Z"
            fill="white"
            className="px-star-pulse"
          />

          {/* Tiny accent sparkles around the center */}
          <circle cx="100" cy="76" r="1.2" fill="rgba(255,255,255,0.5)" className="px-star-c" />
          <circle cx="124" cy="100" r="1" fill="rgba(200,184,237,0.5)" className="px-star-b" />
          <circle cx="100" cy="124" r="1.2" fill="rgba(255,255,255,0.5)" className="px-star-a" />
          <circle cx="76" cy="100" r="1" fill="rgba(200,184,237,0.5)" className="px-star-c" />
        </svg>

        <span
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Loading
        </span>
      </div>

      <style>{`
        .px-orbit1-a {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: pxOrbitCw 2.4s linear infinite;
        }
        .px-orbit1-b {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: pxOrbitCw 2.4s linear infinite;
          animation-delay: -1.2s;
        }
        .px-orbit2 {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: pxOrbitCcw 4.6s linear infinite;
        }
        .px-orbit3-a {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: pxOrbitCw 7.2s linear infinite;
        }
        .px-orbit3-b {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: pxOrbitCw 7.2s linear infinite;
          animation-delay: -4.8s;
        }
        .px-star-pulse {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: pxPulse 2.8s ease-in-out infinite;
        }
        .px-star-a { opacity: 0.12; animation: pxTwinkle 3.2s ease-in-out infinite; }
        .px-star-b { opacity: 0.12; animation: pxTwinkle 4.8s ease-in-out infinite 1.6s; }
        .px-star-c { opacity: 0.12; animation: pxTwinkle 3.9s ease-in-out infinite 0.9s; }

        @keyframes pxOrbitCw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pxOrbitCcw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pxPulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes pxTwinkle {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.6; }
        }
        @media (prefers-reduced-motion: reduce) {
          .px-orbit1-a, .px-orbit1-b, .px-orbit2, .px-orbit3-a, .px-orbit3-b,
          .px-star-pulse, .px-star-a, .px-star-b, .px-star-c {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
