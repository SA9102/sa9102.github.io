import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import { Box, Stack } from "@mui/material";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Navbar />

      <Stack p={2} gap={1}>
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
      </Stack>
    </>
  );
}

export default App;
