import React from "react";
import Buy from "./smart-housing-components/buy";
import Services from "./smart-housing-components/services/Index";
import Statistic from "./smart-housing-components/Statistic";
import Marquee from "./smart-housing-components/marquee";
import Listed from "./smart-housing-components/Listed";
import CheckOut from "./smart-housing-components/checkOut/Index";
import Sales from "./smart-housing-components/hero/Sales";

import Main from "./smart-housing-components/hero/main";
import Neighborhood from "./smart-housing-components/Neighborhood";
import Assisting from "./smart-housing-components/Assisting";

import NoTransitionExample from "./smart-housing-components/carcal/carcal";
import RotatingText from "./smart-housing-components/Circular";

export default function page() {
  return (
    <>
      <Buy />
      <Sales />
      <Main />
      <Statistic />
      <Marquee />
      <RotatingText />
      <Assisting />
      <Listed />
      <CheckOut />
      <Services />
      <Neighborhood />
      <NoTransitionExample />
    </>
  );
}
