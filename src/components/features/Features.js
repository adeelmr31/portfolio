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
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
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
      <h6 data-aos="fade-up">What We Provide</h6>
      <h4 data-aos="fade-up">OUR SERVICES</h4>
      <p data-aos="fade-up">
      We deliver innovative, scalable solutions tailored to drive your business growth and success.
      </p>
      <CardsDiv data-aos="fade-up">
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/web.png" style={{height:40, width:40}} alt="icon" />
          </IconDiv>
          <h5>Web Developmennt</h5>
          <p>
          Dynamic website creation to showcase your brand with intuitive navigation.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/mobile.png" alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>Mobile Applications</h5>
          <p>
          Tailored app development for seamless user experiences on various devices.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/custom.png" alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>Custom Softwares</h5>
          <p>
          Personalized solutions to optimize business operations and efficiency.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/design.png" alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>Creative Design Solutions</h5>
          <p>
          We create beautiful, user-friendly designs that bring your brand to life and make every interaction meaningful.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/recruitment.png"alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>Internation Recruitment</h5>
          <p>
          Connecting global talent with opportunities, helping businesses and individuals thrive across borders.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/seo.png" alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>SEO</h5>
          <p>
          Boosting your online visibility with tailored SEO strategies that drive traffic and deliver results.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/staff.png" alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>Staff Augmentation</h5>
          <p>
          Empowering your team with top talent through flexible and scalable staff augmentation solutions.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/marketing.png" alt="icon" style={{height:40, width:40}}/>
          </IconDiv>
          <h5>Digital Marketing Solutions</h5>
          <p>
          Helping your brand grow with data-driven digital marketing strategies that engage, convert, and deliver results.
          </p>
        </CardItem>
        <CardItem>
          <IconDiv>
            <img src="../../../static/services/cyber.png" alt="icon" style={{height: 40, width:40}} />
          </IconDiv>
          <h5>Cyber Security</h5>
          <p>
          Protecting your business with advanced cybersecurity solutions that safeguard your data and ensure peace of mind.
          </p>
        </CardItem>
      </CardsDiv>
    </Container>
  );
};

export default Features;
