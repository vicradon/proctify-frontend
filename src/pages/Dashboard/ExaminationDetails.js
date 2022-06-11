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
      surname: "Nemb",
      first_name: "Voms",
      middle_name: "Vims",
      email: "coms@ca.com",
      created_at: "01-06-2021",
    },
    {
      id: 2,
      surname: "Kwoms",
      first_name: "Rems",
      middle_name: "Livks",
      email: "nemb@nem.com",
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
