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
  PartProtocol
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
      <PartProtocol />
      <PartWishes />
    </>
  );
};

export default MainPage;
