import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import DashboardCard from "../../components/Cards/DashboardCard";
import DashboardLayout from "../../Layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <Heading mb={"2rem"} size={"lg"}>
        Examinations
      </Heading>

      <Flex columnGap={"2rem"} rowGap={"2rem"}>
        <DashboardCard name={"exams"} value={2} />
        <DashboardCard name={"students"} value={3000} />
      </Flex>
    </DashboardLayout>
  );
}

export default Dashboard;
