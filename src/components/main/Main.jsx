import { Box } from "@mui/material";
import About from "../sections/about/About";
import Presentation from "../sections/presentation/Presentation";
import HardSkills from "../sections/hardskills/Hardskills";
import ProjectsList from "../sections/projects/ProjectsList";

function Main() {
  return (
    <Box>
      <Presentation />
      <About />
      <HardSkills />
      <ProjectsList />
    </Box>
  );
}

export default Main;
