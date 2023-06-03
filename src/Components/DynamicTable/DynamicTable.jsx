import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Flex,
  Button,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { deleteById, getAll } from "../../API/service";
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons";

function DynamicTable({ slug = "zuzuAdmin" }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAll(slug)
      .then((response) => setData(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  const onDeleteClick = (id) => {
    setIsLoading(true);
    deleteById(slug, id).then(() => {
      getAll(slug)
        .then((response) => setData(response.data))
        .finally(() => setIsLoading(false));
    });
  };

  const fields = data?.length ? Object.keys(data[0]) : [];

  return (
    <div className="Table">
      <Center>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                {fields.map((title) => (
                  <Th>{title}</Th>
                ))}
                <Center>
                  <Th>Actions</Th>
                </Center>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((element) => (
                <Tr>
                  {fields.map((key) => (
                    <Td>{element[key]}</Td>
                  ))}
                  <Td>
                    <Flex>
                      <Box>
                        <Button isLoading={isLoading} colorScheme="blue">
                          <RepeatIcon />
                          Update
                        </Button>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button
                          isLoading={isLoading}
                          onClick={() => onDeleteClick(element.id)}
                          colorScheme="red"
                        >
                          <DeleteIcon />
                          Delete
                        </Button>
                      </Box>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </div>
  );
}

export default DynamicTable;
