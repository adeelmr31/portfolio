'use client';
import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomButtonContainer = styled(Button)(
  ({ theme, bg, radius, color, fontSize, hover, border, width, height }) => ({
    backgroundColor: bg ? bg : "transparent",
    borderRadius: radius ? radius : "0px",
    color: color ? color : "#697987",
    fontSize: fontSize ? fontSize : "16px",
    border: border ? border : "none",
    width: width ? width : "100%",
    height: height ? height : "100%",
    textTransform: "none",
    padding: "10px",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: hover ? hover : bg,
      border: border ? "1px solid transparent" : "none",
      color: color ? "#fff" : "#fff",
    },
  })
);

const CustomButton = ({
  title,
  bg,
  height,
  radius,
  color,
  fontSize,
  hover,
  border,
  width,
  ...props
}) => {
  return (
    <CustomButtonContainer
      radius={radius}
      bg={bg}
      fontSize={fontSize}
      color={color}
      hover={hover}
      border={border}
      width={width}
      height={height}
      disableRipple
      {...props}
    >
      {title}
    </CustomButtonContainer>
  );
};

export default CustomButton;
