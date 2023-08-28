import React, { useState } from "react";
import "./NeedHelp.css";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsArrowReturnRight } from "react-icons/bs";

const NeedHelp = () => {
  const [accordionStates, setAccordionStates] = useState(
    new Array(5).fill(false) // Assuming you have 5 accordion items
  );

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

  return (
    <section>
      <div className="container helpdvi">
        <div className="help-left">
          <h2>Need help?</h2>
          <div className="numb">
            <div className="goood-bg call-bg">
              <FiPhoneCall className="goood" />
            </div>
            <div className="numb2">
              <div className="phone-number">
                <small>+2347032346910</small>
                <small>+2347032346910</small>
              </div>
            </div>
          </div>
          <div className="numb">
            <div className="goood-bg call-bg">
              <FiPhoneCall className="goood" />
            </div>
            <div className="numb2">
              <div className="phone-number">
                <small>+2347032346910</small>
                <small>+2347032346910</small>
              </div>
            </div>
          </div>
          <div className="sup">
            <small>Support</small> <BsArrowReturnRight className="goood" />
          </div>
        </div>
        <div className="help-right">
          <div className="acc-pad">
            <div className="und-acc" onClick={() => toggleAccordion(1)}>
              <h5>How do I open a Banko account?</h5>
              <AiOutlinePlus
                className={`und-color ${
                  accordionStates[1] ? "rotate-icon" : ""
                }`}
              />
            </div>
            {accordionStates[1] && (
              <div
                className={`accordion-content ${
                  accordionStates[1] ? "active" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            )}
          </div>

          <div className="acc-pad">
            <div className="und-acc" onClick={() => toggleAccordion(2)}>
              <h5>How do I open a Banko account?</h5>
              <AiOutlinePlus
                className={`und-color ${
                  accordionStates[2] ? "rotate-icon" : ""
                }`}
              />
            </div>
            {accordionStates[2] && (
              <div
                className={`accordion-content ${
                  accordionStates[2] ? "active" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            )}
          </div>
          <div className="acc-pad">
            <div className="und-acc" onClick={() => toggleAccordion(3)}>
              <h5>How do I open a Banko account?</h5>
              <AiOutlinePlus
                className={`und-color ${
                  accordionStates[3] ? "rotate-icon" : ""
                }`}
              />
            </div>
            {accordionStates[3] && (
              <div
                className={`accordion-content ${
                  accordionStates[3] ? "active" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            )}
          </div>

          <div className="acc-pad">
            <div className="und-acc" onClick={() => toggleAccordion(4)}>
              <h5>How do I open a Banko account?</h5>
              <AiOutlinePlus
                className={`und-color ${
                  accordionStates[4] ? "rotate-icon" : ""
                }`}
              />
            </div>
            {accordionStates[4] && (
              <div
                className={`accordion-content ${
                  accordionStates[4] ? "active" : ""
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
