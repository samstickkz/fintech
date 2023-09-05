import React from "react";
import "./footer.css";

const Foot = () => {
  return (
    <section id="footer">
      <div className="container footi">
        <div className="logo">
          <p>banquee.</p>
        </div>
        <div className="about-us">
          <div>
            <h5>About us</h5>
          </div>

          <div className="about-items">
            <small>Features</small>
            <small>Features</small>
            <small>Features</small>
          </div>
        </div>
        <div className="about-us">
          <div>
            <h5>Blog</h5>
          </div>

          <div className="about-items">
            <small>Product</small>
            <small>Technology</small>
            <small>Crypto</small>
          </div>
        </div>{" "}
        <div className="about-us">
          <div>
            <h5>Webflow</h5>
          </div>

          <div className="about-items">
            <small>Features</small>
            <small>Features</small>
            <small>Features</small>
          </div>
        </div>{" "}
        <div className="about-us">
          <div>
            <h5>Social Media</h5>
          </div>

          <div className="about-items">
            <small>Twitter</small>
            <small>Facebook</small>
            <small>LinkedIN</small>
          </div>
        </div>
      </div>
      <div className="cpr">
        © Made with React by <span>Samuel Joseph </span>
      </div>
    </section>
  );
};

export default Foot;
