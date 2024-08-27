import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomButtonContainer = styled(Button)(
  ({ theme, bg, radius, color, fontSize, hover, border }) => ({
    backgroundColor: bg ? bg : "transparent",
    borderRadius: radius ? radius : "0px",
    color: color ? color : "#697987",
    fontSize: fontSize ? fontSize : "16px",
    border: border ? border : "none",
    width: "100%",
    textTransform: "none",
    "&:hover": {
      backgroundColor: hover ? hover : "bg",
    },
  })
);

const CustomButton = ({
  title,
  bg,
  radius,
  color,
  fontSize,
  hover,
  border,
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
      {...props}
    >
      {title}
    </CustomButtonContainer>
  );
};

export default CustomButton;
