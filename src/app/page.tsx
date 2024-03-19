"use client"
import About from "./components/about";
import Projects from "./components/projects";
import Recommendations from "./components/recommendations";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Recommendations />
    </>
  );
}
