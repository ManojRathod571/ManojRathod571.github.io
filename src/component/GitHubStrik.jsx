import React from "react";
import { Grid, Box, Text, Image } from "@chakra-ui/react";
import "../App.css";
const Stats = () => {
  return (
    // streak
    <Grid
      pb="5rem"
      w="85%"
      m="auto"
      justifyContent={"center"}
      alignItems={"center"}
      gap={{ base: "3", md: "5" }}
      gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
    >
      <Image src="https://streak-stats.demolab.com/?user=ManojRathod571&theme=nord&hide_border=true&border_radius=30&date_format=M%20j%5B%2C%20Y%5D)" />
      <Image src="https://github-readme-stats.vercel.app/api?username=ManojRathod571&count_private=true&theme=nord&hide_border=true&border_radius=30" />
      <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=ManojRathod571&layout=compact&theme=nord&hide_border=true&border_radius=30" />
    </Grid>
  );
};

export default Stats;
