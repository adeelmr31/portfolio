"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import CustomButton from "../customBtn/CustomButton";
import Bitcoin from "../../../static/BTC.svg";
import Ethcoin from "../../../static/BTC3.svg";
import Chaincoin from "../../../static/BTC1.svg";
import Polcoin from "../../../static/BTC4.svg";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "80%",
  margin: "100px auto 0 auto",
  "& > h4": {
    marginBottom: "1rem",
  },
}));

const TimelineDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  margin: "80px auto",
  width: "100%",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    width: "2px",
    height: "100%",
    backgroundColor: "#f5f8ff",
  },
  "& .right": {
    position: "relative",
    width: "100%",
    justifyContent: "flex-end",
    display: "flex",
    "& .right__margin": {
      marginLeft: "50px",
      textAlign: "left !important",
      marginRight: "0 !important",
      alignItems: "flex-start !important",
    },
  },
  "& > div": {
    position: "relative",
    width: "100%",
    padding: "20px",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      border: "5px solid rgb(62 125 255)",
    },
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
  width: "45%",
  backgroundColor: "rgb(245 248 255)",
  borderRadius: "10px",
  // height: "230px",
  marginRight: "50px",
  padding: "20px",
  textAlign: "right",
  "& > h5": {
    fontSize: "20px",
    fontWeight: "700",
    color: "rgb(8, 3, 33)",
    lineHeight: "28px",
  },
}));

const Timeline = () => {
  return (
    <Container>
      <h6 data-aos="fade-up">RoadMap</h6>
      <h4 data-aos="fade-up">The Timeline</h4>
      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p data-aos="fade-up">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
      <TimelineDiv data-aos="fade-up">
        <div>
          <Content data-aos="fade-up">
            <h5>Feb 25, 2025</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel
            </p>
            <CustomButton
              color={"rgb(99 115 129)"}
              width={"fit-content"}
              height={"34px"}
              fontSize={"12px"}
              bg={"#fff"}
              startIcon={<Bitcoin />}
              title="Bitcoin"
              radius={"25px"}
              subTitle="4.5%"
              hoverColor={"rgb(99 115 129)"}
            />
          </Content>
        </div>
        <div className="right">
          <Content data-aos="fade-up" className="right__margin">
            {" "}
            <h5>Jan 14, 2026</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel
            </p>
            <CustomButton
              color={"rgb(99 115 129)"}
              width={"fit-content"}
              height={"34px"}
              fontSize={"12px"}
              bg={"#fff"}
              startIcon={<Ethcoin />}
              title="Ethereum"
              radius={"25px"}
              subTitle="2.5%"
              hoverColor={"rgb(99 115 129)"}
            />
          </Content>
        </div>
        <div>
          <Content data-aos="fade-up">
            <h5>Feb 25, 2025</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel
            </p>
            <CustomButton
              color={"rgb(99 115 129)"}
              width={"fit-content"}
              height={"34px"}
              fontSize={"12px"}
              bg={"#fff"}
              startIcon={<Chaincoin />}
              title="Chainlink"
              radius={"25px"}
              subTitle="4.5%"
              hoverColor={"rgb(99 115 129)"}
            />
          </Content>
        </div>
        <div className="right">
          <Content data-aos="fade-up" className="right__margin">
            {" "}
            <h5>Jan 14, 2026</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel
            </p>
            <CustomButton
              color={"rgb(99 115 129)"}
              width={"fit-content"}
              height={"34px"}
              fontSize={"12px"}
              bg={"#fff"}
              startIcon={<Polcoin />}
              title="Polygon"
              radius={"25px"}
              subTitle="2.5%"
              hoverColor={"rgb(99 115 129)"}
            />
          </Content>
        </div>
      </TimelineDiv>
    </Container>
  );
};

export default Timeline;
