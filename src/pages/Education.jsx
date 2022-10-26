import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import EducationSection from "../component/EducationSection";
import ExperienceSection from "../component/ExperienceSection";
import { GiCapitol } from "react-icons/gi";

const Education = () => {
  return (
    <Box w="85%" m="auto" py="4rem">
      <Box position="Absolute" left="30%" zIndex="-50">
        <GiCapitol color="rgb(245, 245, 245)" fontSize={"35rem"} />
      </Box>
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Box pl="4rem">
          <ExperienceSection />
        </Box>
        <Box pl="4rem">
          <EducationSection />
        </Box>
      </Grid>
    </Box>
  );
};

export default Education;
