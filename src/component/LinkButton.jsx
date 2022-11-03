import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const LinkButton = ({ link }) => {
  return (
    <Flex
      px="1.5rem"
      py=".7rem"
      bg="#001141"
      align={"center"}
      borderRadius="10px"
      _hover={{ bg: "#6929c4" }}
    >
      <Box pr="1rem">
        <AiOutlineLink color="white" fontSize="20px" />
      </Box>
      <Text fontSize="17px" fontWeight="400" fontFamily="Poppins" color="white">
        {link}
      </Text>
    </Flex>
  );
};

export default LinkButton;
