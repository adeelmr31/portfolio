import React from "react";
import { BannerContainer } from "./styles";
import ImgIcon from "app/assets/images/hero-shape-2.svg";
import BannerIcon from "app/assets/images/BannerMain.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <ImgIcon className="banner__first" alt="background" />
      <BannerIcon className="banner__second" alt="background" />
    </BannerContainer>
  );
};

export default Banner;
