"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import BgTestimonials from "/static/testimonial.svg";

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
    [theme.breakpoints.down("md")]: {
      flexBasis: "calc(80% - 1rem)",
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
      width: "100%",
      textAlign: "left",
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

const Testimonials = () => {
  return (
    <Container>
      <h6 data-aos="fade-up">TESTIMONIALS</h6>
      <h4 data-aos="fade-up">{`What Our Client Say's`}</h4>
      <p data-aos="fade-up">
       We value our clients and their experiences with us. 
      </p>
      <p data-aos="fade-up">
      {`Here’s what they say about our commitment to excellence and strong relationships.`}
      </p>
      <TestimonialsContainer sx={{mt:2}}>
        <div data-aos="fade-right">
          <BgTestimonials className="bg" />
          <Content>
            <ImgUser>
              <div className="img__user">
                <img src="/static/naseer.jpeg" alt="user" />
              </div>
              <div className="user__info">
                <h5>Naseer Akhtar</h5>
                <p>CEO @ Techroble.</p>
              </div>
            </ImgUser>
            <p>
             {` “The custom software solution BeltaTech created for us streamlined our operations, boosted efficiency, and helped us stay ahead of the competition.”`}
            </p>
          </Content>
        </div>
        <div data-aos="fade-left">
          <BgTestimonials className="bg" />
          <Content>
            <ImgUser>
              <div className="img__user">
                <img src="/static/satya.webp" alt="user" />
              </div>
              <div className="user__info">
                <h5>Satyanarayana Raju</h5>
                <p>CEO & Founder @ FutureVision360.</p>
              </div>
            </ImgUser>
            <p>
              {`“BeltaTech’s international recruitment service connected us with top global talent, streamlining our hiring process and helping us scale effectively.”`}
            </p>
          </Content>
        </div>
        <div data-aos="fade-right">
          <BgTestimonials className="bg" />
          <Content>
            <ImgUser>
              <div className="img__user">
                <img src="/static/satya.webp" alt="user" />
              </div>
              <div className="user__info">
                <h5>Gaurav Kasturia</h5>
                <p>CEO & Founder @ Ebyte Solutions.</p>
              </div>
            </ImgUser>
            <p>
              {`“Exceptional service and expertise! BeltaTech's IT consulting helped us optimize our processes, improve efficiency, and drive significant growth.”`}
            </p>
          </Content>
        </div>
        <div data-aos="fade-left">
          <BgTestimonials className="bg" />
          <Content>
            <ImgUser>
              <div className="img__user">
                <img src="/static/qarab.jpeg" alt="user" />
              </div>
              <div className="user__info">
                <h5>Qarab Raza </h5>
                <p>CEO @ CPTECHSOL.</p>
              </div>
            </ImgUser>
            <p>
              {`“BeltaTech provided a flexible, scalable staff augmentation solution that exceeded expectations, with seamless team integration and impressive results.”`}
            </p>
          </Content>
        </div>
      </TestimonialsContainer>
    </Container>
  );
};

export default Testimonials;
