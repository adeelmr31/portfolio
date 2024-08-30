"use client";
import React from "react";
import { styled } from "@mui/material/styles";

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

const CardsDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "5rem",
  width: "100%",
  flexWrap: "wrap",
}));

const CardItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "30%",
  gap: "1rem",
  marginBottom: "4rem",
}));

const IconDiv = styled("div")(({ theme }) => ({
  width: "80px",
  height: "80px",
  backgroundColor: "rgb(62 125 255)",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Features = () => {
  return (
    <Container>
      <h6 data-aos="fade-up">CRYPTO FEATURE</h6>
      <h4 data-aos="fade-up">Best Features</h4>
      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p data-aos="fade-up">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
      <CardsDiv data-aos="fade-up">
        <CardItem>
          <IconDiv>
            <img src="../../../static/safety.svg" alt="icon" />
          </IconDiv>
          <h5>Safe & Secure</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
            labore labore labore et dolor .
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/Bonus.svg" alt="icon" />
          </IconDiv>
          <h5>Early Bonus</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
            labore labore labore et dolor .
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/access.svg" alt="icon" />
          </IconDiv>
          <h5>Universal Access</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
            labore labore labore et dolor .
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/storage.svg" alt="icon" />
          </IconDiv>
          <h5>Secure Storage</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
            labore labore labore et dolor .
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/cost.svg" alt="icon" />
          </IconDiv>
          <h5>Low Cost</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
            labore labore labore et dolor .
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/profit.svg" alt="icon" />
          </IconDiv>
          <h5>Several Profit</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod tempor
            labore labore labore et dolor .
          </p>
        </CardItem>
      </CardsDiv>
    </Container>
  );
};

export default Features;
