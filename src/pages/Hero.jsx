import { Box, Grid, Text, Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { ArrowUpIcon } from "@chakra-ui/icons";

import img1 from "../Images/desktop.gif";
import HeroRightSection from "../component/HeroRightSection";
import HeroLeftSection from "../component/HeroLeftSection";

const Hero = () => {
  return (
    <>
      <Box
        h={{ base: "auto", lg: "94vh" }}
        bg="#6929c4"
        color={"white"}
        fontFamily="Poppins"
        id="hero"
        pt={{ lg: "3rem" }}
        // pb={{ base: "2rem", lg: "none" }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr .7fr" }}
          w={{ base: "100%", md: "90%" }}
          margin={"auto"}
          pt="1rem"
        >
          <HeroRightSection />
          <HeroLeftSection />
        </Grid>
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgb(245, 245, 245)"
              fill-opacity="1"
              d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,58.7C672,64,768,96,864,96C960,96,1056,64,1152,42.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
