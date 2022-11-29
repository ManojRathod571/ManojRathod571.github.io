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
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={{ base: "3", md: "5" }}
      gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
    >
      <Box>
        <Image src="https://streak-stats.demolab.com/?user=ManojRathod571&theme=nord&hide_border=true&border_radius=30&date_format=M%20j%5B%2C%20Y%5D)" />
      </Box>
      <Box>
        <Image src="https://github-readme-stats.vercel.app/api?username=ManojRathod571&count_private=true&theme=nord&hide_border=true&border_radius=30" />
      </Box>
      <Box w="100%">
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=ManojRathod571&layout=compact&theme=nord&hide_border=true&border_radius=30"
          w="100%"
        />
      </Box>
    </Grid>
  );
};

export default Stats;
