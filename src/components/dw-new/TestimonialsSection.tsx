const testimonials = [
  {
    quote:
      "Dilli Wale brought the energy of Chandni Chowk right to our doorstep. The food, the music — absolutely unreal!",
    name: "Priya Sharma",
    meta: "Attended Last Year",
    avatarFrom: "#e31c79",
    avatarTo: "#fd9805",
  },
  {
    quote:
      "Mast tha yaar! The bhangra performances and chaat stalls made it feel like we were back home. Can't wait for the next one.",
    name: "Harjeet Singh",
    meta: "Salt Lake Local",
    avatarFrom: "#00a1b0",
    avatarTo: "#9fcf66",
  },
  {
    quote:
      "Our kids had a blast — from the face painting to the folk dances. A truly inclusive cultural celebration.",
    name: "Meera Nair",
    meta: "Family Attendee",
    avatarFrom: "#fec522",
    avatarTo: "#e31c79",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials-section"
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#FEC522",
        padding: "5rem 0",
        textAlign: "center",
        zIndex: 20,
      }}
    >
      <h2
        className="font-display px-4 dw-shadow-pink"
        style={{
          fontSize: "clamp(2rem, 8vw, 10em)",
          lineHeight: 1.125,
          fontWeight: 400,
          letterSpacing: 0,
          color: "#002855",
        }}
      >
        What People Say
      </h2>

      <div
        className="px-4 md:px-12"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "4rem",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "1.25rem",
              padding: "3rem 2.5rem 2.5rem",
              textAlign: "left",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease",
              color: "#002855",
            }}
            className="hover:-translate-y-2"
          >
            <span
              style={{
                position: "absolute",
                top: "-1.25rem",
                left: "1.5rem",
                fontSize: "6rem",
                lineHeight: 1,
                color: "#E31C79",
                opacity: 0.45,
                fontFamily: "serif",
                userSelect: "none",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              style={{
                marginTop: "2rem",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                opacity: 0.88,
                marginBottom: "2rem",
              }}
            >
              {t.quote}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span
                style={{
                  flexShrink: 0,
                  width: "3.25rem",
                  height: "3.25rem",
                  borderRadius: "50%",
                  display: "block",
                  background: `linear-gradient(135deg, ${t.avatarFrom}, ${t.avatarTo})`,
                }}
              />
              <div>
                <p
                  className="font-display"
                  style={{
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    color: "#002855",
                    fontWeight: "bold",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginTop: "0.3rem",
                    color: "#E31C79",
                    fontWeight: 700,
                  }}
                >
                  {t.meta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
