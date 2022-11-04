import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Skill from "./Skill";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="./" element={<Hero />}></Route>
        <Route path="./" element={<About />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/skills" element={<Skill />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Box>
  );
};

export default AllRoutes;
