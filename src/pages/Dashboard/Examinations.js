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
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

function Examinations() {
  const tableRows = [
    {
      id: "1",
      name: "JAMB 2017",
      created_at: "01-06-2021",
      status: "inactive",
    },
    {
      id: "2",
      name: "JAMB 2018",

      created_at: "01-06-2021",
      status: "active",
    },
  ];

  return (
    <DashboardLayout>
      <Flex mb={"2rem"} justifyContent={"space-between"}>
        <Heading size={"lg"}>Examinations</Heading>
        <Button colorScheme={"brand"} bgColor={"brand.500"}>
          Add Examination
        </Button>
      </Flex>

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
              <Th>Status</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tableRows.map((row) => {
              return (
                <Tr
                  cursor={"pointer"}
                  onClick={() => {
                    window.location.href = `/dashboard/examinations/${row.id}`;
                  }}
                  height={"70px"}
                  key={row.id}
                >
                  <Td>{row.id}</Td>
                  <Td>{row.name}</Td>
                  <Td>{row.created_at}</Td>
                  <Td>{row.status}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}

export default Examinations;
