import React from "react";
import "./saving.css";
import airplane from "../../assets/airplane.png";
import bicycle from "../../assets/bicycle.png";
import camera from "../../assets/camera.png";
import laptop from "../../assets/laptop.png";
import addbutton from "../../assets/addbutton.png";

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
              <div className="airplane">
                <img src={airplane} />
              </div>
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>
          <div>
            <div className="box-blue pink">
              <div className="airplane">
                <img src={bicycle} />
              </div>
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>{" "}
          <div>
            <div className="box-blue bluer">
              <div className="airplane">
                <img src={camera} />
              </div>
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>{" "}
          <div>
            <div className="box-blue ash ">
              <div className="airplane">
                <img src={laptop} />
              </div>
            </div>
            <h5>new Laptop</h5>
            <small>$400</small>
          </div>{" "}
          <div>
            <div className="box-blue fade">
              <div className="airplane">
                <img src={addbutton} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
