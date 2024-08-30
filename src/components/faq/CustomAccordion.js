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
    <Container>
      <Accordion
        data-aos="fade-up"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="title__main">
            How can I participate in the ICO Token sale?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="body__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        data-aos="fade-up"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="title__main">What is ICO Crypto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="body__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        data-aos="fade-up"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="title__main">
            How do I benefit from the ICO Token?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="body__text">
          <Typography>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        data-aos="fade-up"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className="title__main">
            How can i purchase bitcoin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="body__text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
