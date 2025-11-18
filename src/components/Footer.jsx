import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div>© {new Date().getFullYear()} Apexcify Technologys — All rights reserved</div>
        <div className="socials">
          <div>
            <a href="#!" aria-label="Twitter"><img src="./src/twitter.png" alt="Twitter" style={{ width: 28, height: 28 ,borderRadius: "50%"}} /></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/apexcifytechnologys/" aria-label="LinkedIn"><img src="./src/linkedin.png" alt="Twitter" style={{ width: 28, height: 28 ,borderRadius: "50%"}} /></a>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
}
