import { Grid, Box } from "@chakra-ui/react";
import React from "react";

const Education = () => {
  return (
    <Box h={"80vh"}>
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Box border="1px solid black"></Box>
        <Box border="1px solid black"></Box>
      </Grid>
    </Box>
  );
};

export default Education;
