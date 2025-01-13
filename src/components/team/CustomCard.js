"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "/static/fb.svg";
import XIcon from "/static/x.svg";
import LinkedIcon from "/static/linked.svg";
import YouIcon from "/static/youtube.svg";

const CustomBoxSocial = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  "& > *": {
    margin: theme.spacing(1),
  },
  "& > *:hover": {
    fill: "#3e7dff",
  },
}));

export default function CustomCard({ name, src,position }) {
  return (
    <Card
      sx={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f5f8ff" }}
    >
      <CardMedia
        component="img"
        height="180"
        image={src}
        alt="team"
        sx={{
          marginBottom: "10px",
          borderRadius: "10px",
          width: '180px',
          display: 'block',
          margin: '10px auto',
        }}
      />

      <CardContent>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "600", color: "rgb(8, 3, 33)" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "rgb(99, 115, 129)",
            marginBottom: "10px",
          }}
          variant="body2"
        >
          {position}
        </Typography>
        {/* <CustomBoxSocial>
          <FacebookIcon />
          <XIcon />
          <LinkedIcon />
          <YouIcon />
        </CustomBoxSocial> */}
      </CardContent>
    </Card>
  );
}
