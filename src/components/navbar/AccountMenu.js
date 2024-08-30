"use client";
import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const CustomMenu = styled(Menu)(({ theme }) => ({
  zIndex: 1000000,
  "& .active": {
    color: "rgb(62, 125, 255)",
  },
}));

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollPosition > viewportHeight * 0.2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "partners",
        "features",
        "chart",
        "timeline",
        "team",
        "testimonials",
        "download",
        "faq",
        "news",
        "contact",
        "quicklinks",
      ];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= 0.3 * viewportHeight &&
            rect.bottom >= 0.3 * viewportHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CustomTooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </CustomTooltip>
      <CustomMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            width: 200,

            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link
            href="#home"
            onClick={(e) => handleScrollToSection(e, "home")}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#features"
            onClick={(e) => handleScrollToSection(e, "features")}
            className={activeSection === "features" ? "active" : ""}
          >
            Features
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#timeline"
            onClick={(e) => handleScrollToSection(e, "timeline")}
            className={activeSection === "timeline" ? "active" : ""}
          >
            Roadmap
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#pages"
            onClick={(e) => handleScrollToSection(e, "pages")}
            className={activeSection === "pages" ? "active" : ""}
          >
            Pages
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#contact"
            onClick={(e) => handleScrollToSection(e, "contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Support
          </Link>
        </MenuItem>
      </CustomMenu>
    </React.Fragment>
  );
}
