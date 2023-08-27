import React from "react";
import gridicons from "../../assets/gridicons.png";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./logofi.css";
const Logofi = () => {
  return (
    <div className="container">
      <div className="logo-up">
        <div className="m-logo">
          <img src={gridicons} />
        </div>
      </div>
      <div className="logo-down">
        <div className="logofi">
          <div className="noti">
            <div className="logo_left">
              <small>Tools</small>
              <h2>
                Seemless <br /> integration
              </h2>

              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
                <br />
                amet sint. Velit officia consequat duis enim velit mollit.{" "}
                <br />
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className="logo_right">
              {" "}
              <div className="noti_list">
                <div>
                  <div className="goood-bg">
                    <AiOutlineCheck className="goood" />
                  </div>
                  <p>Secure and encrypted integration</p>
                </div>
                <div className="">
                  <div className="goood-bg">
                    <AiOutlineCheck className="goood" />
                  </div>

                  <p>Fully API interface</p>
                </div>

                <div>
                  <div className="goood-bg">
                    <AiOutlineCheck className="goood" />
                  </div>

                  <p>Payments worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logofi;
