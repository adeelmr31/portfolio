import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  gap: "40px",
  "& .MuiPaper-root": {
    minHeight: "92px",
    boxShadow: "none",
    display: "flex",
    borderRadius: "10px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    "& .title__main": {
      color: "rgb(19, 27, 77)",
      fontWeight: "700",
      fontSize: "20px",
    },
    "& .body__text": {
      color: "rgb(99, 115, 129)",
      fontWeight: "400",
      fontSize: "16px",
      width: "95%",
      margin: "0 auto",
    },
    "& .MuiAccordionSummary-root": {
      "& .MuiAccordionSummary-expandIconWrapper": {
        backgroundColor: "#637381",
        borderRadius: "25%",
        "& .MuiSvgIcon-root": {
          color: "#fff",
        },
      },
    },
    "& .MuiAccordion-heading": {
      width: "100%",
    },
    "&:before": {
      display: "none",
    },
  },
}));

export default function CustomAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container data-aos="fade-up">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="title__main">
          What services does your company offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="body__text">
          We provide IT consulting, custom software development, cloud solutions, cybersecurity, and managed IT services tailored to meet your business needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="title__main">What industries do you specialize in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="body__text">
          We cater to a variety of industries, including healthcare, finance, retail, manufacturing, education, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="title__main">
          How can your solutions help my business?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="body__text">
          <Typography>
          Our solutions are designed to streamline operations, enhance productivity, improve security, and reduce costs through cutting-edge technology and tailored strategies.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
