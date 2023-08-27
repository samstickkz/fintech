import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import grid from "../../assets/grid.png";
import "./notification.css";
const Notification = () => {
  return (
    <section id="notification">
      <div className="notifi">
        <div className="container noti">
          <div className="noti_left">
            <small>Notifications</small>
            <h2>Stay notified</h2>

            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
              <br />
              amet sint. Velit officia consequat duis enim velit mollit. <br />
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className="noti_list">
              <div>
                <div className="goood-bg">
                  <AiOutlineCheck className="goood" />
                </div>
                <p>Instant Transfer</p>
              </div>
              <div className="">
                <div className="goood-bg">
                  <AiOutlineCheck className="goood" />
                </div>

                <p>Instant Transfer</p>
              </div>

              <div>
                <div className="goood-bg">
                  <AiOutlineCheck className="goood" />
                </div>

                <p>Instant Transfer</p>
              </div>

              <div className="compare">
                <small>Compare Cards</small>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>

          <div className="noti_right">
            <img src={grid} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
