import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { GoMarkGithub } from "react-icons/go";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <Box py="4rem" w="85%" m="auto" bg="">
      <Flex justify="center">
        <GoMarkGithub fontSize="2.3rem" color="#6929c4" />
      </Flex>
      <Text
        fontSize="4xl"
        fontWeight="500"
        textAlign={"center"}
        color="#001141"
        mb="2rem"
      >
        GitHub Calender
      </Text>
      <GitHubCalendar
        style={{ margin: "auto" }}
        username="ManojRathod571"
        transformData={selectLastHalfYear}
        blockSize={20}
        fontSize={20}
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </Box>
  );
};

export default Calender;
