import React from "react";
import Nav from "./components/nav/Nav";
import Homepage from "./components/homepage/homepage";
import Banking from "./components/banking/banking";
import Send from "./components/send and recieve/send";
import Savings from "./components/saving/saving";
import Notification from "./components/notification/notification";
import Logofi from "./components/logo-fi/logofi";
import Cards from "./components/cards/cards";
import Testimonails from "./components/Testimonals/testimonials";

const app = () => {
  return (
    <>
      <Nav />
      <Homepage />
      <Banking />
      <Send />
      <Savings />
      <Notification />
      <Logofi />
      <Cards />
      <Testimonails />
    </>
  );
};

export default app;
