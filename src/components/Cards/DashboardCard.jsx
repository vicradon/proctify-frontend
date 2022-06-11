import { Box, Text } from "@chakra-ui/react";
import React from "react";

function DashboardCard({ name, value }) {
  return (
    <Box
      rounded={"lg"}
      borderTop={"0.1px solid beige"}
      shadow={"md"}
      width={"250px"}
      height={"180px"}
      textAlign={"center"}
      verticalAlign={"middle"}
    >
      <Text fontSize={"4rem"}>{value}</Text>
      <Text>{name}</Text>
    </Box>
  );
}

export default DashboardCard;
