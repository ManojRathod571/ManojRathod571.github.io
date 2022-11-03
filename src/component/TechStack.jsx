import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { FaRegPlusSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";

const TechStack = () => {
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
      <Flex align={"center"} justifyContent="space-between" mb="1.5rem">
        <Flex>
          <Box pr="1rem">
            <FaReact color="#001141" fontSize="22px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Poppins"
            color="rgba(56,49,68,.8)"
          >
            React
          </Text>
        </Flex>

        <Flex>
          <Box pr="1rem">
            <SiRedux color="#001141" fontSize="22px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Poppins"
            color="rgba(56,49,68,.8)"
          >
            Redux
          </Text>
        </Flex>
        <Flex>
          <Box pr="1rem">
            <FaCss3Alt color="#001141" fontSize="22px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Poppins"
            color="rgba(56,49,68,.8)"
          >
            CSS
          </Text>
        </Flex>
        <Flex>
          <Box pr="1rem">
            <IoLogoHtml5 color="#001141" fontSize="22px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Poppins"
            color="rgba(56,49,68,.8)"
          >
            HTML
          </Text>
        </Flex>
        {/* <Flex>
          <Box pr="1rem">
            <IoLogoJavascript color="#001141" fontSize="22px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Poppins"
            color="rgba(56,49,68,.8)"
          >
            JavaScript
          </Text>
        </Flex> */}
        <Flex>
          <Box pr="1rem">
            <SiChakraui color="#001141" fontSize="22px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="500"
            fontFamily="Poppins"
            color="rgba(56,49,68,.8)"
          >
            Chakra UI
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TechStack;
