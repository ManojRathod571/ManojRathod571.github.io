import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar);
  const changeNavbarBg = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);
  return (
    <Box boxShadow="2.7812px 2.5625px 10.125px rgb(20 20 20 / 25%)">
      <Box>
        <motion.div
          initial={{
            x: -800,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Flex
            justify={{ base: "space-between", md: "space-between" }}
            align="center"
            w={{ base: "95%", sm: "98%", md: "50%" }}
            m="auto"
            height={{ base: "2rem", md: "4rem" }}
            px="3rem"
            // color={"#38B2AC"}
            position={"sticky"}
            top={"0"}
          >
            <Text
              fontFamily="Poppins"
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight={{ base: "500" }}
            >
              HOME
            </Text>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "18px" }}
              fontWeight={{ base: "500" }}
            >
              ABOUT
            </Text>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "18px" }}
              fontWeight={{ base: "500" }}
            >
              SKILLS
            </Text>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "18px" }}
              fontWeight={{ base: "500" }}
            >
              PROJECTS
            </Text>
            <Text
              fontSize={{ base: "14px", sm: "14px", md: "18px" }}
              fontWeight={{ base: "500" }}
            >
              CONTACT
            </Text>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Navbar;
