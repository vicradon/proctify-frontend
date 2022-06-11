import { Box, Heading, Link } from "@chakra-ui/react";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <Box position={"relative"}>
      <Box
        bg={"gray.300"}
        height={"100vh"}
        position={"fixed"}
        width={"250px"}
        padding={"2rem"}
      >
        <Heading mb={"3rem"} size={"xl"}>
          Proctify
        </Heading>

        <Link display={"block"} mb={"1rem"} href="/dashboard">
          Dashboard
        </Link>
        <Link display={"block"} mb={"1rem"} href="/dashboard/examinations">
          Examinations
        </Link>
        <Link display={"block"} mb={"1rem"} href="/dashboard/registrants">
          Registrants
        </Link>
      </Box>

      <Box
        position={"absolute"}
        width={"calc(100vw - 250px)"}
        left={"250px"}
        paddingY={"2rem"}
        paddingX={"2rem"}
      >
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
