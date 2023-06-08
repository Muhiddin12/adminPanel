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
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { deleteById, getAll } from "../../API/service";
import { DeleteIcon, RepeatIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";

function DynamicTable({ slug = "branches" }) {
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: quertData,
    isSuccess,
    refetch,
  } = useQuery("getQuery", () => getAll(slug).then((res) => res.data));

  const deleteMutation = useMutation(deleteById, {
    onSuccess: () => {
      refetch();
    },
  });

  // useEffect(() => {
  //   setIsLoading(true);
  //   getAll(slug)
  //     .then((response) => setData(response.data))
  //     .finally(() => setIsLoading(false));
  // }, []);

  const onDeleteClick = (id) => {
    deleteMutation.mutate({ slug, id });
    // setIsLoading(true);
    // deleteById(slug, id).then(() => {
    //   getAll(slug)
    //     .then((response) => setData(response.data))
    //     .finally(() => setIsLoading(false));
    // });
  };

  const fields = quertData?.length ? Object.keys(quertData[0]) : [];

  // console.log("testttttttt", fields);

  return (
    <div className="Table">
      <Center>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                {fields.map((title) => (
                  <Th size="lg">{title}</Th>
                ))}
                <Center>
                  <Th>Actions</Th>
                  <Link to={`/${slug}/create`}>
                    <Button colorScheme="green" size="md">
                      Add
                    </Button>
                  </Link>
                </Center>
              </Tr>
            </Thead>
            <Tbody>
              {quertData?.map((element) => (
                <Tr>
                  {fields.map((key) => (
                    <Td textAlign={"Center"}>{element[key]}</Td>
                  ))}
                  <Td>
                    <Flex>
                      <Link to={`/${slug}/update/${element.id}`}>
                        <Button isLoading={isLoading} colorScheme="blue">
                          <RepeatIcon />
                          Update
                        </Button>
                      </Link>
                      <Spacer />
                      <Button
                        isLoading={isLoading}
                        onClick={() => onDeleteClick(element.id)}
                        colorScheme="red"
                      >
                        <DeleteIcon />
                        Delete
                      </Button>
                      <Spacer />
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
