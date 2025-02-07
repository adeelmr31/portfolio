"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";

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
  marginTop: "5rem",
  width: "100%",
  flexWrap: "wrap",
}));

const CardItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  // width: "30%",
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
      <Box data-aos="fade-up">
        <Grid container >
          <Grid item xs={12} sm={12} md={6} lg={4} p={2}  justifyContent={'center'}  >
            <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv >
              <img src="../../../static/services/web.png" style={{ height: 40, width: 40 }} alt="icon" />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Web Development</h5></Box>
            <p>
              Drive business growth with powerful, customized web application development designed to meet your unique objectives.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/mobile.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Mobile Applications</h5></Box>
            <p>
              Deliver seamless, high-quality mobile app experiences with innovative development, designed to boost engagement and meet business needs.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/custom.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Custom Softwares</h5></Box>
            <p>

              Tailored custom software solutions designed to streamline business operations, enhance productivity, and improve overall efficiency.
            </p>
          </Grid>
        {/* </CardsDiv>
        <CardsDiv > */}
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/design.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Creative Design Solutions</h5></Box>
            <p>
            We design stunning, user-friendly interfaces that enhance brand identity, improve user engagement, and create meaningful digital experiences.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/recruitment.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>International Recruitment</h5></Box>
            <p>
              Connecting global talent with the right opportunities, enabling businesses and professionals to grow, collaborate, and succeed worldwide.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/seo.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>SEO</h5></Box>
            <p>
              Enhancing your online visibility with customized SEO strategies that attract traffic, increase engagement, and deliver measurable results.
            </p>
          </Grid>
        {/* </CardsDiv>
        <CardsDiv > */}
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/staff.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Staff Augmentation</h5></Box>
            <p>
            Empowering your team with top talent through flexible, scalable staff augmentation solutions for seamless integration and growth.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/marketing.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Digital Marketing Solutions</h5></Box>
            <p>
              Helping your brand grow with data-driven digital marketing strategies that engage, convert, and deliver results.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} p={2} justifyContent={'center'} >
          <Box display={'flex'} justifyContent={'center'} py={2} >
            <IconDiv>
              <img src="../../../static/services/cyber.png" alt="icon" style={{ height: 40, width: 40 }} />
            </IconDiv>
            </Box>
            <Box minHeight={'80px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} ><h5>Cyber Security</h5></Box>
            <p>
              Protecting your business with advanced cybersecurity solutions that safeguard your data and ensure peace of mind.
            </p>
          </Grid>
        </Grid >
      </Box>
    </Container>
  );
};

export default Features;
