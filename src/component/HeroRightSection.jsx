import { Box, Grid, Text, Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { BsCloudArrowUpFill } from "react-icons/bs";
import SocialMediaSection from "./SocialMediaSection";

const HeroRightSection = () => {
  return (
    <>
      <Box py="2rem" px="3rem">
        <Flex justify="center">
          <Text
            fontFamily="Poppins"
            fontSize="5xl"
            color={"white"}
            textAlign={{ base: "center", md: "none" }}
          >
            <span style={{ color: "#0ef0b8" }}> Hello, </span>I am
          </Text>
        </Flex>
        <Flex justify="center">
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="4em"
            color={"#0ef0b8"}
            textAlign={{ base: "center", lg: "none" }}
          >
            Manoj Rathod
          </Text>
        </Flex>
        <Flex justify="center" pt="1rem">
          <h1>
            <Text
              fontSize={{ base: "xs", md: "md", lg: "xl" }}
              fontWeight={{ base: "400", md: "400", lg: "500" }}
              fontFamily="Poppins"
              color="#FFF5EE"
            >
              {/* <span
                style={{
                  color: "#FFF5EE",
                  fontWeight: "500",
                  fontFamily: "Poppins",
                  fontSize: "22px",
                }}
              > */}
              <Typewriter
                words={[
                  "{A Full Stack Web Developer}",
                  "console.log('Guy-Who-loves-coffee.jsx')",
                  "<ButLoveToCodeMore>",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              {/* </span> */}
            </Text>
          </h1>
        </Flex>
        <Flex pt="1rem">
          <Text
            textAlign={"center"}
            fontSize={{ base: "", md: "", lg: "17px" }}
          >
            A Mern Stack Developer who loves solving problems and building
            projects. I am equipped with a variety of technologies and tools to
            help me build the best possible product.
          </Text>
        </Flex>
        <SocialMediaSection />
        <Flex justify={"center"} pt="2rem">
          <a
            href="https://github.com/ManojRathod571/Resume/raw/main/Manoj_Rathod_Resume.pdf"
            download={"Manoj-Rathod_Resume"}
          >
            <Button
              bg="white"
              color="black"
              rightIcon={<BsCloudArrowUpFill color="black" />}
            >
              Resume
            </Button>
          </a>
        </Flex>
      </Box>
    </>
  );
};

export default HeroRightSection;
