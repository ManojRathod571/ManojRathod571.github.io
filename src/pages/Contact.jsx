import React from "react";
import {
  Box,
  Grid,
  Flex,
  Text,
  FormLabel,
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { IoMdContact } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { CgMail } from "react-icons/cg";
import { IoLogoTwitter } from "react-icons/io";

const Contact = () => {
  return (
    <Box bg="rgb(245, 245, 245)" id="contact">
      <Box w={{ lg: "70%" }} m="auto" py="4rem">
        <Flex justify="center">
          <IoMdContact fontSize="2.5rem" color="rgba(38,50,157,1)" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
          mb="2rem"
        >
          Contact Me
        </Text>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1.6fr" }}
          h={{ base: "auto", lg: "70vh" }}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          borderRadius={{ lg: "10px" }}
          bg="white"
          rowGap={{ base: "2rem", lg: "" }}
        >
          <Box
            bg="rgba(38,50,157,1)"
            py="3rem"
            px="1.5rem"
            borderRadius={{ lg: "10px" }}
          >
            <Text
              fontSize="25px"
              fontFamily="Poppins"
              fontWeight="500"
              color="white"
              textAlign="Left"
              mb="1rem"
            >
              Contact Information
            </Text>
            <Text
              fontSize="16px"
              fontFamily="Poppins"
              fontWeight="400"
              color="white"
              textAlign="left"
              mb="3rem"
            >
              Want to get in touch? I would love to connect with you! Here’s how
              you can reach out to me
            </Text>
            <Flex mb="2rem">
              <Box mr="1.5rem">
                <MdAddIcCall fontSize="1.5rem" color="white" />
              </Box>
              <Text
                fontSize="16px"
                fontFamily="Poppins"
                fontWeight="400"
                color="white"
                textAlign="left"
              >
                +91-7028203637
              </Text>
            </Flex>
            <Flex mb="2rem">
              <Box mr="1.5rem">
                <MdMail fontSize="1.5rem" color="white" />
              </Box>
              <Text
                fontSize="16px"
                fontFamily="Poppins"
                fontWeight="400"
                color="white"
                textAlign="left"
              >
                myraysever@gmail.com
              </Text>
            </Flex>
            <Flex mb="3rem">
              <Box mr="1.5rem">
                <MdLocationOn fontSize="1.8rem" color="white" />
              </Box>
              <Text
                fontSize="16px"
                fontFamily="Poppins"
                fontWeight="400"
                color="white"
                textAlign="left"
              >
                Pune, Maharashtra
              </Text>
            </Flex>
            <Flex justify="space-evenly">
              <BsLinkedin fontSize="1.6rem" color="white" />
              <GoMarkGithub fontSize="1.6rem" color="white" />
              <CgMail fontSize="1.6rem" color="white" />
              <IoLogoTwitter fontSize="1.6rem" color="white" />
            </Flex>
          </Box>
          <Box
            w={{ base: "85%", md: "", lg: "60%" }}
            m="auto"
            pb={{ base: "1.5rem", lg: "none" }}
          >
            <FormControl>
              <Box mb="1rem">
                <FormLabel fontFamily="Poppins" color="gray.700">
                  Your Name
                </FormLabel>
                <InputGroup w="100%">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdDriveFileRenameOutline color="gray.800" />}
                  />
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    color="gray.700"
                  />
                </InputGroup>
              </Box>

              <Box mb="1rem">
                <FormLabel fontFamily="Poppins" color="gray.700">
                  Email
                </FormLabel>
                <InputGroup w="100%">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdMarkEmailUnread color="gray.800" />}
                  />
                  <Input
                    type="text"
                    placeholder="Enter your Email"
                    color="gray.700"
                  />
                </InputGroup>
              </Box>

              <Box mb="1rem">
                <FormLabel fontFamily="Poppins" color="gray.700">
                  Message
                </FormLabel>

                <Textarea placeholder="Enter your message here" />
              </Box>
              <Button
                mt="4"
                bg="#6929c4"
                color="white"
                type="submit"
                w="100%"
                mb="1rem"
              >
                Send Your Message
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
