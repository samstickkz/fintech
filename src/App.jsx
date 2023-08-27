import React from "react";
import Nav from "./components/nav/Nav";
import Homepage from "./components/homepage/homepage";
import Banking from "./components/banking/banking";

const app = () => {
  return (
    <>
      <Nav />
      <Homepage />
      <Banking />
    </>
  );
};

export default app;
