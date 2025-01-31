import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import NewsCardMedia from "./card";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  margin: "0 auto 0 auto",
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
  alignItems: "strech",
  width: "80%",
  flexWrap: "wrap",
  gap: "20px",
}));

const NewsCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/artificial-intelligence"
        );
        const data = await response.json();
        setBlogs(data.items.slice(0, 3) || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <Container>
      <h6 data-aos="fade-up">LATEST NEWS</h6>
      <h4 data-aos="fade-up">Recent News & Blogs</h4>
      <p data-aos="fade-up">
      Stay updated with the latest insights, trends, and news from industry.
      </p>
      <p data-aos="fade-up" className="margin__bottom">
      Explore our latest blogs and articles for valuable insights, tips, and updates to stay ahead in the digital landscape.
      </p>
      <NewsContainer>

          {blogs.map((blog, index) => (
            <NewsCardMedia key={index} data={blog} />
          ))}

      </NewsContainer>
    </Container>
  );
};

export default NewsCard;
