"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import BgTestimonials from "/static/testimonial.svg";
import CustomAccordion from "./CustomAccordion";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  margin: "100px auto 0 auto",
  backgroundColor: "#f5f8ff",
  padding: "8rem 0",
  "& > h4": {
    marginBottom: "1rem",
  },
  "& .margin__bottom": {
    marginBottom: "4rem",
  },
}));

const TestimonialsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "2rem",
  "& > div": {
    backgroundColor: "#fff",
    flexBasis: "calc(40% - 1rem)",
    height: "250px",
    borderRadius: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    "& .bg": {
      position: "absolute",
      top: "0",
      right: "0",
    },
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  zIndex: "100",
  width: "100%",
  height: "100%",
  padding: "2rem",
  "& > p": {
    textAlign: "left",
  },
}));

const ImgUser = styled("div")(({ theme }) => ({
  width: "100%",
  height: "80px",
  display: "flex",
  gap: "1.4rem",
  marginBottom: "2rem",
  "& .user__info": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    "& h5": {
      fontSize: "1.2rem",
      fontWeight: "bold",
      lineHeight: "1.5rem",
    },
    "& p": {
      fontSize: "14px",
      color: "rgb(99, 115, 129)",
    },
  },
  "& .img__user": {
    width: "80px",
    height: "80px",
    overflow: "hidden",
    borderRadius: "8px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
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
      <h6>FAQ</h6>
      <h4>Frequently Asked Questions</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className="margin__bottom">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
          <AccordionContainer>
              <CustomAccordion />
      </AccordionContainer>
    </Container>
  );
};

export default FAQ;
