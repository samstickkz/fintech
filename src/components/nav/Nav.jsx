import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <nav className="container">
      <div className="navbar">
        <div className="logo">
          <p>banquee.</p>
        </div>

        <div className="navcenter">
          <a href="default.asp">Features</a>

          <a href="news.asp">Compare</a>

          <a href="contact.asp">Support</a>

          <a href="about.asp">Blog</a>
        </div>

        <div className="r-btn">
          <small className="btn_primary">Login</small>
          <button className="btn">Open Account</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
