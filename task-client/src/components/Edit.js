import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTask, updateTask } from "../actions/TaskCalls";

import {
    Input,
    Box,
    Button,
    VStack,
    Heading,
    useToast,
    Text,
    Checkbox,
    SimpleGrid,
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";

function Edit() {
    const toast = useToast();
    const navigate = useNavigate();
    const [task, setTask] = useState({});
    const taskID = useParams().id;
    const [inputVal, setInputVal] = useState("");
    const [checkComplete, setCheckComplete] = useState(false);

    const handleChange = (event) => setInputVal(event.target.value);

    const completeHandler = (event) => {
        setCheckComplete(event.target.checked);
    };

    const taskCallback = (data) => {
        setTask(data);
        setInputVal(data.name);
        setCheckComplete(data.completed);
        console.log(task);
    };

    useEffect(() => {
        getTask(taskID, taskCallback);
        // eslint-disable-next-line
    }, []);

    const saveChanges = () => {
        updateTask(taskID, { name: inputVal, completed: checkComplete });
    };
    return (
        <VStack
            display={"flex"}
            height={"100vh"}
            width="100%"
            flexDirection={"column"}
            justifyContent={"center"}
            gap={20}
        >
            <Box
                display={"flex"}
                width={"40%"}
                height="330px"
                flexDirection={"column"}
                alignItems={"center"}
                gap={2}
                boxShadow={"2xl"}
            >
                <Heading
                    fontFamily={"system-ui"}
                    fontWeight={"semibold"}
                    size="lg"
                    mb={3}
                    marginTop="5"
                    marginBottom="7"
                >
                    Edit Task
                </Heading>
                <SimpleGrid columns={2} spacingY={5} spacingX={0}>
                    <Text fontSize={"xl"}> Task ID</Text>
                    <Text fontSize={"xl"}>{useParams().id}</Text>
                    <Text fontSize={"xl"}>Name</Text>
                    <Input
                        fontSize={"18px"}
                        value={inputVal}
                        onChange={handleChange}
                        variant="filled"
                    />
                    <Text fontSize={"xl"}>Completed</Text>
                    {!checkComplete && (
                        <Checkbox
                            size={"lg"}
                            onChange={completeHandler}
                            value={checkComplete}
                        ></Checkbox>
                    )}
                    {checkComplete && (
                        <Checkbox
                            onChange={completeHandler}
                            defaultChecked
                            size={"lg"}
                            value={checkComplete}
                        ></Checkbox>
                    )}
                </SimpleGrid>
                <Button
                    leftIcon={<EditIcon color={"white"} />}
                    variant="solid"
                    size="md"
                    colorScheme={"blue"}
                    marginTop={"20px"}
                    width={"50%"}
                    onClick={() => {
                        saveChanges();
                        toast({
                            position: "top-right",
                            status: "success",
                            variant: "subtle",
                            title: "Updated",
                            description: `Changes have been saved`,
                            duration: 3000,
                            isClosable: true,
                        });
                    }}
                >
                    Save Changes
                </Button>
            </Box>
            <Button
                leftIcon={<ArrowBackIcon color={"white"} />}
                bg={"black"}
                variant="solid"
                size="lg"
                color={"white"}
                _hover={"none"}
                onClick={() => {
                    navigate("../");
                }}
            >
                Back To Tasks
            </Button>
        </VStack>
    );
}

export default Edit;
