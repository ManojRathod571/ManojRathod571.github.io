import { Image, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg={{ base: "rgb(245, 245, 245)", lg: "none" }}>
      <Box py="5rem" w="80%" m="auto">
        <Text
          fontSize=""
          fontWeight=""
          fontFamily=""
          color=""
          textAlign="center"
          mb="1rem"
        >
          Designed by Manoj Rathod, @ 2022 Nov
        </Text>
        <Box>
          <Box>
            <Flex justify="center">
              <Image
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a39957b258af61b_ship.svg"
                alt="ship"
                w="4rem"
                h="4rem"
                // style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
              />
            </Flex>
            <Box mt="-.9rem">
              <Image
                src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a399572518af5ee_ocean.svg"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
