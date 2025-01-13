"use client";
import React from "react";
import { styled } from "@mui/material/styles";

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
    gap: "50px",
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
        Visionary Partners
      </h1>
      <ImgDiv>
        <div className="svg__brands">
          {/* <BrandsOne /> */}
          <img src="static/clients/futurevision.png" style={{height: 60, width: 150}}  />
          <img src="https://i0.wp.com/corporate.cptechsol.com/wp-content/uploads/2021/03/cptechsol.jpg?fit=143%2C34&ssl=1" style={{height: 50, width: 150}}  />
          <img src="static/clients/eByte.png" style={{height: 60, width: 250}}   />
          <img src="static/clients/techroble.png" style={{height: 60,}}   />
        </div>
      </ImgDiv>
    </Container>
  );
};

export default Partners;
