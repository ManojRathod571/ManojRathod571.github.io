import { Box, Flex, Text, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectLeftSection from "../component/ProjectLeftSection";
import ProjectRightSection from "../component/ProjectRightSection";
import ProjectSection from "../component/ProjectRightSection";
import { DiNodejs, DiJavascript1, DiNodejsSmall } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiJson,
  SiChakraui,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { FaRegPlusSquare, FaReact, FaCss3Alt } from "react-icons/fa";

const PhareasyStack = [
  { id: 1, icon: <FaReact />, tech: "React" },
  { id: 2, icon: <DiNodejsSmall />, tech: "Node" },
  { id: 3, icon: <SiExpress />, tech: "Express" },
  { id: 4, icon: <SiMongodb />, tech: "MongoDB" },
  { id: 5, icon: <SiChakraui />, tech: "Chakra" },
  { id: 6, icon: <SiRedux />, tech: "Redux" },
  { id: 7, icon: <SiTypescript />, tech: "Typescript" },
];

const BigBasketStack = [
  { id: 1, icon: <FaReact />, tech: "React" },
  { id: 2, icon: <DiNodejsSmall />, tech: "Node" },
  { id: 3, icon: <SiExpress />, tech: "Express" },
  { id: 4, icon: <SiMongodb />, tech: "MongoDB" },
  { id: 5, icon: <SiChakraui />, tech: "Chakra" },
  { id: 6, icon: <SiRedux />, tech: "Redux" },
];

const OneMgStack = [
  { id: 1, icon: <FaReact />, tech: "React" },
  { id: 2, icon: <DiNodejsSmall />, tech: "Node" },
  { id: 3, icon: <SiExpress />, tech: "Express" },
  { id: 4, icon: <SiMongodb />, tech: "MongoDB" },
  { id: 5, icon: <SiChakraui />, tech: "Chakra" },
  { id: 6, icon: <SiRedux />, tech: "Redux" },
];

const ShemrusStack = [
  { id: 1, icon: <DiJavascript1 />, tech: "Javascript" },
  { id: 2, icon: <IoLogoHtml5 />, tech: "HTML5" },
  { id: 3, icon: <FaCss3Alt />, tech: "CSS3" },
  { id: 4, icon: <SiJson />, tech: "JSON" },
];

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

const Pharmeasy = [
  {
    id: "1",
    img: "https://user-images.githubusercontent.com/83955262/212983875-71d0e53c-9c6f-426c-854d-da8f38433d6c.png",
  },
  {
    id: "2",
    img: "https://user-images.githubusercontent.com/83955262/212984009-9f54be70-f8a8-4a74-bf07-5561d82c1083.png",
  },
  {
    id: "3",
    img: "https://user-images.githubusercontent.com/83955262/212984086-b39252f5-87a4-401a-86e4-a2c60f24902a.png",
  },
  {
    id: "4",
    img: "https://user-images.githubusercontent.com/83955262/212984147-e0faff3c-a5bf-4ef1-a6df-394e7ef5b2d3.png",
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
          opacity={0.3}
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
          {/* Pharmeasy */}
          <Box zIndex={100}>
            <ProjectLeftSection Images={Pharmeasy} />
          </Box>
          <Box zIndex={100}>
            <ProjectRightSection
              tech={PhareasyStack}
              name="Pharmeasy"
              deployurl="https://pharmeasy-rho.vercel.app/"
              gitHibLink="https://github.com/ManojRathod571/BigBasket"
              duaration="A Solo Project executed in 07 day"
              desc="This is an E-Commerce Pharma website, which provides healthcare products, labtests , health packages as per the user health."
            />
          </Box>

          {/* big basket */}

          <Box zIndex={100}>
            <ProjectRightSection
              tech={BigBasketStack}
              name="Big Basket"
              deployurl="https://flourishing-bienenstitch-1e8edf.netlify.app/"
              gitHibLink="https://github.com/ManojRathod571/BigBasket"
              duaration="A Solo Project executed in 10 day"
              desc="This is a clone of Big Basket E-commecrce website. This website provides all the basic functionality to purchase a products. Handled most of the functionality from backend "
            />
          </Box>
          <Box zIndex={100}>
            <ProjectLeftSection Images={FoodApp} />
          </Box>

          {/* one MG */}
          <Box zIndex={100}>
            <ProjectLeftSection Images={mg} />
          </Box>
          <Box zIndex={1000}>
            <ProjectRightSection
              tech={OneMgStack}
              deployurl="https://911-com.vercel.app"
              gitHibLink="https://github.com/Rohit1-1/phobic-turn-8444"
              name="Tata 1mg"
              duaration="A Solo Project executed in 01 day"
              desc="This is clone of TATA 1mg. This is a healthcare platform. This website provides all the functionalities like filter, sorting and search product by name. This website has Admin panel as well"
            />
          </Box>

          {/*Shemrus */}
          <Box zIndex={100}>
            <ProjectRightSection
              tech={ShemrusStack}
              name="Semrush"
              deployurl="https://semrush.netlify.app/index.html"
              gitHibLink="https://github.com/isky27/spicy-yak-7891"
              duaration="The Project was done in collaboration within 04 day's."
              desc="It is a clone of Semrush, the online visibility management and content marketing SaaS platform. It has filtering, login/signup, pricing and lost of animation"
            />
          </Box>
          <Box zIndex={1000} display={{ base: "block" }}>
            <ProjectLeftSection Images={Shemrus} />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
