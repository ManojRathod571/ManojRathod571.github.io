import { Box, Grid, Image, Flex, Text } from "@chakra-ui/react";
import { RiLightbulbFill } from "react-icons/ri";
import "../App.css";

let skills = [
  {
    id: "1",
    img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png",
    name: "HTML",
  },
  {
    id: "2",
    img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-128.png",
    name: " CSS",
  },
  {
    id: "3",
    img: "https://i.ibb.co/jZMcZMC/javascript.png",
    name: " Javascript",
  },
  {
    id: "4",
    img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png",
    name: " Typescript",
  },
  {
    id: "5",
    img: "https://i.ibb.co/8cx8KzC/6202fcdee5ee8636a145a41b-1234.png",
    name: " Express",
  },
  {
    id: "6",
    img: "https://i.ibb.co/dMhVT7t/mongodb.png",
    name: " MongoDb",
  },
  {
    id: "7",
    img: "https://i.ibb.co/WBxWt8Q/mongoose-removebg-preview.png",
    name: " Typescript",
  },
  {
    id: "8",
    img: "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-128.png",
    name: " React",
  },
  {
    id: "9",
    img: "https://i.ibb.co/RSvZL6j/redux.png",
    name: " Redux",
  },
  {
    id: "10",
    img: "https://i.ibb.co/4PNb6C0/rzyl-Ujaf-400x400-removebg-preview.png",
    name: " Chakra UI",
  },
  {
    id: "11",
    img: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png",
    name: " GitHub",
  },
  {
    id: "12",
    img: "https://i.ibb.co/q14GdKr/4691397-postman-icon.png",
    name: " Postman",
  },
  {
    id: "13",
    img: "https://i.ibb.co/8z0pBHy/png-transparent-data-structure-logo-brand-data-structure-blue-text-logo-thumbnail-removebg-preview.png",
    name: " Data Structure",
  },
];

const Skill = () => {
  return (
    <Box id="skills" bg="#fff0f5  ">
      <Box w={{ base: "100%", lg: "80%" }} m="auto" py="2rem">
        <Flex justify="center">
          <RiLightbulbFill fontSize="50" color="#6929c4" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
          pt="1rem"
        >
          Skills
        </Text>
        <Flex
          flexWrap={{ md: "wrap" }}
          justifyContent={{ md: "center" }}
          gap={{ base: "5", lg: 10 }}
          overflowX={{ base: "auto", md: "none" }}
          py={{ base: "3rem", lg: "3rem" }}
          px={{ base: "1rem", lg: "none" }}
        >
          {skills.map(({ id, img, name }) => {
            return (
              <Flex
                borderRadius="10px"
                p="1rem"
                justify="center"
                align="center"
                h={{ base: "8rem", lg: "8rem" }}
                w={{ base: "9rem", lg: "9rem" }}
                flexDirection={"column"}
                // bg="white"
                boxShadow="rgb(0 0 0 / 15%) 0px 1px 50px"
                key={id}
                cursor="pointer"
                className="div1"
              >
                <Flex
                  justify="center"
                  align="center"
                  // bg="rgb(210,228, 255)"
                  bg="blue.200"
                  w="60px"
                  h="60px"
                  borderRadius="5px"
                  mb="1rem"
                  zIndex="50"
                >
                  <Image src={img} alt="" w="30px" h="30px" />
                </Flex>
                <Text
                  fontFamily="Poppins"
                  textAlign={"center"}
                  fontSize="16px"
                  fontWeight="600"
                  minW={{ base: "6rem", lg: "none" }}
                >
                  {name}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Skill;
