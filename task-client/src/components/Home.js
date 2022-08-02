import React from "react";
import { useState } from "react";
import {
    HStack,
    Input,
    Box,
    Button,
    VStack,
    Heading,
    useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { createTask, getAllTasks, deleteTask } from "../actions/TaskCalls";
import Card from "../common-components/card.js";

function Home() {
    const toast = useToast();
    const [value, setValue] = React.useState("");
    const handleChange = (event) => setValue(event.target.value);
    const [allTasks, setAllTasks] = useState([]);
    const [lastUpdated, setLastUpdated] = useState("");

    const setData = (data) => {
        setAllTasks(data);
    };

    const setUpdates = (data) => {
        setLastUpdated(data);
    };

    React.useEffect(() => {
        getAllTasks(setData);
    }, [lastUpdated]);

    const submitTask = () => {
        createTask({ name: value }, setUpdates);
        setValue("");
    };

    const submitDelete = (id) => {
        deleteTask(id, setUpdates);
    };

    return (
        <VStack
            overflow-y={"scroll"}
            width="100%"
            align={"center"}
            justifyContent="start"
            gap={2}
            marginBottom={"30px"}
        >
            <Box
                marginTop={"60px"}
                width={"40%"}
                height="180px"
                gap={2}
                boxShadow={"2xl"}
                rounded={"lg"}
                marginBottom={"80px"}
            >
                <VStack>
                    <Heading
                        fontFamily={"system-ui"}
                        fontWeight={"semibold"}
                        size="lg"
                        mb={3}
                        marginTop="5"
                        marginBottom="7"
                    >
                        Task Manager ⏳
                    </Heading>
                    <HStack
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width={"100%"}
                    >
                        <Input
                            variant="filled"
                            placeholder="e.g. Build nuclear warhead"
                            w={"50%"}
                            flex={"flex-grow"}
                            value={value}
                            onChange={handleChange}
                        />
                        <Button
                            leftIcon={<AddIcon />}
                            colorScheme="blue"
                            variant="solid"
                            flex={"flex-shrink"}
                            onClick={() => {
                                submitTask();
                                toast({
                                    position: "top-right",
                                    status: "success",
                                    variant: "subtle",
                                    title: "Created",
                                    description: `You need to complete "${value}"`,
                                    duration: 5000,
                                    isClosable: true,
                                });
                            }}
                        >
                            Tasks
                        </Button>
                    </HStack>
                </VStack>
            </Box>

            {allTasks &&
                allTasks.length > 0 &&
                allTasks.map((item) => {
                    return (
                        <Card
                            name={item.name}
                            completed={item.completed}
                            key={item._id}
                            deleteTask={submitDelete}
                            taskID={item._id}
                        />
                    );
                })}
        </VStack>
    );
}

export default Home;
