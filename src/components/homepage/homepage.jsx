import React from "react";
import cards from "../../assets/cards.png";
import "./homepage.css";

const Homepage = () => {
  return (
    <section id="homepage">
      <div className="container homepagec">
        <div className="home_left">
          <h1>
            Banking <br /> starts here.
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="lower_btn">
            <button className="btn">Open Account</button>
            <div>
              <a href="#" className="btn-primary">
                Compare Prices
              </a>
            </div>
          </div>
        </div>
        <div className="home_right">
          <img src={cards} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
