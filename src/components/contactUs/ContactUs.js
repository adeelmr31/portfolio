"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CustomButton from "../customBtn/CustomButton";
import SubmitIcon from "/static/Submit.svg";
import NewsVector from "/static/newsletter-shape.svg";
import { Stack, Typography } from "@mui/material";
import {Phone, PhoneIcon} from '@mui/icons-material';

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f8ff",
  position: "relative",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  margin: "100px auto 170px auto",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const LeftContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "50px",
  },
}));

const ContentMain = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "space-between",
}));

const ContentSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "50px",
  flexBasis: "calc(45% - 20px)",
  [theme.breakpoints.down("md")]: {
    flexBasis: "100%",
  },
}));

const HeadingContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "left",
  width: "100%",
  "& > h6": {
    color: "rgb(19, 27, 77)",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "20px",
  },
}));

const RightContainer = styled("div")(({ theme }) => ({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const FormMainContainer = styled("div")(({ theme }) => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  "& > h5": {
    color: "rgb(19, 27, 77)",
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  "& .form-group": {
    width: "100%",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    "& label": {
      color: "rgb(19, 27, 77)",
      fontSize: "14px",
      fontWeight: "500",
      marginBottom: "10px",
    },

    "& input, textarea": {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      height: "50px",
      border: "0.5px solid rgb(233 233 233)",
      resize: "vertical",
      "&:focus": {
        outline: "none",
        border: "0.5px solid #3E7DFF",
      },
      "&::placeholder": {
        color: "rgb(181, 179, 188)",
        fontSize: "16px",
        fontWeight: "500",
      },
    },
    "& textarea": {
      height: "160px",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const NewsLetter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  zIndex: "10",
  width: "80%",
  margin: "0 auto",
  height: "220px",
  backgroundColor: "#131b4d",
  position: "absolute",
  bottom: "-10%",
  [theme.breakpoints.down("md")]: {
    height: "300px",
  },
}));

const ContentNewsletter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  height: "85%",
  position: "relative",
  "& > .news-vector": {
    position: "absolute",
    right: "-60px",
    zIndex: "15",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "20px",
  },
}));

const InputDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const NewsDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  "& > h6": {
    color: "rgb(255, 255, 255)",
    fontSize: "45px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  "& > p": {
    color: "rgb(255, 255, 255)",
    fontSize: "18px",
    fontWeight: "500",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const InputDivSection = styled("div")(({ theme }) => ({
  height: "66px",
  width: "80%",
  borderRadius: "50px",
  position: "relative",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "hidden",
  zIndex: "20",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  "& > input": {
    height: "100%",
    width: "70%",
    borderRadius: "50px",
    border: "none",
    padding: "0 10px 0 30px",
    fontSize: "16px",
    "&::placeholder": {
      color: "rgb(99, 115, 129)",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const ButtonDiv = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "10px",
  width: "28%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ContactUs = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setEmail("");
  };
  return (
    <Container>
      <ContentContainer>
        <LeftContainer data-aos="fade-up">
          <div>
            <h6>contact us</h6>
            <h4>{`Let's talk about your problem.`}</h4>
          </div>
          <ContentMain>
            {/* card here */}
            <ContentSection sx={{ paddingX: '10%', marginLeft: { xs: "5px", md: "30px"}}} >
              <HeadingContent>
                <h6>Our Locations</h6>
                <p> <strong> {`->`} </strong> 39 Babar Block, <br /> New Garden Town, Lahore</p>

                <p style={{marginTop:"10px"}} ><strong> {`->`} </strong>183-C Nawab Town, <br /> Raiwand Road, Lahore</p>
                <Stack gap={7} direction={"row"} py={2} >
                <Stack direction={'row'}> <Phone sx={{color: '#3E7DFF'}}  /> <Typography>+923042466552</Typography> </Stack>
                <Stack direction={'row'}> <Phone sx={{color: '#3E7DFF'}} /> <Typography>+17542198797</Typography> </Stack>
                </Stack>
                
              </HeadingContent>
            </ContentSection>
          </ContentMain>
        </LeftContainer>
        <RightContainer data-aos="fade-up">
          <FormMainContainer>
            <h5>Send us a Message</h5>
            <div className="form-group">
              <label>Full Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label>Email Address*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label>Message*</label>
              <textarea
                className="form-control"
                placeholder="Type your message here"
              />
            </div>
            <CustomButton
              title={"Send Message"}
              bg={"#3E7DFF"}
              radius={"50px"}
              color={"#fff"}
            />
          </FormMainContainer>
        </RightContainer>
      </ContentContainer>
      <NewsLetter data-aos="fade-up">
        <ContentNewsletter>
          <NewsVector className="news-vector" />

          <NewsDiv>
            <h6>Newsletter</h6>
            <p>
            Stay connected! Subscribe to our newsletter for the latest updates, insights, and exclusive content delivered straight to your inbox.
            </p>
          </NewsDiv>
          <InputDiv>
            <InputDivSection>
              <input type="text" placeholder="Enter email address"  value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <ButtonDiv onClick={handleSubmit}  >
                <CustomButton
                  endIcon={<SubmitIcon />}
                  title={"Submit"}
                  bg={"#3E7DFF"}
                  radius={"50px"}
                  color={"#fff"}
                
                />
              </ButtonDiv>
            </InputDivSection>
          </InputDiv>
        </ContentNewsletter>
      </NewsLetter>
    </Container>
  );
};

export default ContactUs;
