"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import PiChartCard from "./Pichart";
import { Box } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 70px)",
  position: "relative",
  "& .bg__chart": {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    zIndex: -1,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "100%",
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  zIndex: 1,
  width: "85%",
  height: "80%",
  backgroundColor: "#f5f8ff",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "100%",
  },
}));

const Sections = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "center",
  },
}));

const SectionContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "90%",
  height: "100%",
  "& > p": {
    width: "90%",
    margin: "10px 0 20px 0",
  },
  "& > ul": {
    listStyle: "none",
    padding: 0,
    "& > li": {
      margin: "15px 0 15px 35px",
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        left: "-35px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "block",
        width: "24px",
        height: "24px",
        backgroundColor: "rgb(62 125 255)",
        borderRadius: "50%",
      },
    },
    "& > li:nth-child(2):before": {
      backgroundColor: "rgb(35 71 185)",
    },
    "& > li:nth-child(3):before": {
      backgroundColor: "rgb(139 166 255)",
    },
    "& > li:nth-child(4):before": {
      backgroundColor: "rgb(134 150 202)",
    },
  },
  [theme.breakpoints.down("md")]: {
    height: "100%",
    "& > h6": {
      fontSize: "1.2rem",
    },
    "& > h4": {
      fontSize: "1.5rem",
    },
    "& > p": {
      width: "100%",
    },
    "& > ul": {
      "& > li": {
        margin: "10px 0 10px 20px",
        "&:before": {
          left: "-20px",
          width: "16px",
          height: "16px",
        },
      },
    },
  },
}));

const Chart = () => {
  return (
    <Container>
      <Content>
        <Sections>
          {/* <PiChartCard /> */}
          <Box component={'img'} src="../../static/b1.png" sx={{ height: { xs: 300, md:450 } , width: { xs: 320, md:500 }, paddingY: 2  }}  alt="test" />
        </Sections>
        <Sections data-aos="fade-up">
          <SectionContent>
            {/* <h6 style={{padding:5}} >About Us </h6> */}
            <h5 style={{padding:5}}>Turning ideas into reality with innovation. </h5>
            <p style={{padding:5}}>
            At BeltaTech, we specialize in delivering comprehensive IT consulting and innovative solutions designed to empower businesses in the digital era. Our approach is rooted in a seamless blend of input, process, and output, ensuring we consistently meet and exceed client expectations.</p>
          </SectionContent>
        </Sections>
      </Content>
    </Container>
  );
};

export default Chart;
