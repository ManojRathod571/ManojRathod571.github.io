import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import { FcAbout } from "react-icons/fc";
import profile from "../Images/profile.jpg";

const About = () => {
  return (
    <Box bg="rgb(245, 245, 245)">
      <Box w="85%" margin={"auto"} pt="3rem">
        <Flex justify="center">
          <FcAbout fontSize="2rem" color="green" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
        >
          About Me
        </Text>

        <Grid gridTemplateColumns={{ base: "1fr", md: ".5fr 1fr" }} py="2rem">
          <Flex
            w="80%"
            h="auto"
            borderRadius={"50%"}
            align="center"
            justify={"center"}
          >
            <Image
              src={profile}
              alt="profile"
              w="100%"
              h="90%"
              borderRadius={"50%"}
            />
          </Flex>
          <Flex align={"center"}>
            <Text
              fontSize="18px"
              fontWeight="400"
              fontFamily="Poppins"
              color="rgba(56,49,68,.8)"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              ratione eligendi nam odit! Quasi repellendus ipsam eos, eligendi
              obcaecati, fugit, cumque temporibus culpa molestiae iusto
              molestias quis magnam hic incidunt. Labore magni magnam eligendi
              excepturi, explicabo aspernatur. Illo saepe reiciendis culpa
              debitis aspernatur quod quos neque placeat iste voluptates? Fugiat
              ipsa fuga totam voluptatibus optio suscipit quisquam odio
              obcaecati, fugit, cumque temporibus culpa molestiae iusto
              molestias quis magnam hic incidunt. Labore magni magnam eligendi
              excepturi, explicabo aspernatur. Illo saepe reiciendis culpa
              debitis aspernatur quod quos neque placeat iste voluptates? Fugiat
              ipsa fuga totam voluptatibus optio
            </Text>
          </Flex>
        </Grid>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L1440,64L1440,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default About;
