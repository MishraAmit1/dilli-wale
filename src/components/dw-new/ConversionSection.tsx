export default function ConversionSection() {
  return (
    <section
      id="conversion-section"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "#FEC522",
      }}
      className="z-30 text-center overflow-hidden"
    >
      <h2
        className="font-display px-4 dw-shadow-pink"
        style={{
          fontSize: "clamp(2rem, 8vw, 10em)",
          lineHeight: 1.125,
          fontWeight: 400,
          letterSpacing: 0,
          color: "#002855",
          textTransform: "uppercase",
        }}
      >
        [Placeholder: Conversion Headline]
      </h2>

      <p
        style={{
          marginTop: "2.5rem",
          maxWidth: "42rem",
          margin: "2.5rem auto 0",
          color: "rgba(0,40,85,0.75)",
          lineHeight: 1.7,
          padding: "0 1rem",
        }}
      >
        [Placeholder for section: CONVERSION — Short supporting line that drives
        the decision. Reinforce urgency, availability, or signature offering.]
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-4 md:px-12 max-w-[860px] mx-auto">
        {/* Card 1 — Make a Reservation */}
        <a
          href="#"
          style={{
            background: "#fff",
            borderRadius: "1.25rem",
            padding: "2rem",
            textAlign: "center",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            transition: "transform 0.3s ease",
            textDecoration: "none",
            color: "#002855",
          }}
          className="hover:-translate-y-2"
        >
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 2.5em)",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#002855",
            }}
          >
            Make a Reservation
          </h3>
          <p style={{ opacity: 0.75, lineHeight: 1.6, fontSize: "0.95rem" }}>
            Book your spot for the celebration. Limited seats available — secure
            yours early.
          </p>
          <span
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#E31C79",
            }}
          >
            Book a Table →
          </span>
        </a>

        {/* Card 2 — Order Online */}
        <a
          href="#"
          style={{
            background: "#E31C79",
            borderRadius: "1.25rem",
            padding: "2rem",
            textAlign: "center",
            boxShadow: "0 8px 32px 0 rgba(227,28,121,0.35)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            transition: "transform 0.3s ease",
            textDecoration: "none",
          }}
          className="hover:-translate-y-2"
        >
          <h3
            className="font-display"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 2.5em)",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#fff",
            }}
          >
            Order Online
          </h3>
          <p
            style={{
              opacity: 0.88,
              lineHeight: 1.6,
              fontSize: "0.95rem",
              color: "#fff",
            }}
          >
            Get your tickets online and skip the queue. Early bird deals
            available — don&apos;t miss out.
          </p>
          <span
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#FEC522",
            }}
          >
            Order Now →
          </span>
        </a>
      </div>
    </section>
  );
}
