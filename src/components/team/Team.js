"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import CustomCard from "./CustomCard";

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
  "& .margin__bottom": {
    marginBottom: "4rem",
  },
}));

const CardsContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "2rem",
    width: "100%",
    padding: "0 2rem",
    marginBottom: "100px",
}));

const Team = () => {
  return (
    <Container>
      <h6>our team</h6>
      <h4>Meet out Team</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className="margin__bottom">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
          <CardsContainer>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
      </CardsContainer>
    </Container>
  );
};

export default Team;
