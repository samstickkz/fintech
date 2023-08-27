import React from "react";
import "../banking/banking.css";
import { GiLightningFrequency } from "react-icons/gi";
import appphone from "../../assets/appphone.jpg";
const Banking = () => {
  return (
    <section id="banking">
      <div className="container banking-con">
        <div className="div-left">
          <div className="left-features">
            {" "}
            <h2>
              One app. <br /> One banking.
            </h2>
          </div>
          <div className="left-features">
            {" "}
            <h2></h2>
          </div>
          {/* the boxes starts here */}
          <div className="box-features">
            <GiLightningFrequency className="ltn" />
            <h4>Instant transactions</h4>
            <p>
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
          <div className="box-features">
            <GiLightningFrequency className="ltn" />
            <h4>Instant transactions</h4>
            <p>
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>{" "}
          <div className="box-features">
            <GiLightningFrequency className="ltn" />
            <h4>Instant transactions</h4>
            <p>
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>{" "}
          <div className="box-features">
            <GiLightningFrequency className="ltn" />
            <h4>Instant transactions</h4>
            <p>
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>{" "}
          <div className="box-features">
            <GiLightningFrequency className="ltn" />
            <h4>Instant transactions</h4>
            <p>
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>{" "}
          <div className="box-features">
            <GiLightningFrequency className="ltn" />
            <h4>Instant transactions</h4>
            <p>
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
        </div>
        <div className="div-right">
          <img src={appphone} alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default Banking;
