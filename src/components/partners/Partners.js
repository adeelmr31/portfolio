"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import BrandsOne from "app/assets/images/brands/uideck.svg";
import BrandsTwo from "app/assets/images/brands/tailgrids.svg";
import BrandsThree from "app/assets/images/brands/lineicons.svg";
import BrandsFour from "app/assets/images/brands/ayroui.svg";
import BrandsFive from "app/assets/images/brands/plainadmin.svg";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "195px",
  width: "80%",
  margin: "0 auto",
  borderBottom: "1px solid rgb(243 244 244)",
  borderTop: "1px solid rgb(243 244 244)",
  "& > h1": {
    color: "rgb(8, 3, 33)",
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
    },
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
    marginTop: "4rem",
  },
}));

const ImgDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  "& .svg__brands": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    "& svg": {
      filter: "contrast(0)",
      cursor: "pointer",
      "&:hover": {
        filter: "contrast(1)",
      },
    },
  },
}));

const Partners = () => {
  return (
    <Container data-aos="fade-up">
      <h1 className="heading">
        Join the 20,000+ companies using the our platform
      </h1>
      <ImgDiv>
        <div className="svg__brands">
          <BrandsOne />
          <BrandsTwo />
          <BrandsThree />
          <BrandsFour />
          <BrandsFive />
        </div>
      </ImgDiv>
    </Container>
  );
};

export default Partners;
