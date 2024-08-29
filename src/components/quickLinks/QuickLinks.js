"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import FooterBg from "/static/footer-shape-2.svg";

const Container = styled("div")(({ theme }) => ({
  marginTop: "100px",
  height: "60vh",
  position: "relative",
  "& .bg__footer": {
    position: "absolute",
    top: "0",
    left: "0",
  },
}));

const QuickLinks = () => {
  return (
    <Container>
      <FooterBg className="bg__footer" />
      QuickLinks
    </Container>
  );
};

export default QuickLinks;
