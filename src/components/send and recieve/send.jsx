import React from "react";

import { AiOutlineCheck } from "react-icons/ai";
import transactions from "../../assets/transactions.png";
import "./send.css";
const Send = () => {
  return (
    <section id="sendy">
      <div className="sendi">
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
                <div className="good-bg">
                  <AiOutlineCheck className="good" />
                </div>
                <p>Instant Transfer</p>
              </div>
              <div className="">
                <div className="good-bg">
                  <AiOutlineCheck className="good" />
                </div>

                <p>Instant Transfer</p>
              </div>

              <div>
                <div className="good-bg">
                  <AiOutlineCheck className="good" />
                </div>

                <p>Instant Transfer</p>
              </div>
            </div>
          </div>

          <div className="send_right">
            <img src={transactions} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Send;
