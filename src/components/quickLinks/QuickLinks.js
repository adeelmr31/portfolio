"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import FooterBg from "/static/footer-shape-2.svg";
import Discord from "/static/discord.svg";
import X from "/static/twitter.svg";
import Linkedin from "/static/Linkedin.svg";
import YouTube from "/static/youtube.svg";
import Cal from "/static/cal.svg";
import NewsCardFooter from "./card";

const Container = styled("div")(({ theme }) => ({
  marginTop: "100px",
  position: "relative",
  "& .bg__footer": {
    position: "absolute",
    top: "0",
    left: "0",
  },
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "80%",
  margin: "0 auto",
  padding: "5rem 0",
  borderBottom: "1px solid #e0e0e0",
  [theme.breakpoints.down("md")]: {
    gap: "2rem",
  },
}));

const ContentMain = styled("div")(({ theme, flexBasis }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexBasis: flexBasis ? `calc(${flexBasis} - 1rem)` : "calc(25% - 1rem)",
  gap: "2rem",
  [theme.breakpoints.down("md")]: {
    flexBasis: "calc(100% - 1rem)",
  },
  "&:nth-child(2)": {
    [theme.breakpoints.down("md")]: {
      flexBasis: "calc(50% - 1rem)",
    },
  },
  "&:nth-child(3)": {
    [theme.breakpoints.down("md")]: {
      flexBasis: "calc(50% - 1rem)",
    },
  },
}));

const SocialLinks = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  "& .social__items": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#f5f8ff",
    cursor: "pointer",
    "& svg": {
      fill: "#637381",
    },
    "&:hover": {
      backgroundColor: "#3f7eff",
      "& svg": {
        fill: "#fff",
      },
    },
  },
}));

const QuickLinksDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  "& > h1": {
    fontSize: "24px",
    fontWeight: "700",
    color: "rgb(8, 3, 33)",
  },
  "& .links": {
    marginTop: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "& a": {
      fontSize: "16px",
      color: "#637381",
      cursor: "pointer",
      fontWeight: "500",
      "&:hover": {
        color: "rgb(62, 125, 255)",
      },
    },
  },
  "& .news__div": {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "flex-start",
    "& .details": {
      display: "flex",
      flexDirection: "column",
      "& .hover__text:hover": {
        color: "rgb(62, 125, 255)",
      },
      "& p": {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
      },
    },
    "& img": {
      width: "75px",
      height: "75px",
      objectFit: "cover",
      borderRadius: "10px",
    },
  },
}));

const QuickLinks = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/artificial-intelligence"
        );
        const data = await response.json();
        setBlogs(data.items.slice(3, 5) || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const extractThumbnail = (html) => {
    const imgMatch = html.match(/<img[^>]+src="([^">]+)"/); // Match the first <img> tag and extract the src
    return imgMatch ? imgMatch[1] : "/static/defaultThumbnail.png"; // Fallback image
};
  return (
    <Container>
      <FooterBg className="bg__footer" />
      <ContentContainer>
        <ContentMain flexBasis={"30%"}>
          <img data-aos="fade-up" src="/static/beltaLogo.png" height={'100px'} alt="logo" />
          <p data-aos="fade-up">
          From startups to enterprises, we provide cutting-edge, scalable solutions that evolve with your business, driving innovation and long-term success.
          </p>
          <SocialLinks data-aos="fade-up" className="social__links">
            <div className="social__items">
              <X />
            </div>
            <div className="social__items">
              <Linkedin />
            </div>
            <div className="social__items">
              <YouTube />
            </div>
          </SocialLinks>
        </ContentMain>
        <ContentMain flexBasis={"25%"}>
          <QuickLinksDiv>
            <h1>Quick Links</h1>
            <div data-aos="fade-up" className="links">
              <a href="#">Home</a>
              <a href="#features">Services</a>
              <a href="#testimonials">Customers</a>
              <a href="#chart">About Us</a>
              <a href="#calendly">Schedule Free Consultation</a>
              <a href="#faq">FAQs</a>
            </div>
          </QuickLinksDiv>
        </ContentMain>
        <ContentMain flexBasis={"35%"}>
          <QuickLinksDiv>
            <h1 data-aos="fade-up">Latest From Technology</h1>
          {blogs.map((blog, index) => (
            <NewsCardFooter key={index} data={blog} />
          ))}
          </QuickLinksDiv>
        </ContentMain>
      </ContentContainer>
    </Container>
  );
};

export default QuickLinks;
