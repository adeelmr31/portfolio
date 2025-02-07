"use client";
import React, { useEffect } from "react";
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
import CustomButton from "../customBtn/CustomButton";



const Banner = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <BannerContainer>
      <ImgIcon className="banner__first" alt="background" />
      <BannerIcon className="banner__second" alt="background" />
      <TextAreaDiv data-aos="fade-up">
        <h1>Innovate, Scale, and Dominate with Smart Technology.</h1>
        <p>
        From startups to enterprises, we provide cutting-edge, scalable solutions that evolve with your business, driving innovation and long-term success.
        </p>
      </TextAreaDiv>
      <DigitalCurrencies data-aos="fade-up">
          <CustomToolTip arrow placement="top" title="Web Development">
        <Currency>
            <img src="static/Icons/layers.png" />
        </Currency>
          </CustomToolTip>
          <CustomToolTip arrow placement="top" title="Mobile Development">
        <Currency>
            <img src="static/Icons/mobile-coding.png" />
        </Currency>
          </CustomToolTip>
          <CustomToolTip arrow placement="top" title="UI/UX">
        <Currency>
            <img src="static/Icons/ux.png" />
        </Currency>
          </CustomToolTip>
          <CustomToolTip arrow placement="top" title="International Recruitment">
        <Currency>
            <img src="static/Icons/jobs.png" />
        </Currency>
          </CustomToolTip>
          <CustomToolTip arrow placement="top" title="Databases">
        <Currency>
            <img src="static/Icons/database.png" />
        </Currency>
          </CustomToolTip>
          <CustomToolTip arrow placement="top" title="Social Media Marketing">
        <Currency>
            <img src="static/Icons/social-media.png" />
        </Currency>
          </CustomToolTip>
      </DigitalCurrencies>
      <ButtonDiv data-aos="fade-up">
        <CustomButton
          color={"#fff"}
          bg={"#3e7dff"}
          title={"Schedule Free Consultation"}
          radius={"25px"}
          width={"222px"}
          onClick={() => scrollToSection("calendly")}
        />
      </ButtonDiv>
    </BannerContainer>
  );
};

export default Banner;
