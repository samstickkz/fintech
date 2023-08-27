import React from "react";
import "./cards.css";
import cards from "../../assets/cards.png";

const Cards = () => {
  return (
    <div className="center-container">
      <div className="container card">
        <small>Account</small>

        <h2>
          Perfect card <br /> for your needs.
        </h2>
        <p>
          Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae
          et leo duis ut diam.
        </p>
        <div className="card-img">
          <img src={cards} alt="Card" />
        </div>
        <div className="open-btn">
          <button className="btn one">Open Account</button>
          <button className="btn_primary">Open Account</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
