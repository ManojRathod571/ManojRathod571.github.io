import React from "react";
import { Box, Grid, Text, Flex, Button, Image } from "@chakra-ui/react";
import img1 from "../Images/desktop.gif";

const HeroLeftSection = () => {
  return (
    <Flex align={"center"}>
      <Flex borderRadius="50%" w="100%" h="auto" justify={"right"}>
        <Image src={img1} alt="desktop" borderRadius="50%" w="90%" h="auto" />
      </Flex>
    </Flex>
  );
};

export default HeroLeftSection;
