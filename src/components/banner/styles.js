"use client";

import { styled } from "@mui/material/styles";

const BannerContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  background:
    "linear-gradient(to bottom, #d9e5ff 0%, rgba(219, 231, 255, 0) 100%)",

  "& .banner__first": {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
  },

  "& .banner__second": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
  },
}));

const TextAreaDiv = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "720px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "& h1": {
    fontSize: "45px",
    fontWeight: 700,
    color: "rgb(8, 3, 33)",
    textAlign: "center",
    marginBottom: "16px",
  },
  "& p": {
    fontSize: "18px",
    color: "rgb(99, 115, 129)",
    textAlign: "center",
    marginBottom: "16px",
    fontWeight: 500,
    lineHeight: "28px",
    maxWidth: '650px',
  },
  "& button": {
    width: "200px",
    height: "50px",
    borderRadius: "25px",
    backgroundColor: "#3e7dff",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#3e7dff",
    },
  },
}));

export { BannerContainer, TextAreaDiv };
