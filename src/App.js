import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import AllRoutes from "./pages/AllRoutes";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Calender from "./component/GitHubStat";
import Stats from "./component/GitHubStrik";
import GitHub from "./pages/GitHub";
import Contact from "./pages/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      {/* <AllRoutes /> */}
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <GitHub />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
