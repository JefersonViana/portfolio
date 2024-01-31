import { Box, Button, Typography } from "@mui/material";
import profile_img from '../../../assets/foto.png'
// import background from '../../assets/background.png'
// import background_liso from '../../assets/background_liso.png'
import useMediaQuery from '@mui/material/useMediaQuery';


function Presentation () {
  const matches = useMediaQuery('(min-width:660px)');
  const matche2 = useMediaQuery('(min-width:750px)');
  const matche3 = useMediaQuery('(min-height:667px)');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', sm: 'row', md: 'row' },
        justifyContent: { xs: 'center', sm: 'space-between', md: 'space-between' },
        alignItems: 'center',
        backgroundColor: '#000000cc',
        padding: { xs: '10px 20px', sm: matche2 ? '0px 40px' : '10px 20px', md: '20px 40px' },
        height: { xs: matche3 ? '90vh' : '90vh', sm: '90vh', md: '90vh' }, //45
      }}
    >
      <Box
        sx={{
          marginTop: { xs: '20px', md: '0px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'flex-start' },
          color: '#fff',
          width: { xs: '100%', sm: '50%', md: '50%' },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: matches ? '2.8rem' : '2.2rem',
              md: '3rem'
            },
          }}
        >Olá, eu sou o</Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: {
              xs: '2.5rem',
              sm: matches ? '2.8rem' : '2.2rem',
              md: '3rem'
            },
            color: '#39FF14'
          }}
        >Jeferson Viana</Typography>
        <Typography
          component="small"
          sx={{
            color: '#828282'
          }}
        >Desenvolvedor Full-Stack</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            mt: 2,
            width: '100%',
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Button
            variant="solid"
            sx={{
              borderRadius: 5,
              width: { xs: '18rem', sm: '40%'},
              height: { xs: '2.8rem', sm: matches ? '2.5rem' : '2rem', md: '3.2rem' },
              background: 'linear-gradient(to right bottom, #39FF1488, #39FF1410)',
              fontSize: { xs: '.9rem', sm: '.8rem' },
              '&:hover': {
                background: 'linear-gradient(to right bottom, #828282, #82828280)',
                color: '#fff',
              }
            }}
          >Download CV</Button>
          <Button
            variant="outline"
            sx={{
              border: "1px solid #39FF14",
              width: { xs: '18rem', sm: '50%', md: '50%' },
              height: { xs: '2.8rem', sm: matches ? '2.5rem' : '2rem', md: '3.2rem' },
              borderRadius: 5,
              marginTop: { xs: 2, sm: 0 },
              marginLeft: { xs: 0, sm: 2 },
              fontSize: { xs: '.9rem', sm: '.5rem', md: '.8rem' },
              '&:hover': {
                background: 'linear-gradient(to right bottom, #828282, #82828280)',
                color: '#fff',
                border: "1px solid #828282",
              }
            }}
          >Entrar em contato</Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${profile_img})`,
          width: { xs: '200px', sm: matches ? '300px' : '200px', md: '420px' },
          height: { xs: '200px', sm: matches ? '300px' : '200px', md: '420px' },
          backgroundSize: 'cover',
          borderRadius: '80% 10% 80% 30%',
          backgroundColor: '#00000030',
        }}
      ></Box>
    </Box>
  )
}

export default Presentation;
