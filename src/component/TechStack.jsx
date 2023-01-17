import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { FaRegPlusSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";

const TechStack = ({ tech }) => {
  return (
    <Box>
      <Flex align={"center"} mb="1rem">
        <Box pr="1rem">
          <FaRegPlusSquare color="#001141" fontSize="18px" />
        </Box>
        <Text
          fontSize="18px"
          fontWeight="500"
          fontFamily="Poppins"
          color="#001141"
        >
          Tech Stack
        </Text>
      </Flex>
      <Flex
        align={"center"}
        justifyContent={{ base: "space-evenly", lg: "space-between" }}
        mb="1.5rem"
      >
        {tech.map(({ id, icon, tech }) => {
          return (
            <Flex key={id}>
              <Box pr={{ base: ".3rem", lg: "1rem" }}>{icon}</Box>
              <Text
                fontSize={{ base: "13px", md: "", lg: "13px" }}
                fontWeight={{ base: "400", lg: "500" }}
                fontFamily="Poppins"
                color="rgba(56,49,68,.8)"
              >
                {tech}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default TechStack;
