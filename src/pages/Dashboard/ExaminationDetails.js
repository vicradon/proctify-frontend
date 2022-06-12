import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

function ExaminationDetails() {
  const tableRows = [
    {
      id: 1,
      surname: "Chukwujama",
      first_name: "Osinachi",
      middle_name: "Victor",
      email: "osinachi.chukwujama@gmail.com",
      model_url:
        "https://proctifystorage.blob.core.windows.net/student-models/u83u398403ujduidjkl.jpeg",
      created_at: "01-06-2021",
    },
  ];
  const handleTestModelButtonClick = (id) => {};
  return (
    <DashboardLayout>
      <Flex mb={"2rem"} justifyContent={"space-between"}>
        <Heading size={"lg"}>JAMB 2018</Heading>

        <Button colorScheme={"brand"} bgColor={"brand.500"}>
          <a href="/dashboard/examinations/add-registrant-model">
            Add Registrant
          </a>
        </Button>
      </Flex>

      <Box>
        <Heading size={"md"}>Registrants for this exam</Heading>
        <TableContainer
          rounded={"lg"}
          border={"1px solid rgba(226, 226, 226, 0.7)"}
          padding={"1rem"}
        >
          <Table variant={"simple"}>
            <Thead>
              <Tr height={"70px"}>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Model Location</Th>
                <Th>Created</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {tableRows.map((row) => {
                return (
                  <Tr height={"70px"} key={row.id}>
                    <Td>{row.id}</Td>
                    <Td>{row.first_name + " " + row.surname}</Td>
                    <Td>{row.model_url.substring(0, 45) + "..."}</Td>
                    <Td>{row.created_at}</Td>
                    <Td>
                      <Button
                        onClick={() => handleTestModelButtonClick(row.id)}
                      >
                        Test Model
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardLayout>
  );
}

export default ExaminationDetails;
