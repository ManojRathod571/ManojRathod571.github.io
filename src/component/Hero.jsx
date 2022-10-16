import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "{ A FULL STACK DEVELOPER }",
      "Guy-who-loves-Coffee.jsx",
      "<ButLoveToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  console.log(count);
  return (
    <Box>
      <Flex justify="center">
        <Heading as="h2" size="2xl" noOfLines={1}>
          "Hi! I am Manoj Rathod",
        </Heading>
      </Flex>
      <Flex align={"center"} justify="center">
        <Heading
          size="lg"
          fontSize={"22px"}
          fontWeight={{ base: 700 }}
          color="teal"
          textAlign={"center"}
        >
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </Heading>
      </Flex>
    </Box>
  );
}

export default Hero;
