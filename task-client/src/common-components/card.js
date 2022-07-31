import { Box, Text, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DeleteIcon, EditIcon, CheckCircleIcon } from "@chakra-ui/icons";

function Card(props) {
    const toast = useToast();
    const navigate = useNavigate();
    return (
        <Box
            width={"40%"}
            height="65px"
            gap={2}
            boxShadow={"2xl"}
            rounded={"sm"}
            display={"flex"}
            alignItems={"center"}
            bg={"white"}
            justifyContent={"space-between"}
        >
            {props.completed && (
                <Box
                    display={"flex"}
                    alignItems={"baseline"}
                    gap={4}
                    marginLeft={"15px"}
                >
                    <CheckCircleIcon color={"green.600"} />
                    <Text
                        as={"s"}
                        css={{ textTransform: "capitalize" }}
                        fontSize="xl"
                    >
                        {props.name}
                    </Text>
                </Box>
            )}
            {!props.completed && (
                <Text
                    marginLeft={"50px"}
                    css={{ textTransform: "capitalize" }}
                    fontSize="xl"
                >
                    {props.name}
                </Text>
            )}

            <Box display={"flex"} gap={3} marginRight={"40px"}>
                <EditIcon
                    onClick={() => {
                        navigate("./edit/" + props.taskID);
                    }}
                    cursor={"pointer"}
                    color={"blue.600"}
                />
                <DeleteIcon
                    onClick={() => {
                        props.deleteTask(props.taskID);
                        toast({
                            position: "top-right",
                            status: "warning",
                            variant: "subtle",
                            title: "Deleted",
                            description: `"${props.name}" has been removed`,
                            duration: 5000,
                            isClosable: true,
                        });
                    }}
                    cursor={"pointer"}
                    color={"red.600"}
                />
            </Box>
        </Box>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    completed: PropTypes.bool,
    deleteTask: PropTypes.func,
    taskID: PropTypes.string,
};

export default Card;
