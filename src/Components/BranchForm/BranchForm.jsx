import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Box,
  Heading,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";
import style from "./BranchForm.module.scss";
import { useEffect, useState } from "react";
import { create, getById, updateById } from "../../API/service";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";

function BranchForm() {
  const { id } = useParams();

  const updateMutation = useMutation(updateById, {
    onSuccess: (res) => res.data,
  });

  const createMutation = useMutation(create, {
    onSuccess: () => reset({}),
  });

  const { data } = useQuery(["getById"], () => getById("branches", id), {
    enabled: !!id,
    onSuccess: (response) => reset(response.data),
  });

  const onSubmit = (body) => {
    if (id) {
      updateMutation.mutate({ slug: "branches", id, body });
    } else {
      createMutation.mutate({ slug: "branches", body });
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      fromTime: "",
      toTime: "",
      number: "",
      address: "",
    },
  });

  // const onSubmiting = (data) => console.log(data);

  console.log(">>>>>>>>>", watch("name"));

  return (
    <Center>
      <form
        onSubmit={handleSubmit((body) => {
          onSubmit(body);
        })}
        style={{ width: "600px", marginTop: "60px" }}
      >
        <Stack>
          <Flex>
            <Heading size="lg">Branch</Heading>
          </Flex>
          <Heading size="sm">Name</Heading>
          <input {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}

          <Heading size="sm">description</Heading>
          <input {...register("description", { required: true })} />
          {errors.description && <span>This field is required</span>}

          <Heading size="sm">fromTime</Heading>
          <input {...register("fromTime", { required: true })} />
          {errors.fromTime && <span>This field is required</span>}

          <Heading size="sm">toTime</Heading>
          <input {...register("toTime", { required: true })} />
          {errors.toTime && <span>This field is required</span>}

          <Heading size="sm">number</Heading>
          <input {...register("number", { required: true })} />
          {errors.number && <span>This field is required</span>}

          <Heading size="sm">address</Heading>
          <input {...register("address", { required: true })} />
          {errors.address && <span>This field is required</span>}

          <Flex justifyContent={"end"}>
            {id ? (
              <Button
                type="submit"
                leftIcon={<RepeatIcon />}
                colorScheme="pink"
                size="md"
              >
                update
              </Button>
            ) : (
              <Button type="submit" colorScheme="blue" size="md">
                <CheckIcon />
                create
              </Button>
            )}
          </Flex>
        </Stack>
      </form>
    </Center>
  );
}

export default BranchForm;
