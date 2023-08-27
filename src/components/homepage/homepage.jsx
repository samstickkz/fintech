import React from "react";
import cards from "../../assets/cards.png";
import "./homepage.css";
import { GrStatusGood } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
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

          <div className="items_list">
            <div>
              <GrStatusGood className="icons_color" />
              <p>Instant Transfer</p>
            </div>
            <div className="test">
              <GrStatusGood className="icons_col" />

              <p>Instant Transfer</p>
            </div>
            <div>
              <GrStatusGood className="icons_clors" />

              <p>Instant Transfer</p>
            </div>
            <div>
              <GrStatusGood className="icons_color" />
              <p>Instant Transfer</p>
            </div>
          </div>

          <div className="lower_btn">
            <button className="btn">Open Account</button>
            <div>
              <a href="#" className="btn-primary comp">
                Compare Prices
              </a>
              <AiOutlineArrowRight className="icons_color" />
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
