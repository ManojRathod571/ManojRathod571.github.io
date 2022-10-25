import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import AllRoutes from "./pages/AllRoutes";
import Education from "./pages/Education";

function App() {
  return (
    <Box>
      <Navbar />
      {/* <AllRoutes /> */}
      <Hero />
      <About />
      <Education />
    </Box>
  );
}

export default App;
