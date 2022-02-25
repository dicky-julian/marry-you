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
  PartProtocol,
  PartCountDown
} from "../layouts";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeaderCarousel />
      <PartCouple />
      <PartEvent />
      <PartLocation />
      <PartCountDown />
      <PartMoment />
      <PartProverb />
      <PartGift />
      <PartProtocol />
      <PartWishes />
    </>
  );
};

export default MainPage;
