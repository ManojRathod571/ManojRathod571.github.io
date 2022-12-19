import { Box, Grid, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaTeamspeak } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import TechStack from "./TechStack";

const ProjectRightSection = ({
  name,
  desc,
  duaration,
  deployurl,
  gitHibLink,
}) => {
  return (
    <Box mb="5rem" zIndex={20} w="100%" m={{ base: "auto", lg: "none" }}>
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
      <Flex justify={{ base: "space-between", lg: "start" }}>
        <Box pr={{ lg: "2rem" }}>
          <a href={`${deployurl}`} target="_blank">
            <LinkButton link="See This Live" />
          </a>
        </Box>
        <a href={`${gitHibLink}`} target="_blank">
          <LinkButton link="Github" />
        </a>
      </Flex>
    </Box>
  );
};

export default ProjectRightSection;
