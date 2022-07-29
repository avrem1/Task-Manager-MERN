import React from "react";
import { HStack, Input, Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function Home() {
    return (
        <HStack
            width="100%"
            height={"30vh"}
            align={"center"}
            justifyContent="center"
        >
            <Box
                marginTop={"80px"}
                width={"40%"}
                height="150px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                boxShadow={"2xl"}
                rounded={"lg"}
            >
                <Input
                    variant="filled"
                    placeholder="Enter Task"
                    width={"50%"}
                />
                <Button
                    leftIcon={<AddIcon />}
                    colorScheme="blue"
                    variant="solid"
                >
                    Tasks
                </Button>
            </Box>
        </HStack>
    );
}

export default Home;
