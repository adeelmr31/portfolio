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

export { BannerContainer };
