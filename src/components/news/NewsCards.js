"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import UserIcon from "/static/userIcon.svg";
import DateIcon from "/static/date.svg";
import CustomButton from "../customBtn/CustomButton";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  margin: "100px auto 0 auto",
  padding: "8rem 0",
  [theme.breakpoints.down("md")]: {
    padding: "0",
    marginBottom: '2rem'
  },

  "& > h4": {
    marginBottom: "1rem",
  },
  "& .margin__bottom": {
    marginBottom: "4rem",
  },
}));

const NewsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "80%",
  flexWrap: "wrap",
  gap: "20px",
}));

const ImgCard = styled(Card)(({ theme }) => ({
  flexBasis: "calc(33.33% - 1rem)",
  backgroundColor: "#f5f8ff",
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: {
    flexBasis: "calc(100% - 1rem)",
    margin: "0 auto",
  },
  "& .date__div": {
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: "1rem",
    "& .items": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      width: "50%",
      "& :first-child": {
        width: "30px",
      },
    },
  },
  "& .heading__font": {
    fontSize: "18px",
    fontWeight: "700",
    color: "#2d3562",
    textAlign: "left",
    width: "100%",
    cursor: "pointer",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      color: "rgb(62, 125, 255)",
    },
  },
}));

const NewsCard = () => {
  return (
    <Container>
      <h6 data-aos="fade-up">LATEST NEWS</h6>
      <h4 data-aos="fade-up">Recent News & Blogs</h4>
      <p data-aos="fade-up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p data-aos="fade-up" className="margin__bottom">
        Nunc sed congue arcu, In et dignissim quam condimentum vel.
      </p>
      <NewsContainer>
        <ImgCard data-aos="fade-up">
          <CardMedia
            component="img"
            alt="news"
            height="250"
            image="/static/news.avif"
          />
          <CardContent sx={{ padding: "2rem" }}>
            <div className="date__div">
              <div className="items">
                <UserIcon />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(99, 115, 129)",
                    textAlign: "left",
                    lineHeight: "32px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  John Doe
                </Typography>
              </div>
              <div className="items">
                <DateIcon />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(99, 115, 129)",
                    textAlign: "left",
                    lineHeight: "32px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Aug 21, 2024
                </Typography>
              </div>
            </div>
            <Typography
              className="heading__font"
              gutterBottom
              variant="h5"
              component="div"
            >
              Laboris nisi aliquip dium exiuliym commo cons equat duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgb(99, 115, 129)",
                textAlign: "left",
                lineHeight: "32px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: "0 2rem 2rem" }}>
            <CustomButton
              bg={"#3e7dff"}
              color={"#fff"}
              width={"150px"}
              radius={"50px"}
              title={"Read More"}
            />
          </CardActions>
        </ImgCard>
        <ImgCard data-aos="fade-up">
          <CardMedia
            component="img"
            alt="news"
            height="250"
            image="/static/news.avif"
          />
          <CardContent sx={{ padding: "2rem" }}>
            <div className="date__div">
              <div className="items">
                <UserIcon />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(99, 115, 129)",
                    textAlign: "left",
                    lineHeight: "32px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  John Doe
                </Typography>
              </div>
              <div className="items">
                <DateIcon />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(99, 115, 129)",
                    textAlign: "left",
                    lineHeight: "32px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Aug 21, 2024
                </Typography>
              </div>
            </div>
            <Typography
              className="heading__font"
              gutterBottom
              variant="h5"
              component="div"
            >
              Laboris nisi aliquip dium exiuliym commo cons equat duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgb(99, 115, 129)",
                textAlign: "left",
                lineHeight: "32px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: "0 2rem 2rem" }}>
            <CustomButton
              bg={"#3e7dff"}
              color={"#fff"}
              width={"150px"}
              radius={"50px"}
              title={"Read More"}
            />
          </CardActions>
        </ImgCard>
        <ImgCard data-aos="fade-up">
          <CardMedia
            component="img"
            alt="news"
            height="250"
            image="/static/news.avif"
          />
          <CardContent sx={{ padding: "2rem" }}>
            <div className="date__div">
              <div className="items">
                <UserIcon />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(99, 115, 129)",
                    textAlign: "left",
                    lineHeight: "32px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  John Doe
                </Typography>
              </div>
              <div className="items">
                <DateIcon />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgb(99, 115, 129)",
                    textAlign: "left",
                    lineHeight: "32px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Aug 21, 2024
                </Typography>
              </div>
            </div>
            <Typography
              className="heading__font"
              gutterBottom
              variant="h5"
              component="div"
            >
              Laboris nisi aliquip dium exiuliym commo cons equat duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgb(99, 115, 129)",
                textAlign: "left",
                lineHeight: "32px",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: "0 2rem 2rem" }}>
            <CustomButton
              bg={"#3e7dff"}
              color={"#fff"}
              width={"150px"}
              radius={"50px"}
              title={"Read More"}
            />
          </CardActions>
        </ImgCard>
      </NewsContainer>
    </Container>
  );
};

export default NewsCard;
