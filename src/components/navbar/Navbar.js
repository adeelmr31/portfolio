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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      if (scrollPosition > viewportHeight * 0.3) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavbarWrapper className={scrolled ? "scroll" : ""}>
      <Logo />
      <MenuItems>
        <MenuItem>
          <Link href="#home" onClick={(e) => handleScrollToSection(e, "home")}>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#features"
            onClick={(e) => handleScrollToSection(e, "features")}
          >
            Features
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#roadmap"
            onClick={(e) => handleScrollToSection(e, "roadmap")}
          >
            Roadmap
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#pages"
            onClick={(e) => handleScrollToSection(e, "pages")}
          >
            Pages
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href="#support"
            onClick={(e) => handleScrollToSection(e, "support")}
          >
            Support
          </Link>
        </MenuItem>
      </MenuItems>
      <UserSearchArea>
        <Search>
          <SearchIcon />
        </Search>
        <ThemeDiv>
          <div className="light__mode__box">
            <LightMode />
          </div>
          <DarkMode />
        </ThemeDiv>
        <CustomButton
          title={"Sign In"}
          radius={"25px"}
          color={"#697987"}
          hover={"rgb(62 125 255)"}
          border={"1px solid #697987"}
          width={"119px"}
          height= {'44px'}
        />
      </UserSearchArea>
    </NavbarWrapper>
  );
};

export default Navbar;
