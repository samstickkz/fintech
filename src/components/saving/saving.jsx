import React from "react";
import "./saving.css";
import { GiLightningFrequency } from "react-icons/gi";

const Savings = () => {
  return (
    <section>
      <div className="container">
        <div className="saving-top">
          <small>Saving Accounts</small>
          <h2>
            Organize your <br /> money the right way
          </h2>

          <div className="allf">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <small>All Features</small>
          </div>
        </div>
        {/* small boxes */}
        <div className="saving-bottom">
          <div>
            <div className="box-blue blue">
              <GiLightningFrequency className="icon-h" />
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>
          <div>
            <div className="box-blue pink">
              <GiLightningFrequency className="icon-h" />
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>{" "}
          <div>
            <div className="box-blue bluer">
              <GiLightningFrequency className="icon-h" />
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>{" "}
          <div>
            <div className="box-blue ash ">
              <GiLightningFrequency className="icon-h" />
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>{" "}
          <div>
            <div className="box-blue fade">
              <GiLightningFrequency className="icon-h" />
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Savings;
