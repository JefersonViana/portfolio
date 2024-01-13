import { Box, Typography } from "@mui/material";
import CustomizedSwitche from "./Switch";
import MenuListComposition from "./Menu";


function Header() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#000000',
      borderBottom: '1px solid #39FF14',
    }}>
      <MenuListComposition />
      <Typography
        component="h1"
        sx={{
          color: '#fff',
          fontSize: { xs: '1.7rem', md: '2rem' }
        }}
      >Portfolio</Typography>
      <CustomizedSwitche />
    </Box>
  );
}

export default Header;