import React from "react";
import {
  BannerContainer,
  TextAreaDiv,
  DigitalCurrencies,
  Currency,
  CustomToolTip,
  ButtonDiv,
} from "./styles";
import ImgIcon from "app/assets/images/hero-shape-2.svg";
import BannerIcon from "app/assets/images/BannerMain.svg";
import BTCIcon from "app/assets/images/BTC.svg";
import BTC1Icon from "app/assets/images/BTC1.svg";
import BTC2Icon from "app/assets/images/BTC2.svg";
import BTC3Icon from "app/assets/images/BTC3.svg";
import BTC4Icon from "app/assets/images/BTC4.svg";
import BTC5Icon from "app/assets/images/BTC5.svg";
import CustomButton from "../customBtn/CustomButton";

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
      <DigitalCurrencies>
        {/* Currency */}
        <Currency>
          <CustomToolTip arrow placement="top" title="Bitcoin (BTC)">
            <BTCIcon />
          </CustomToolTip>
        </Currency>
        {/* Currency */}
        <Currency>
          <CustomToolTip arrow placement="top" title="Bitcoin (BTC)">
            <BTC1Icon />
          </CustomToolTip>
        </Currency>
        {/* Currency */}
        <Currency>
          <CustomToolTip arrow placement="top" title="Bitcoin (BTC)">
            <BTC2Icon />
          </CustomToolTip>
        </Currency>
        {/* Currency */}
        <Currency>
          <CustomToolTip arrow placement="top" title="Bitcoin (BTC)">
            <BTC3Icon />
          </CustomToolTip>
        </Currency>
        {/* Currency */}
        <Currency>
          <CustomToolTip arrow placement="top" title="Bitcoin (BTC)">
            <BTC4Icon />
          </CustomToolTip>
        </Currency>
        {/* Currency */}
        <Currency>
          <CustomToolTip arrow placement="top" title="Bitcoin (BTC)">
            <BTC5Icon />
          </CustomToolTip>
        </Currency>
      </DigitalCurrencies>
      <ButtonDiv>
        <CustomButton
          color={"#fff"}
          bg={"#3e7dff"}
          title={"Buy Tokens 47% off"}
          radius={"25px"}
          width={"222px"}
        />
      </ButtonDiv>
    </BannerContainer>
  );
};

export default Banner;
