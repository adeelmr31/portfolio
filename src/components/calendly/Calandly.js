import { Box } from "@mui/material";
import { InlineWidget } from "react-calendly";

export default function ScheduleMeeting() {
  return (
    <Box 
      sx={{
        margin: "10px auto",
        padding: "20px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign:'center'
      }}
    >
      <h6 style={{ textAlign: "center", marginTop:10 }}>Schedule a Meeting</h6>
      <h5> If you're here, we'd love to chat</h5>
      <p>Book a free private call where we'll listen to your problems & {<br />} show you how BeltaTech's unique approach can help you achieve the desired goals.</p>
      <Box
        sx={{
          width: "100%",
          maxWidth: "95%",
          height: { xs: "600px", sm: "600px", md: "700px" },
          overflow: "hidden",
        }}
      >
        <InlineWidget 
          url="https://calendly.com/beltatech-lhr/30min"
          styles={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
