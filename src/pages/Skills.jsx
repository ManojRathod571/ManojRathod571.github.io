import React from "react";
import { RiLightbulbFill } from "react-icons/ri";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

let array = [
  "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png",
  "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-128.png",
  "https://i.ibb.co/jZMcZMC/javascript.png",
  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png",
  "https://i.ibb.co/8cx8KzC/6202fcdee5ee8636a145a41b-1234.png",
  "https://i.ibb.co/dMhVT7t/mongodb.png",
  "https://i.ibb.co/WBxWt8Q/mongoose-removebg-preview.png",
  "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-128.png",

  "https://i.ibb.co/RSvZL6j/redux.png",
  "https://i.ibb.co/4PNb6C0/rzyl-Ujaf-400x400-removebg-preview.png",
  "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png",

  "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png",
  "https://i.ibb.co/q14GdKr/4691397-postman-icon.png",

  "https://i.ibb.co/8z0pBHy/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo-thumbnail-removebg-preview.png",
];

const Skills = () => {
  return (
    <Grid bg="#B0E0E6" py="1rem" align="center" id="Skills">
      <Box
        py="3rem"
        bg="radial-gradient(circle farthest-corner at 50% 50%,#7738d6 49%,rgba(28,0,71,.48))"
        w="50%"
        h="auto"
        border="2px solid"
        borderColor="gray.500"
        borderRadius="50%"
        // boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
        boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
        ml="25%"
      >
        <Flex justify="center">
          <RiLightbulbFill fontSize="50" color="white" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="500"
          textAlign={"center"}
          color="#fff"
          pt="1rem"
        >
          Skills
        </Text>
        <Flex justifyContent={"center"} alignItems="center" py="3rem">
          <Grid
            m="auto"
            w="60%"
            align={"center"}
            justify="center"
            gridTemplateColumns="repeat(4,1fr)"
            rowGap="10"
            columnGap={{ base: "3", md: "0" }}
          >
            {" "}
            {array.map((elem, i) => {
              return (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 60,
                    }}
                  >
                    <Flex
                      justify={"center"}
                      border="2px solid white"
                      borderRadius="full"
                      overflow={"hidden"}
                      w="75px"
                      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                      p="15px"
                    >
                      <Image w="100%" src={elem} />
                    </Flex>
                  </motion.div>
                </>
              );
            })}
          </Grid>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Skills;
