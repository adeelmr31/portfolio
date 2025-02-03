"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";
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
  display: "flex",
  flexDirection: 'row',
justifyContent:'space-around',

  // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "2rem",
  padding: "0 2rem",
  marginBottom: "100px",
}));

const Team = () => {
  return (
    <Container>
      <h6 data-aos="fade-up">our team</h6>
      <h4 data-aos="fade-up">Meet our Team</h4>
      {/* <p data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p> */}
      {/* <p data-aos="fade-up" className="margin__bottom">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p> */}
      <Grid container spacing={2} justifyContent={'space-around'} >
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomCard name={'Kaneez Fatima'} src={'../../../static/kaneez.png'} position={'COO & Founder'} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomCard name={'Muhammad Adeel'} src={'../../../static/adeel.png'} position={'MD & Co-Founder'} />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomCard name={'Sakeena Ibad Khawaja'} src={'../../../static/sakeena.png'} position={'Project Manager'} />
      </Grid>
      {/* <Grid item xs={12} sm={6} md={6} lg={3}>
        <CustomCard name={'Kaneez Fatima'} src={'../../../static/kaneez.png'} position={'MD & Co-Founder'} />
      </Grid> */}
    </Grid>
    </Container>
  );
};

export default Team;
