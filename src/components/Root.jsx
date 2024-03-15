import React from "react";
import Overons from "./Overons";
import Activities from "./Activities";
import Contact from "./Contact";
import ScrollToTop from "../utils/ScrollToTop";
import Aktueel from "./Aktueel";

const Root = () => {
  return (
    <>
      <Overons />
      <Activities />
      <Aktueel />
      <Contact />
      <ScrollToTop />
    </>
  );
};

export default Root;
