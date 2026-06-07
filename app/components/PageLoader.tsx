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
            <radialGradient id="eclCoronaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
              <stop offset="10%" stopColor="rgba(210,200,255,0.65)" />
              <stop offset="28%" stopColor="rgba(140,110,220,0.40)" />
              <stop offset="52%" stopColor="rgba(70,45,140,0.16)" />
              <stop offset="78%" stopColor="rgba(30,15,70,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <filter id="eclOuterBlur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="eclMidBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <filter id="eclRingBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <filter id="eclSparkleF" x="-300%" y="-300%" width="700%" height="700%">
              <feGaussianBlur stdDeviation="2.5" result="blr" />
              <feMerge>
                <feMergeNode in="blr" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background stars */}
          <circle cx="22" cy="30" r="1" fill="white" className="ecl-star-a" />
          <circle cx="175" cy="38" r="0.8" fill="white" className="ecl-star-b" />
          <circle cx="14" cy="158" r="0.9" fill="white" className="ecl-star-c" />
          <circle cx="180" cy="168" r="0.7" fill="white" className="ecl-star-a" />
          <circle cx="42" cy="182" r="0.8" fill="white" className="ecl-star-b" />
          <circle cx="162" cy="16" r="0.7" fill="white" className="ecl-star-c" />
          <circle cx="188" cy="95" r="0.6" fill="white" className="ecl-star-a" />
          <circle cx="10" cy="78" r="0.8" fill="white" className="ecl-star-b" />

          {/* Outer corona — heavily blurred radial gradient */}
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="url(#eclCoronaGrad)"
            style={{ filter: "url(#eclOuterBlur)" }}
            className="ecl-corona"
          />

          {/* Inner corona — tighter glow */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="url(#eclCoronaGrad)"
            style={{ filter: "url(#eclMidBlur)" }}
            className="ecl-corona"
          />

          {/* Moon limb brightening — blurred ring at disc edge */}
          <circle
            cx="100"
            cy="100"
            r="47"
            fill="none"
            stroke="rgba(220,215,255,0.6)"
            strokeWidth="3"
            style={{ filter: "url(#eclRingBlur)" }}
            className="ecl-corona"
          />

          {/* Moon disc */}
          <circle cx="100" cy="100" r="44" fill="#040608" />

          {/* Diamond ring sparkle orbiting the moon edge */}
          <g className="ecl-orbit">
            <path
              transform="translate(100, 56)"
              d="M0 -5.5 L1.3 -1.3 L5.5 0 L1.3 1.3 L0 5.5 L-1.3 1.3 L-5.5 0 L-1.3 -1.3 Z"
              fill="#E3C8A0"
              style={{ filter: "url(#eclSparkleF)" }}
            />
          </g>
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
        .ecl-corona {
          transform-box: view-box;
          transform-origin: 100px 100px;
          opacity: 0.75;
          animation: eclipseCorona 4s ease-in-out infinite;
        }
        .ecl-orbit {
          transform-box: view-box;
          transform-origin: 100px 100px;
          animation: eclipseOrbit 8s linear infinite;
        }
        .ecl-star-a { opacity: 0.1; animation: eclipseStar 3s ease-in-out infinite; }
        .ecl-star-b { opacity: 0.1; animation: eclipseStar 4.5s ease-in-out infinite 1.5s; }
        .ecl-star-c { opacity: 0.1; animation: eclipseStar 3.8s ease-in-out infinite 0.8s; }
        @keyframes eclipseCorona {
          0%, 100% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes eclipseOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes eclipseStar {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ecl-corona, .ecl-orbit, .ecl-star-a, .ecl-star-b, .ecl-star-c {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
