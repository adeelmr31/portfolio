"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import CustomButton from "../customBtn/CustomButton";
import PlayStore from "/static/PlayStore.svg";
import AppStore from "/static/AppStore.svg";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  margin: "0 auto",
  height: "calc(100vh - 64px)",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "auto",
    padding: "5rem 0",
    gap: "3rem",
  },
}));

const LeftSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "40%",
  height: "100%",
  textAlign: "left",
  "& h4": {
    margin: "10px 0 20px 0",
    lineHeight: "2.5rem",
  },
  "& p": {
    marginBottom: "30px",
  },
  "& .app-buttons": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "20px",
    alignItems: "center",
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

const RightSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

const DownloadApp = () => {
  return (
    <Container>
      <LeftSection>
        <h6 data-aos="fade-up">Download Our App</h6>
        <h4 data-aos="fade-up">The choice is yours, we've got you covered</h4>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et
          pretium quam mi a eros sed molestie est.
        </p>
        <div data-aos="fade-up" className="app-buttons">
          <CustomButton
            startIcon={<AppStore />}
            title={"App Store"}
            bg={"#2d2947"}
            radius={"50px"}
            color={"#fff"}
            width={"160px"}
            height={"60px"}
          />
          <CustomButton
            startIcon={<PlayStore />}
            title={"Play Store"}
            bg={"transparent"}
            border={"1px solid #2d2947"}
            radius={"50px"}
            color={"rgb(99, 115, 129)"}
            width={"160px"}
            height={"60px"}
            hoverBorder={"#2d2947"}
            hoverColor={"rgb(99, 115, 129)"}
          />
        </div>
      </LeftSection>
      <RightSection>
        {/* <AppImg /> */}
        <img data-aos="fade-up" src="/static/app-image-2.webp" alt="app" />
      </RightSection>
    </Container>
  );
};

export default DownloadApp;
