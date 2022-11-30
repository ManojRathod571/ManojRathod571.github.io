import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import { FcAbout } from "react-icons/fc";
import profile from "../Images/profile.02.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      bg="rgb(245, 245, 245)"
      id="about"
      py={{ base: "2rem", md: "0rem", lg: "3rem" }}
    >
      <Box w={{ base: "85%", md: "95%", lg: "85%" }} margin={"auto"}>
        <Flex justify="center">
          <FcAbout fontSize="2rem" color="green" />
        </Flex>
        <Text
          fontSize="4xl"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
        >
          About Me
        </Text>
        <motion.div
          initial={{
            x: -150,
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Grid
            gridTemplateColumns={{ base: "1fr", md: ".7fr 1fr" }}
            py="2rem"
            rowGap={{ base: "3rem", lg: "block" }}
          >
            <Flex
              w="80%"
              m={{ base: "auto", md: "left", lg: "auto" }}
              h="auto"
              align="center"
              justify={{ base: "center", md: "left", lg: "center" }}
            >
              <Box>
                <Image
                  src={profile}
                  boxSize={{ base: "15rem", lg: "24rem" }}
                  objectFit="cover"
                  alt="profile"
                  borderRadius={"50%"}
                  // w={{ base: "", lg: "50%" }}
                  // h={{ base: "", lg: "50%" }}
                />
              </Box>
            </Flex>
            <Flex align={"center"}>
              <Text
                fontSize={{ base: "16px", md: "", lg: "18px" }}
                fontWeight="400"
                fontFamily="Quicksand"
                fontStyle={"italic"}
                letterSpacing="1.5px"
                color="rgba(56,49,68,.8)"
              >
                Hi everyone, I am Manoj Rathod from Alur, Maharashtra. Currently
                I am pursuing a Full-Stack Web Development Course from Masai
                School. I have completed my Master of computer Application in
                Karad from Government college of Engineering, Total I have 2
                years of experience in different field. I have worked in Mphasis
                as a Account executive for 15 Months. I have 6 months of
                experience as a Frontend developer where I got opportunity to
                work on cutting edge technology like react, styled components. I
                found my self not getting much opportunities to lern new things
                so I joined Masai School , Which is a 7-Month long Intensive
                course with 1200+ hours of coding, DSA and hands-on Industry
                Relevant Skills.
              </Text>
            </Flex>
          </Grid>
        </motion.div>
      </Box>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L1440,64L1440,320L0,320Z"
        ></path>
      </svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,192L6.2,197.3C12.3,203,25,213,37,192C49.2,171,62,117,74,117.3C86.2,117,98,171,111,202.7C123.1,235,135,245,148,245.3C160,245,172,235,185,224C196.9,213,209,203,222,192C233.8,181,246,171,258,165.3C270.8,160,283,160,295,144C307.7,128,320,96,332,106.7C344.6,117,357,171,369,197.3C381.5,224,394,224,406,192C418.5,160,431,96,443,106.7C455.4,117,468,203,480,224C492.3,245,505,203,517,186.7C529.2,171,542,181,554,208C566.2,235,578,277,591,261.3C603.1,245,615,171,628,138.7C640,107,652,117,665,138.7C676.9,160,689,192,702,170.7C713.8,149,726,75,738,69.3C750.8,64,763,128,775,144C787.7,160,800,128,812,133.3C824.6,139,837,181,849,202.7C861.5,224,874,224,886,202.7C898.5,181,911,139,923,122.7C935.4,107,948,117,960,128C972.3,139,985,149,997,149.3C1009.2,149,1022,139,1034,160C1046.2,181,1058,235,1071,240C1083.1,245,1095,203,1108,181.3C1120,160,1132,160,1145,181.3C1156.9,203,1169,245,1182,234.7C1193.8,224,1206,160,1218,128C1230.8,96,1243,96,1255,90.7C1267.7,85,1280,75,1292,101.3C1304.6,128,1317,192,1329,213.3C1341.5,235,1354,213,1366,192C1378.5,171,1391,149,1403,144C1415.4,139,1428,149,1434,154.7L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"
        ></path>
      </svg> */}
    </Box>
  );
};

export default About;
