"use client";
import React, { useEffect, useState } from "react";
import {
  NavbarWrapper,
  MenuItems,
  MenuItem,
  UserSearchArea,
  Search,
  ThemeDiv,
} from "./styles";
import Logo from "app/assets/images/logo.svg";
import SearchIcon from "app/assets/images/search.svg";
import LightMode from "app/assets/images/lightMode.svg";
import DarkMode from "app/assets/images/darkMode.svg";
import Link from "next/link";
import CustomButton from "../customBtn/CustomButton";
import { useMediaQuery } from "@mui/material";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
        "calendly",
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

  return (
    <NavbarWrapper className={scrolled ? "scroll" : ""}>
      {/* <Logo /> */}
      <img src="/static/beltaLogo.png" alt="logo" style={{height: 70, width:150}} />
      <MenuItems>
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
            Services
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#timeline"
            onClick={(e) => handleScrollToSection(e, "testimonials")}
            className={activeSection === "testimonials" ? "active" : ""}
          >
            Customers
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#chart"
            onClick={(e) => handleScrollToSection(e, "chart")}
            className={activeSection === "chart" ? "active" : ""}
          >
            About Us
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
      </MenuItems>
      <UserSearchArea>
        {/* <Search>
          <SearchIcon />
        </Search> */}
        {/* <ThemeDiv>
          <div className="light__mode__box">
            <LightMode />
          </div>
          <DarkMode />
        </ThemeDiv> */}
        <CustomButton
          title={"Schedule Free Consultation"}
          radius={"25px"}
          color={"#697987"}
          hover={"rgb(62 125 255)"}
          border={"1px solid #697987"}
          // width={"119px"}
          height={"44px"}
          onClick={(e) => handleScrollToSection(e, "calendly")}
          hidden
        />
        <AccountMenu />
        {/* Render AccountMenu below md breakpoint */}
      </UserSearchArea>
    </NavbarWrapper>
  );
};

export default Navbar;
