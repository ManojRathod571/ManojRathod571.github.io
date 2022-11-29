import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SocialMediaSection = () => {
  return (
    <Flex
      pt={"2rem"}
      w={{ base: "80%", lg: "30%" }}
      margin="auto"
      justify="space-around"
    >
      <Flex
        w="35px"
        h="35px"
        borderRadius={"50%"}
        bg="white"
        align={"center"}
        justify="center"
      >
        <BsLinkedin fontSize="18px" color="#1F51FF" />
      </Flex>
      <Flex
        w="35px"
        h="35px"
        borderRadius={"50%"}
        bg="white"
        align={"center"}
        justify="center"
      >
        <GoMarkGithub fontSize="20px" color="black" />
      </Flex>
      <Flex
        w="35px"
        h="35px"
        borderRadius={"50%"}
        bg="white"
        align={"center"}
        justify="center"
      >
        <CgMail fontSize="22px" color="#FFBF00" />
      </Flex>
      <Flex
        w="35px"
        h="35px"
        borderRadius={"50%"}
        bg="white"
        align={"center"}
        justify="center"
      >
        <IoLogoTwitter fontSize="18px" color="#1d9bf0" />
      </Flex>
    </Flex>
  );
};

export default SocialMediaSection;
