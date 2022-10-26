import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const Projects = () => {
  return (
    <Box h="90vh" bg="rgb(245, 245, 245)">
      <Box w="85%" m="auto" py="3rem">
        <Flex justify="center">
          <FaProjectDiagram fontSize="2rem" color="#6929c4" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
        >
          Projects
        </Text>
      </Box>
    </Box>
  );
};

export default Projects;
