import { Box, Flex } from "@chakra-ui/react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Flex h="100vh" justify="center">
        <Hero />
      </Flex>
    </Box>
  );
}

export default App;
