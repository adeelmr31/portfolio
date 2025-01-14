"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import CustomAccordion from "./CustomAccordion";
import FaqBg from "/static/faqBgShape.svg";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  margin: "0 auto 0 auto",
  backgroundColor: "#f5f8ff",
  padding: "8rem 0",
  position: "relative",
  "& .bg__faq": {
    position: "absolute",
    top: "55%",
    left: "0",
  },
  "& > h4": {
    marginBottom: "1rem",
  },
  "& .margin__bottom": {
    marginBottom: "4rem",
  },
}));

const AccordionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
}));

const FAQ = () => {
  return (
    <Container>
      <FaqBg className="bg__faq" />
      <h6 data-aos="fade-up">FAQ</h6>
      <h4 data-aos="fade-up">Frequently Asked Questions</h4>
      <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p  data-aos="fade-up"className="margin__bottom">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
      <AccordionContainer>
        <CustomAccordion />
      </AccordionContainer>
    </Container>
  );
};

export default FAQ;
