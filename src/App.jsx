import React from "react";
import Nav from "./components/nav/Nav";
import Homepage from "./components/homepage/homepage";
import Banking from "./components/banking/banking";
import Send from "./components/send and recieve/send";

const app = () => {
  return (
    <>
      <Nav />
      <Homepage />
      <Banking />
      <Send />
    </>
  );
};

export default app;
