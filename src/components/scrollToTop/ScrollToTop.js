"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Scroll = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  cursor: "pointer",
  width: "40px",
  height: "40px",
  backgroundColor: "#3F7EFF",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  "& .MuiSvgIcon-root": {
    fontSize: "2rem",
  },
}));

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTop = () => {
  return (
    <Scroll>
      <KeyboardArrowUpIcon onClick={handleScrollToTop} />
    </Scroll>
  );
};

export default ScrollToTop;
