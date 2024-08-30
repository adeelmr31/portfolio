"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import FooterBg from "/static/footer-shape-2.svg";
import Discord from "/static/discord.svg";
import X from "/static/twitter.svg";
import Linkedin from "/static/Linkedin.svg";
import YouTube from "/static/youtube.svg";
import Cal from "/static/cal.svg";

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
  borderBottom: "1px solid #e0e0e0",
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
    "& svg": {
      fill: "#637381",
    },
    "&:hover": {
      backgroundColor: "#3f7eff",
      "& svg": {
        fill: "#fff",
      },
    },
  },
}));

const QuickLinksDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& > h1": {
    fontSize: "24px",
    fontWeight: "700",
    color: "rgb(8, 3, 33)",
  },
  "& .links": {
    marginTop: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "& a": {
      fontSize: "16px",
      color: "#637381",
      cursor: "pointer",
      fontWeight: "500",
      "&:hover": {
        color: "rgb(62, 125, 255)",
      },
    },
  },
  "& .news__div": {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "flex-start",
    "& .details": {
      display: "flex",
      flexDirection: "column",
      "& .hover__text:hover": {
        color: "rgb(62, 125, 255)",
      },
      "& p": {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
      },
    },
    "& img": {
      width: "75px",
      height: "75px",
      objectFit: "cover",
      borderRadius: "10px",
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
        <ContentMain flexBasis={"15%"}>
          <QuickLinksDiv>
            <h1>Quick Links</h1>
            <div className="links">
              <a href="#">What is ico</a>
              <a href="#">Roadmap</a>
              <a href="#">Whitepaper</a>
              <a href="#">Social Network</a>
              <a href="#">Join Us Now</a>
            </div>
          </QuickLinksDiv>
        </ContentMain>
        <ContentMain flexBasis={"15%"}>
          <QuickLinksDiv>
            <h1>Supports</h1>
            <div className="links">
              <a href="#">Setting & Privacy</a>
              <a href="#">Help & Support</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">24/7 Support</a>
              <a href="#">On Point FAQs</a>
            </div>
          </QuickLinksDiv>
        </ContentMain>
        <ContentMain flexBasis={"35%"}>
          <QuickLinksDiv>
            <h1>News & Post</h1>
            <div className="news__div">
              <img src="/static/userImg.jpg" alt="news" />
              <div className="details">
                <p className="hover__text">
                  Laboris nisi aliquip dium exiuliym commo cons...
                </p>
                <p>
                  <span>
                    <Cal />
                  </span>
                  Aug 21, 2024
                </p>
              </div>
            </div>
            <div className="news__div">
              <img src="/static/userImg.jpg" alt="news" />
              <div className="details">
                <p className="hover__text">
                  Laboris nisi aliquip dium exiuliym commo cons...
                </p>
                <p>
                  <span>
                    <Cal />
                  </span>
                  Aug 21, 2024
                </p>
              </div>
            </div>
          </QuickLinksDiv>
        </ContentMain>
      </ContentContainer>
    </Container>
  );
};

export default QuickLinks;
