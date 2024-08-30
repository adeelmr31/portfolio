"use client";

import { Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

const BannerContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "relative",
  paddingTop: "110px",
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
  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

const TextAreaDiv = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "720px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  zIndex: 11,
  "& h1": {
    fontSize: "45px",
    fontWeight: 700,
    color: "rgb(8, 3, 33)",
    textAlign: "center",
    marginBottom: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      padding: "0 16px",
    },
  },
  "& p": {
    fontSize: "18px",
    color: "rgb(99, 115, 129)",
    textAlign: "center",
    marginBottom: "16px",
    fontWeight: 500,
    lineHeight: "28px",
    maxWidth: "650px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      padding: "0 16px",
    },
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

const DigitalCurrencies = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  marginTop: "32px",
  zIndex: 1,
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    gap: "8px",
  },
}));

const Currency = styled("div")(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 6%)",
  "& img": {
    width: "30px",
    height: "30px",
  },
}));

const CustomToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(45 44 74)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: "25px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 6%)",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(45 44 74)",
  },
}));

const ButtonDiv = styled("div")(({ theme }) => ({
  marginTop: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export {
  BannerContainer,
  TextAreaDiv,
  DigitalCurrencies,
  Currency,
  CustomToolTip,
  ButtonDiv,
};
