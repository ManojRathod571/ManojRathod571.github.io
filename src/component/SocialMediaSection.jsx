import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";
import { Flex } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

const SocialMediaSection = () => {
  return (
    <Flex
      pt={"2rem"}
      w={{ base: "80%", lg: "40%" }}
      margin="auto"
      justify="space-around"
    >
      <a href="https://www.linkedin.com/in/manoj-rathod-01943911a/">
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
      </a>
      <a href="https://github.com/ManojRathod571">
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
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
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
      </a>
      <a href="https://twitter.com/ManojRa65572407/media">
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
      </a>
    </Flex>
  );
};

export default SocialMediaSection;
