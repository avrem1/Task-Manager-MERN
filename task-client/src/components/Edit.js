/* eslint-disable */

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

function Edit() {
    return (
        <VStack
            display={"flex"}
            height={"100vh"}
            width="100%"
            flexDirection={"column"}
            justifyContent={"center"}
        >
            <Box
                display={"flex"}
                width={"40%"}
                height="300px"
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
                </Heading>{" "}
            </Box>
        </VStack>
    );
}

export default Edit;
