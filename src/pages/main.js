import React from "react";
import {
  Navbar,
  HeaderCarousel,
  PartCouple,
  PartEvent,
  PartLocation,
  PartMoment,
  PartProverb,
  PartGift,
  PartWishes,
} from "../layouts";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeaderCarousel />
      <PartCouple />
      <PartEvent />
      <PartLocation />
      <PartMoment />
      <PartProverb />
      <PartGift />
      <PartWishes />
    </>
  );
};

export default MainPage;
