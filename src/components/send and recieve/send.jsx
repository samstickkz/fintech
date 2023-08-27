import React from "react";
import { GrStatusGood } from "react-icons/gr";

import transactions from "../../assets/transactions.jpg";
import "./send.css";
const Send = () => {
  return (
    <section id="send">
      <div className="container send">
        <div className="send_left">
          <h2>
            Send & receive <br /> money instantly
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="send_list">
            <div>
              <GrStatusGood className="" />
              <p>Instant Transfer</p>
            </div>
            <div className="">
              <GrStatusGood className="" />

              <p>Instant Transfer</p>
            </div>
            <div>
              <GrStatusGood className="" />

              <p>Instant Transfer</p>
            </div>
          </div>
        </div>

        <div className="send_right">
          <img src={transactions} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Send;
