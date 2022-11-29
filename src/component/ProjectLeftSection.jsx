import { Box, Image, Grid, Flex } from "@chakra-ui/react";

const ProjectLeftSection = ({ FoodApp }) => {
  return (
    <Box
      w="100%"
      h={{ lg: "20rem" }}
      m={{ base: "auto", lg: "none" }}
      borderRadius="10px"
      border="1px solid #c9cdcd"
      bg="#e8eeef"
      borderLeft="25px solid #4f4a58"
      borderRight="10px solid #4f4a58"
      borderTop="5px solid #4f4a58"
      // borderBottom="5px solid #4f4a58"
      zIndex={20}
    >
      <Grid gridTemplateColumns="1fr 1fr" gap={2}>
        {FoodApp.map(({ img, id }) => {
          return (
            <Box key={id} w="100%">
              <Image src={img} alt={id} h="100%" w="100%" objectFit={"cover"} />
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectLeftSection;
