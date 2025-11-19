import React from "react";


export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>
            We build future-ready <span className="accent">technology</span>
          </h1>
          <p>
            Apexcify Technologys An Information Services Company Providing services like Web And App Development, Graphic Designing And Other IT Se
          </p>

        </div>

        {/* Replace the text box with your logo */}
        <div className="hero-art">
          <img
            src="./logo.png"
            style={{borderRadius: "100%"}}
            alt="Apexcify Technologies Logo"
            className="hero-logo"
          />
        </div>
      </div>
    </section>
  );
}
