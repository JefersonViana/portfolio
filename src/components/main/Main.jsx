import { Box } from "@mui/material";
import About from "../sections/about/About";
import Presentation from "../sections/presentation/Presentation";
import HardSkills from "../sections/hardskills/Hardskills";

function Main() {
  return (
    <Box>
      <Presentation />
      <About />
      <HardSkills />
    </Box>
  );
}

export default Main;
