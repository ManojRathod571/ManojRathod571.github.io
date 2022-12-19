import { Box, Flex, Text, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectLeftSection from "../component/ProjectLeftSection";
import ProjectRightSection from "../component/ProjectRightSection";
import ProjectSection from "../component/ProjectRightSection";

const FoodApp = [
  {
    id: "1",
    img: "https://i.postimg.cc/Dw6GCMC0/bb5.png",
  },
  {
    id: "2",
    img: "https://i.postimg.cc/C1gVzcgC/bb6.png",
  },
  {
    id: "3",
    img: "https://i.postimg.cc/j28V3KJv/bb7.png",
  },
  {
    id: "4",
    img: "https://i.postimg.cc/sxfdJ11v/bb8.png",
  },
];

const BigBasket = [
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

const Shemrus = [
  {
    id: "1",
    img: "https://i.postimg.cc/LXD6Sc1g/s1.png",
  },
  {
    id: "2",
    img: "https://i.postimg.cc/prdVLsfG/s2.png",
  },
  {
    id: "3",
    img: "https://i.postimg.cc/SQZNvp4w/s3.png",
  },
  {
    id: "4",
    img: "https://i.postimg.cc/fygztY5w/s4.png",
  },
];

const mg = [
  {
    id: "1",
    img: "https://i.postimg.cc/SxVf3sZW/1mg.png",
  },
  {
    id: "2",
    img: "https://i.postimg.cc/prNfznTt/2mg.png",
  },
  {
    id: "3",
    img: "https://i.postimg.cc/yd3hDT7P/3mg.png",
  },
  {
    id: "4",
    img: "https://i.postimg.cc/jdb6jNmH/4mg.png",
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
          <Box zIndex={100}>
            <ProjectLeftSection FoodApp={FoodApp} />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              name="Big Basket"
              deployurl="https://flourishing-bienenstitch-1e8edf.netlify.app/"
              gitHibLink="https://github.com/ManojRathod571/BigBasket"
              duaration="A Solo Project executed in 10 day"
              desc="This is a clone of Big Basket E-commecrce website. This website provides all the basic functionality to purchase a products. Handled most of the functionality from backend "
            />
          </Box>
          <Box zIndex={100} display={{ base: "block", lg: "none" }}>
            <ProjectLeftSection FoodApp={Shemrus} />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              name="Semrush"
              deployurl="https://semrush.netlify.app/index.html"
              gitHibLink="https://github.com/isky27/spicy-yak-7891"
              duaration="The Project was done in collaboration within 04 day's."
              desc="It is a clone of Semrush, the online visibility management and content marketing SaaS platform. It has filtering, login/signup, pricing and lost of animation"
            />
          </Box>
          <Box zIndex={100} display={{ base: "none", lg: "block" }}>
            <ProjectLeftSection FoodApp={Shemrus} />
          </Box>
          <Box zIndex={100}>
            <ProjectLeftSection FoodApp={mg} />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              deployurl="https://911-com.vercel.app"
              gitHibLink="https://github.com/Rohit1-1/phobic-turn-8444"
              name="Tata 1mg"
              duaration="A Solo Project executed in 01 day"
              desc="This is clone of TATA 1mg. This is a healthcare platform. This website provides all the functionalities like filter, sorting and search product by name. This website has Admin panel as well"
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
