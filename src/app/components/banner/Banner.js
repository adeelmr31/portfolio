import React from "react";
import { BannerContainer, TextAreaDiv } from "./styles";
import ImgIcon from "app/assets/images/hero-shape-2.svg";
import BannerIcon from "app/assets/images/BannerMain.svg";

const Banner = () => {
  return (
    <BannerContainer>
      <ImgIcon className="banner__first" alt="background" />
      <BannerIcon className="banner__second" alt="background" />
      <TextAreaDiv>
        <h1>Next.js Template and Boilerplate for Crypto, ICO and Web3</h1>
        <p>
          A Next.js website template for Crypto Currency, Blockchain, ICO, and
          Web3, meticulously styled with Tailwind CSS. This boilerplate includes
          essential integrations, UI components, pages, and enabling you to
          launch a comprehensive website or landing page for anything related to
          Crypto, Blockchain, and Web3.
        </p>
      </TextAreaDiv>
    </BannerContainer>
  );
};

export default Banner;
