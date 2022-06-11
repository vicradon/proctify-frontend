import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function DashboardLayout({ children }) {
  return (
    <Box position={"relative"}>
      <Box position={"fixed"} width={"250px"} padding={"2rem"}>
        <Heading size={"xl"}>Proctify</Heading>

        <Link to="/dashboard">Dashboard</Link>
      </Box>

      <Box paddingY={"2rem"}>{children}</Box>
    </Box>
  );
}

export default DashboardLayout;
