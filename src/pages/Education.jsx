import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import EducationSection from "../component/EducationSection";
import ExperienceSection from "../component/ExperienceSection";
import { GiCapitol } from "react-icons/gi";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <Box
      w={{ base: "85%", md: "95%", lg: "85%" }}
      m="auto"
      py="4rem"
      id="Education"
    >
      <Box
        position="Absolute"
        left={{ base: "1%", md: "", lg: "30%" }}
        zIndex="-50"
        display={{ base: "none", md: "", lg: "block" }}
      >
        <GiCapitol color="rgb(245, 245, 245)" fontSize="35rem" />
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(2, 1fr)",
        }}
        rowGap={{ base: "3rem", lg: "none" }}
      >
        <Box pl={{ lg: "4rem" }}>
          <ExperienceSection />
        </Box>
        <Box pl={{ lg: "4rem" }} mr="auto">
          <EducationSection />
        </Box>
      </Grid>
    </Box>
  );
};

export default Education;
