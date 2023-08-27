import React from "react";
import "./oneapp.css";
import { GrStatusGood } from "react-icons/gr";

import { AiOutlineCheck } from "react-icons/ai";
import appp from "../../assets/appp.png";

const Oneapp = () => {
  return (
    <section>
      <div className="container oneapp">
        <div className="divi-left">
          <h2>
            One app.
            <br />
            One banking.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="items_list">
            <div>
              <AiOutlineCheck className="oneai" />
              <p>Instant Transfer</p>
            </div>
            <div className="test onetap">
              <AiOutlineCheck className="oneai" />

              <p>Instant Transfer</p>
            </div>
            <div>
              <AiOutlineCheck className="oneai" />

              <p>Instant Transfer</p>
            </div>
            <div>
              <AiOutlineCheck className="oneai" />
              <p>Instant Transfer</p>
            </div>
          </div>
          <div>
            <button className="btn">Download</button>
            <button className="btn">Download</button>
          </div>
        </div>
        <div className="divi-right">
          <img src={appp} />
        </div>
      </div>
    </section>
  );
};

export default Oneapp;
