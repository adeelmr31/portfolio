"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import FooterBg from "/static/footer-shape-2.svg";
import Discord from "/static/discord.svg";
import X from "/static/twitter.svg";
import Linkedin from "/static/Linkedin.svg";
import YouTube from "/static/youtube.svg";

const Container = styled("div")(({ theme }) => ({
  marginTop: "100px",
  position: "relative",
  "& .bg__footer": {
    position: "absolute",
    top: "0",
    left: "0",
  },
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "80%",
  margin: "0 auto",
  padding: "5rem 0",
}));

const ContentMain = styled("div")(({ theme, flexBasis }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexBasis: flexBasis ? `calc(${flexBasis} - 1rem)` : "calc(25% - 1rem)",
  gap: "2rem",
}));

const SocialLinks = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  "& .social__items": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#f5f8ff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3f7eff",
      "& svg": {
        fill: "#fff",
      },
    },
  },
}));

const QuickLinks = () => {
  return (
    <Container>
      <FooterBg className="bg__footer" />
      <ContentContainer>
        <ContentMain flexBasis={"30%"}>
          <img src="/static/logo.svg" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            quam nec ante fringilla vel at erat convallis elit.
          </p>
          <SocialLinks className="social__links">
            <div className="social__items">
              <Discord />
            </div>
            <div className="social__items">
              <X />
            </div>
            <div className="social__items">
              <Linkedin />
            </div>
            <div className="social__items">
              <YouTube />
            </div>
          </SocialLinks>
        </ContentMain>
        <ContentMain flexBasis={"15%"}>2</ContentMain>
        <ContentMain flexBasis={"15%"}>3</ContentMain>
        <ContentMain flexBasis={"30%"}>4</ContentMain>
      </ContentContainer>
    </Container>
  );
};

export default QuickLinks;
