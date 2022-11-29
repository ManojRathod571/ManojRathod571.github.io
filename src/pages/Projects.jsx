import { Box, Flex, Text, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectLeftSection from "../component/ProjectLeftSection";
import ProjectRightSection from "../component/ProjectRightSection";
import ProjectSection from "../component/ProjectRightSection";

const FoodApp = [
  {
    id: "1",
    img: "https://i.postimg.cc/50MxfhQh/p1.png",
  },
  {
    id: "2",
    img: "https://i.postimg.cc/QdQD06yS/p2.png",
  },
  {
    id: "3",
    img: "https://i.postimg.cc/k5h7b2Zd/p3.png",
  },
  {
    id: "4",
    img: "https://i.postimg.cc/fyyWPx9y/p4.png",
  },
];

const Projects = () => {
  return (
    <Box bg="rgb(245, 245, 245)" pb="5rem" id="project">
      <Box
        w={{ base: "90%", lg: "85%" }}
        m="auto"
        py="4rem"
        position="relative"
      >
        <Flex justify="center">
          <FaProjectDiagram fontSize="2rem" color="#6929c4" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="700"
          textAlign={"center"}
          color="#001141"
          mb="5rem"
        >
          Projects
        </Text>
        {/* bg Image */}
        <Box
          position="absolute"
          top="5rem"
          bottom="0rem"
          left="3rem"
          right="0"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="https://assets-global.website-files.com/5db165cbf782f992df567ae5/60f835b74a8c5743d88a28b8_lines-home.svg"
            alt="bg-image"
            w="auto"
            h="100%"
            position="absolute"
            top="10"
            bottom="25rem"
            left="0"
            right="0"
          />
        </Box>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "1fr", lg: ".9fr 1fr" }}
          gap={{ base: "2rem", md: "", lg: "5rem" }}
          zIndex={100}
        >
          <Box
            zIndex={100}
            // gridRowStart={{ base: "2", md: "none", lg: "none" }}
            // gridRowEnd={{ base: "3", md: "none", lg: "none" }}
          >
            <ProjectLeftSection FoodApp={FoodApp} />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              name="Food App"
              deployurl="https://groc-basket.vercel.app/"
              gitHibLink="https://github.com/amss-22/taboo-lock-5540"
              duaration="A Solo Project executed in 01 day"
              desc="This project is about an Online E-commerce food web application showing the functionalities of an e-commerce website like sorting, searching , filtering, add to cart, login/signup and many more."
            />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              name="Food App"
              deployurl="https://groc-basket.vercel.app/"
              gitHibLink="https://github.com/amss-22/taboo-lock-5540"
              duaration="A Solo Project executed in 01 day"
              desc="This project is about an Online E-commerce food web application showing the functionalities of an e-commerce website like sorting, searching , filtering, add to cart, login/signup and many more."
            />
          </Box>
          <Box zIndex={100}>
            <ProjectLeftSection FoodApp={FoodApp} />
          </Box>
          <Box zIndex={100}>
            <ProjectLeftSection FoodApp={FoodApp} />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              deployurl="https://groc-basket.vercel.app/"
              gitHibLink="https://github.com/amss-22/taboo-lock-5540"
              name="Food App"
              duaration="A Solo Project executed in 01 day"
              desc="This project is about an Online E-commerce food web application showing the functionalities of an e-commerce website like sorting, searching , filtering, add to cart, login/signup and many more."
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
