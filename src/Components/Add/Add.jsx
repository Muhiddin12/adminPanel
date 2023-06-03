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
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

function Form() {
  return (
    <form>
      <Center>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Stack>
            <Box>
              <Heading>vfdsbgfn</Heading>
              <Input />
            </Box>
          </Stack>
        </FormControl>
      </Center>
    </form>
  );
}

export default Form;
