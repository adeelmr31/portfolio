"use client";

import { styled } from "@mui/material/styles";

const NavbarWrapper = styled("div")(({ theme }) => ({
  height: "88px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  transition: "all 0.3s ease",
  margin: "0 auto",
  maxWidth: "1420px",
  "&.scroll": {
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
}));

const MenuItems = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
}));

const MenuItem = styled("div")(({ theme }) => ({
  color: "rgb(99, 115, 129)",
  fontSize: "18px",
  fontWeight: 600,
  cursor: "pointer",
  "&:hover": {
    color: "rgb(62, 125, 255)",
  },
}));

const UserSearchArea = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const Search = styled("div")(({ theme }) => ({
  width: "40px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  padding: "8px",
}));

const ThemeDiv = styled("div")(({ theme }) => ({
  gap: "15px",
  height: "44px",
  borderRadius: "25px",
  backgroundColor: "#ffffff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  "& .light__mode__box": {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "rgb(62 125 255)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { NavbarWrapper, MenuItems, MenuItem, UserSearchArea, Search, ThemeDiv };
