import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import tapandpay from "../../assets/tapandpay.png";
import "./blog.css";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className=" blog-up">
          <h2>Blog</h2>
          <div className="sup">
            <small>All Articles</small> <BsArrowReturnRight className="goood" />
          </div>
        </div>
        <div className="blog-down">
          <div className="blog-img-box">
            <div className="blog-img">
              <img src={tapandpay} alt="" />
            </div>
            <h3>How To Start Using Banko For Your Startup</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt
              <br /> ut labore et dolore magna aliqua. Dui accumsan <br />
              sit amet nulla facilisi morbi.
            </p>
            <div className="blog-tag">
              <button className="btn"> Bitcoin</button>
              <button className="btn_primary"> Bitcoin</button>
            </div>
          </div>
          <div className="blog-img-box">
            <div className="blog-img">
              <img src={tapandpay} alt="" />
            </div>
            <h3>How To Start Using Banko For Your Startup</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt
              <br /> ut labore et dolore magna aliqua. Dui accumsan <br />
              sit amet nulla facilisi morbi.
            </p>
            <div className="blog-tag">
              <button className="btn"> Bitcoin</button>
              <button className="btn_primary"> Bitcoin</button>
            </div>
          </div>{" "}
          <div className="blog-img-box">
            <div className="blog-img">
              <img src={tapandpay} alt="" />
            </div>
            <h3>How To Start Using Banko For Your Startup</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt
              <br /> ut labore et dolore magna aliqua. Dui accumsan <br />
              sit amet nulla facilisi morbi.
            </p>
            <div className="blog-tag">
              <button className="btn"> Bitcoin</button>
              <button className="btn_primary"> Bitcoin</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
