import { Box } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function CalendarGithub() {
  return (
    <Box border="1px solid gainsboro" borderRadius="0.25rem">
      <GitHubCalendar
        username="amandk5"
        style={{
          margin: "auto",
          padding: "20px 10px",
        }}
      />
    </Box>
  );
}
