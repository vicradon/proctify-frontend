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

function Registrants() {
  const tableRows = [
    {
      id: 1,
      surname: "Chukwujama",
      first_name: "Osinachi",
      middle_name: "Victor",
      email: "osinachi.chukwujama@gmail.com",
      model_url:
        "https://proctifystorage.blob.core.windows.net/student-models/u83u398403ujduidjkl.json",
      created_at: "01-06-2021",
    },
    {
      id: 2,
      surname: "Boyle",
      first_name: "Ruth",
      middle_name: "Chiamaka",
      email: "ruth.boyle@gmail.com",
      model_url:
        "https://proctifystorage.blob.core.windows.net/student-models/djhd7894uidjsa8ugyodib.json",
      created_at: "01-06-2021",
    },
  ];

  return (
    <DashboardLayout>
      <Flex mb={"2rem"} justifyContent={"space-between"}>
        <Heading size={"lg"}>Registrants</Heading>
        <Button colorScheme={"brand"} bgColor={"brand.500"}>
          Add Registrant
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
              <Th>Surname</Th>
              <Th>First Name</Th>
              <Th>Middle name</Th>
              <Th>Email</Th>
              <Th>Created</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tableRows.map((row) => {
              return (
                <Tr height={"70px"} key={row.id}>
                  <Td>{row.id}</Td>
                  <Td>{row.surname}</Td>
                  <Td>{row.first_name}</Td>
                  <Td>{row.middle_name}</Td>
                  <Td>{row.email}</Td>
                  <Td>{row.created_at}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}

export default Registrants;
