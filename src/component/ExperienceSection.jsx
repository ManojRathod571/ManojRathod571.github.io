import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
const ExperienceSection = () => {
  return (
    <>
      <Flex align={"center"}>
        <Flex mr="2rem">
          <BsFillPersonLinesFill fontSize="35px" color="#6929c4" />
        </Flex>
        <Text
          fontSize="3xl"
          fontFamily="Poppins"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
        >
          Experience
        </Text>
      </Flex>

      <Box py="1.5rem">
        <Text fontSize="22px" fontWeight="500" fontFamily="Poppins" color="">
          Frontend Engineering
        </Text>
        <motion.div
          initial={{
            x: -150,
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            @ Jamsfy, (Pawai) Mumbai
          </Text>
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="600"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            Duration
          </Text>
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            Sep-2021 <span style={{ fontStyle: "italic" }}>to </span>March 2022
          </Text>
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="600"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            Responsibility
          </Text>
          <Flex pt="1rem">
            <Flex align={"center"}>
              <Box
                w="7px"
                h="7px"
                bg="black"
                borderRadius={"50%"}
                mr="1.5rem"
              />
            </Flex>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontFamily="Poppins"
              color=""
              // fontStyle="italic"
            >
              Worked as a frontend engineer
            </Text>
          </Flex>
          <Flex>
            <Flex align={"center"}>
              <Box
                w="7px"
                h="7px"
                bg="black"
                borderRadius={"50%"}
                mr="1.5rem"
              />
            </Flex>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontFamily="Poppins"
              color=""
            >
              Develop web pages in React JS and Next JS
            </Text>
          </Flex>
          <Flex>
            <Flex align={"center"}>
              <Box
                w="7px"
                h="7px"
                bg="black"
                borderRadius={"50%"}
                mr="1.5rem"
              />
            </Flex>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontFamily="Poppins"
              color=""
            >
              Develop web pages in React JS and Next JS
            </Text>
          </Flex>
        </motion.div>
      </Box>
      <Box py="0rem">
        <Text fontSize="22px" fontWeight="500" fontFamily="Poppins" color="">
          Account Executive
        </Text>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            @ Mphasis, (Kharadi) Pune
          </Text>
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="600"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            Duration
          </Text>
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="400"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            Feb-2019 <span style={{ fontStyle: "italic" }}>to </span>June 2020
          </Text>
          <Text
            pt="10px"
            fontSize="16px"
            fontWeight="600"
            fontFamily="Poppins"
            color=""
            // fontStyle="italic"
          >
            Responsibility
          </Text>
          <Flex pt="1rem">
            <Flex align={"center"}>
              <Box
                w="7px"
                h="7px"
                bg="black"
                borderRadius={"50%"}
                mr="1.5rem"
              />
            </Flex>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontFamily="Poppins"
              color=""
              // fontStyle="italic"
            >
              Worked as a Account Executive
            </Text>
          </Flex>
          <Flex>
            <Flex align={"center"}>
              <Box
                w="7px"
                h="7px"
                bg="black"
                borderRadius={"50%"}
                mr="1.5rem"
              />
            </Flex>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontFamily="Poppins"
              color=""
            >
              Handle user account
            </Text>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default ExperienceSection;
