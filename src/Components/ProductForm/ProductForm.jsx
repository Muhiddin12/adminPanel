import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Box,
  Heading,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import style from "./ProductForm.module.scss";
import { useState } from "react";
import { create } from "../../API/service";

function ProductForm() {
  const [data, setData] = useState({
    name: "",
    description: "",
    fromTime: "",
    toTime: "",
    number: "",
    address: "",
  });

  const onChange = (name, value) => {
    setData((old) => ({ ...old, [`${name}`]: value }));
  };

  const onSubmit = () => {
    e.preventDefault();
    create("branches", data);
  };

  return (
    <form className={style.forms} onSubmit={onSubmit}>
      <Center>
        <Stack>
          <Flex>
            <Heading size="lg">Branch</Heading>
          </Flex>
          <FormControl w={"600px"} borderColor="green.500">
            <FormLabel>Name</FormLabel>
            <Input
              onChange={(e) => onChange("name", e.target.value)}
              value={data.name}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Descripition</FormLabel>
            <Input
              onChange={(e) => onChange("description", e.target.value)}
              value={data.description}
            />
          </FormControl>
          <FormControl>
            <FormLabel>From_time</FormLabel>
            <Input
              onChange={(e) => onChange("fromTime", e.target.value)}
              value={data.fromTime}
            />
          </FormControl>
          <FormControl>
            <FormLabel>To_time</FormLabel>
            <Input
              onChange={(e) => onChange("toTime", e.target.value)}
              value={data.toTime}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Number</FormLabel>
            <Input
              onChange={(e) => onChange("number", e.target.value)}
              value={data.number}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              onChange={(e) => onChange("address", e.target.value)}
              value={data.address}
            />
          </FormControl>
          <Flex justifyContent={"end"}>
            <Button colorScheme="blue" size="md">
              <CheckIcon />
              create
            </Button>
          </Flex>
        </Stack>
      </Center>
    </form>
  );
}

export default ProductForm;
