"use client";
import React from "react";
import { styled } from "@mui/material/styles";

const FooterContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "100%",
  "& p": {
    width: "100%",
    textAlign: "center",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <p>© Crypto - All Rights Reserved, Crafted by Nauman</p>
    </FooterContainer>
  );
};

export default Footer;
