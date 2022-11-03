import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaTeamspeak } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import TechStack from "./TechStack";

const ProjectRightSection = ({ name, desc, duaration }) => {
  return (
    <Box mb="5rem" zIndex={20}>
      <Text
        fontSize="30px"
        fontFamily="Poppins"
        fontWeight="700"
        color="#001141"
        mb=".5rem"
      >
        {name}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        fontFamily="Poppins"
        color="rgba(56,49,68,.8)"
        mb=".5rem"
      >
        {desc}
      </Text>
      <Flex align={"center"} mb="1rem">
        <Box pr="1rem">
          <FaTeamspeak color="#001141" fontSize="18px" />
        </Box>
        <Text
          fontSize="16px"
          fontWeight="500"
          fontFamily="Poppins"
          color="#001141"
        >
          {duaration}
        </Text>
      </Flex>
      {/* Tech Stack */}
      <TechStack />
      <Flex justify={"start"}>
        <Box pr="2rem">
          <Link to="/">
            <LinkButton link="See This Live" />
          </Link>
        </Box>
        <Link to="/">
          <LinkButton link="Github" />
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectRightSection;
