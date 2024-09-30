import React from "react";
import "../assets/css/shortHero.css";

const ShortHero = ({header, subtext}) => {
  return (
    <div className="short-hero">
      <div className="gradient-background left-gradient">
        <div className="sticky-note" style={{ background: "#B1D9F5" }}>
          <h4>Pediatric Care</h4>
          <p>Specialized healthcare for children, ensuring a healthy start.</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1B529E"
          >
            <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
          </svg>
        </div>
      </div>
      <div className="short-hero-header">
        <h1 style={{ fontFamily: "Oswald" }}>{header}</h1>
        <h3 style={{ fontWeight: "400" }}>
{subtext}
        </h3>
      </div>
      <div className="gradient-background right-gradient">
        <div className="sticky-note" style={{ background: "#B2EBE0" }}>
          <h4>Preventative Care</h4>
          <p>
            Stay healthy with regular check-ups, screenings, and vaccinations.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#04B794"
          >
            <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ShortHero;
