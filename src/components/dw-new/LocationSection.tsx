export default function LocationSection() {
  return (
    <section
      id="location-section"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#002855",
        zIndex: 20,
        overflow: "hidden",
      }}
    >
      {/* Main content */}
      <div className="px-4 pt-20 pb-16 md:px-32">
        <h2
          className="font-display dw-shadow-pink"
          style={{
            fontSize: "clamp(2rem, 8vw, 10em)",
            lineHeight: 1.125,
            fontWeight: 400,
            letterSpacing: 0,
            color: "#FEC522",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          Find Us
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch"
        >
          {/* Map placeholder */}
          <div
            style={{
              position: "relative",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              minHeight: "200px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49% 51%, transparent 52%) 0 0 / 60px 60px," +
                  "linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.05) 49% 51%, transparent 52%) 0 0 / 60px 60px," +
                  "linear-gradient(135deg, #0a3d6e, #002855)",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "60%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                background: "#E31C79",
                boxShadow:
                  "0 0 0 8px rgba(227,28,121,0.35), 0 0 0 18px rgba(227,28,121,0.15)",
                animation: "float-gentle 1.8s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                background: "rgba(0,40,85,0.85)",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Salt Lake City, UT — Venue TBA
            </div>
          </div>

          {/* Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              color: "#fff",
            }}
          >
            <div>
              <p
                style={{
                  color: "#E31C79",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                }}
              >
                Event Date
              </p>
              <h3
                className="font-display"
                style={{
                  fontSize: "clamp(1.1rem, 3vw, 2.5em)",
                  color: "#FEC522",
                  marginTop: "0.4rem",
                }}
              >
                Coming Soon — 2026
              </h3>
            </div>
            <div>
              <p
                style={{
                  color: "#E31C79",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                }}
              >
                Location
              </p>
              <p style={{ marginTop: "0.4rem", opacity: 0.85, lineHeight: 1.7 }}>
                Salt Lake City, Utah
                <br />
                Exact venue to be announced. Stay tuned.
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#E31C79",
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                }}
              >
                Hours
              </p>
              <p style={{ marginTop: "0.4rem", opacity: 0.85, lineHeight: 1.7 }}>
                Day 1: Gates open 3:00 PM
                <br />
                Day 2: Gates open 12:00 PM
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://maps.app.goo.gl/tTsmWv43gzco8ePy8"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  background: "#E31C79",
                  color: "#fff",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        className="px-4 md:px-32 py-6"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", margin: 0 }}>
          © 2026 Dilli Wale. Dilli Wale is a registered trademark.
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy Policy", "Cancellations", "Site Credit"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#FEC522")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {[
            {
              label: "Facebook",
              path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
            },
            {
              label: "Instagram",
              path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
            },
            {
              label: "Twitter / X",
              path: "M4 4l16 16M4 20L20 4",
            },
            {
              label: "TikTok",
              path: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5",
            },
          ].map((icon) => (
            <a
              key={icon.label}
              href="#"
              aria-label={icon.label}
              style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#FEC522")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.5)")
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
