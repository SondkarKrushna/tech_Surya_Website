import { useState, useEffect } from "react";

function Panel({ src, poster, label, style = {}, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`} style={style}>
      {src ? (
        <video
          className="w-full h-full object-cover object-top"
          autoPlay muted loop playsInline
          poster={poster || ""}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : poster ? (
        <img
          src={poster}
          alt={label || ""}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      ) : null}

      {/* bottom vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, transparent 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {label && (
        <div
          className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: "#fff",
              letterSpacing: "0.08em",
              lineHeight: 1,
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function TechSuryaHero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  /*
   * ── VIDEO CONFIG ─────────────────────────────────
   * src   → your .mp4 file path  (video plays)
   * poster → thumbnail image path (shown before play)
   * ─────────────────────────────────────────────────
   */
  const topLeft = {
    src: "./video/Video-107.mp4",
    poster: "",
    label: null,
  };
  const topRight = {
    src: "./video/Video-107.mp4",
    poster: "",
    label: null,
  };
  const btmLeft = {
    src: "./video/Video-107.mp4",
    poster: "",
    label: "Website Dev",
  };
  const btmRight = {
    src: "./video/Video-107.mp4",
    poster: "",
    label: "Industrial Training Internship",
  };

  const wordmarkBase = {
    fontFamily: "sans-serif",
    fontWeight: 900,
    letterSpacing: "0.07em",
    lineHeight: 1,
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={{
        background: "#000",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ════════════════════════════════════════════
          DESKTOP  ≥ md
          Exact Image 2:
          • Left zone  (23% wide): black outer strip + narrow top video + tall bottom video
          • Center zone (54% wide): pure black + globe + branding
          • Right zone (23% wide): mirror of left

          Top videos → narrow, centered inside their zone (not touching outer edge)
          Bottom videos → touch from inner edge to outer edge of their zone
      ════════════════════════════════════════════ */}
      <div
        className="hidden md:grid"
        style={{
          width: "100%",
          height: "100vh",
          minHeight: 520,
          /* 3-column layout identical to image */
          gridTemplateColumns: "23% 54% 23%",
          gridTemplateRows: "38% 5% 57%",
          /* row 2 = thin connector gap */
        }}
      >
        {/* ── TOP-LEFT cell ── */}
        {/* Black outer strip + narrow video in inner ~75% of cell */}
        <div
          className="relative flex justify-end items-start"
          style={{ gridColumn: 1, gridRow: 1, background: "#000" }}
        >
          {/* narrow video — occupies inner 75% of the left col width */}
          <Panel
            {...topLeft}
            style={{
              width: "75%",
              height: "100%",
              flexShrink: 0,
            }}
          />
        </div>

        {/* ── TOP-CENTER cell (pure black) ── */}
        <div style={{ gridColumn: 2, gridRow: 1, background: "#000" }} />

        {/* ── TOP-RIGHT cell ── */}
        <div
          className="relative flex justify-start items-start"
          style={{ gridColumn: 3, gridRow: 1, background: "#000" }}
        >
          <Panel
            {...topRight}
            style={{
              width: "75%",
              height: "100%",
              flexShrink: 0,
            }}
          />
        </div>

        {/* ── CONNECTOR-LEFT (thin vertical line) ── */}
        <div
          style={{
            gridColumn: 1,
            gridRow: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 1,
              height: "100%",
              marginRight: "12.5%", /* aligns over the right edge of top video */
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />
        </div>

        {/* ── CONNECTOR-CENTER ── */}
        <div style={{ gridColumn: 2, gridRow: 2, background: "#000" }} />

        {/* ── CONNECTOR-RIGHT ── */}
        <div
          style={{
            gridColumn: 3,
            gridRow: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 1,
              height: "100%",
              marginLeft: "12.5%",
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />
        </div>

        {/* ── BOTTOM-LEFT — full width of left col ── */}
        <Panel
          {...btmLeft}
          style={{
            gridColumn: 1,
            gridRow: 3,
            width: "100%",
            height: "100%",
          }}
        />

        {/* ── BOTTOM-CENTER — globe + branding ── */}
        <div
        className="border"
          style={{
            gridColumn: 2,
            gridRow: "1 / 4",       /* spans all 3 rows */
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 3%",
            background: "#000",
          }}
        >
          <img
          className="border"
            src="./TechEarth.png"
            alt="TechSurya Globe"
            draggable={false}
            style={{
              width: "min(500px, 80%)",
              height: "auto",
              display: "block",
            }}
          />
          <div
          className=""
            style={{
              ...wordmarkBase,
              
              fontSize: "clamp(1.9rem, 3.3vw, 3.2rem)",
            }}
          >
            <span style={{ color: "#FF6B00", textShadow: "0 0 40px rgba(255,107,0,0.35)" }}>
              TECH
            </span>
            <span style={{ color: "#3B9EF5", textShadow: "0 0 40px rgba(59,158,245,0.35)" }}>
              SURYA
            </span>
            <span style={{ color: "#fff", marginLeft: "0.2em" }}>IT</span>
          </div>
          <p
            style={{
              marginTop: 14,
              textAlign: "center",
              color: "#bcc8d4",
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              lineHeight: 1.7,
              fontSize: "clamp(0.5rem, 0.78vw, 0.73rem)",
              maxWidth: 420,
            }}
          >
            WE BUILD SCALABLE DIGITAL PRODUCTS THAT HELP BUSINESSES
            <br />
            GROW, INNOVATE AND LEAD IN THE DIGITAL WORLD.
          </p>
        </div>

        {/* ── BOTTOM-RIGHT — full width of right col ── */}
        <Panel
          {...btmRight}
          style={{
            gridColumn: 3,
            gridRow: 3,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* ════════════════════════════════════════════
          MOBILE  < md
          top 2 narrow videos (centered in half-cols)
          center branding
          bottom 2 wide videos
      ════════════════════════════════════════════ */}
      <div
        className="md:hidden flex flex-col w-full"
        style={{ minHeight: "100vh" }}
      >
        {/* top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "22vh",
            background: "#000",
          }}
        >
          {/* left: black outer + 75% inner video */}
          <div className="relative flex justify-end" style={{ background: "#000" }}>
            <Panel
              {...topLeft}
              style={{ width: "80%", height: "100%" }}
            />
          </div>
          {/* right */}
          <div className="relative flex justify-start" style={{ background: "#000" }}>
            <Panel
              {...topRight}
              style={{ width: "80%", height: "100%" }}
            />
          </div>
        </div>

        {/* center branding */}
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 16px",
            background: "#000",
          }}
        >
          <img
            src="./TechEarth.png"
            alt="Globe"
            draggable={false}
            style={{ width: "min(230px, 68vw)", height: "auto", display: "block" }}
          />
          <div
            style={{
              ...wordmarkBase,
              marginTop: 12,
              fontSize: "clamp(1.4rem, 6.5vw, 1.85rem)",
            }}
          >
            <span style={{ color: "#FF6B00" }}>TECH</span>
            <span style={{ color: "#3B9EF5" }}>SURYA</span>
            <span style={{ color: "#fff", marginLeft: "0.18em" }}>IT</span>
          </div>
          <p
            style={{
              marginTop: 10,
              textAlign: "center",
              color: "#bcc8d4",
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              lineHeight: 1.65,
              fontSize: "clamp(0.42rem, 1.6vw, 0.58rem)",
              maxWidth: 280,
            }}
          >
            WE BUILD SCALABLE DIGITAL PRODUCTS THAT HELP BUSINESSES
            <br />
            GROW, INNOVATE AND LEAD IN THE DIGITAL WORLD.
          </p>
        </div>

        {/* bottom row — full width panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            height: "38vh",
          }}
        >
          <Panel
            {...btmLeft}
            style={{
              width: "100%",
              height: "100%",
              borderRight: "1px solid rgba(255,255,255,0.07)",
            }}
          />
          <Panel {...btmRight} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}