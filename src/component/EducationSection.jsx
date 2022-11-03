import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <>
      <Flex align={"center"}>
        <Flex mr="2rem">
          <GiGraduateCap fontSize="35px" color="#6929c4" />
        </Flex>
        <Text
          fontSize="3xl"
          fontFamily="Poppins"
          fontWeight="500"
          textAlign={"center"}
          color="#001141"
        >
          Education
        </Text>
      </Flex>

      <Box pt="1.5rem">
        <Text fontSize="22px" fontWeight="500" fontFamily="Poppins">
          Full Stack Web Development(Full Time)
        </Text>
        <motion.div
          initial={{
            // x: 150,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
            @ Masai School, Bangalore
          </Text>
          <Flex>
            <Flex align={"center"} mr="1.5rem">
              <BsCalendarDate color="blue" />
            </Flex>
            <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
              05/19 <span style={{ fontStyle: "italic" }}>to </span> present /
              Remote
            </Text>
          </Flex>
        </motion.div>
      </Box>
      <Box pt="1.5rem">
        <Text fontSize="22px" fontWeight="500" fontFamily="Poppins">
          Master Of Computer Application (MCA)
        </Text>
        <motion.div
          initial={{
            // x: 150,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
            @ Government College of Engineering, Karad
          </Text>
          <Flex>
            <Flex align={"center"} mr="1.5rem">
              <BsCalendarDate color="blue" />
            </Flex>
            <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
              07/2015 <span style={{ fontStyle: "italic" }}>to </span> 04/2018
            </Text>
          </Flex>
        </motion.div>
      </Box>
      <Box pt="1.5rem">
        <Text fontSize="22px" fontWeight="500" fontFamily="Poppins">
          Bachlor Of Computer Application (BCA)
        </Text>
        <motion.div
          initial={{
            // x: 150,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
            @ KBP, Urun Islampur
          </Text>
          <Flex>
            <Flex align={"center"} mr="1.5rem">
              <BsCalendarDate color="blue" />
            </Flex>
            <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
              07/2012 <span style={{ fontStyle: "italic" }}>to </span> 06/2015
            </Text>
          </Flex>
        </motion.div>
      </Box>
      <Box pt="1.5rem">
        <Text fontSize="22px" fontWeight="500" fontFamily="Poppins">
          Higher Secondary Education
        </Text>
        <motion.div
          initial={{
            // x: 150,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >
          <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
            @ Baba Patil Junior College, Aitwade Khurd
          </Text>
          <Flex>
            <Flex align={"center"} mr="1.5rem">
              <BsCalendarDate color="blue" />
            </Flex>
            <Text fontSize="16px" fontWeight="400" fontFamily="Poppins">
              07/2012 <span style={{ fontStyle: "italic" }}>to </span> 06/2015
            </Text>
          </Flex>
        </motion.div>
      </Box>
    </>
  );
};

export default EducationSection;
