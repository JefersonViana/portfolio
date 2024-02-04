import { Box, Typography } from "@mui/material";
import listHardSkills from './hardskill_data';
import background_liso from '../../../assets/background_1.png'

function HardSkills () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000010',
        padding: '2rem 1rem',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          fontWeight: 'bold',
          justifySelf: 'center',
          color: 'white',
          margin: '1rem .5rem',
        }}
      >HABILIDADES</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr' },
          gap: '2rem',
          alignItems: 'center',
          backgroundColor: '#000010',
          padding: { xs: '1rem', sm: '1rem 0rem 1rem 4rem', md: '4rem 10rem'},
        }}
      >
        {listHardSkills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#39FF1460',
              backgroundImage: `url(${background_liso})`,
              backgroundSize: 'cover',
              borderRadius: '2rem',
              opacity: '0.6',
              boxShadow: 'inset 0px 0px 5px 0px #39FF14',
              padding: { xs: '1rem', sm: '1rem', md: '2rem 1rem'},
              width: { xs: '90%', sm: '80%', md: '90%'},
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#39FF14'
              }}
            >{skill.name}</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                width: { xs: '70%', sm: '70%', md: '70%'},
              }}
            >
            {skill.skills.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  height: { xs: '30px', sm: '30px', md: '30px'},
                  width: { xs: '100px', sm: '100px', md: '100px'},
                  margin: '5px',
                }}
              >
                {item.img ? <img src={item.img} alt={item.name} style={{ width: '15px', height: '15px', marginTop: '2px' }}/> : null}
                <Box
                  sx={{
                    height: '100%',
                    width: '140px',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '5px',
                  }}
                >
                  <small>{item.name}</small>
                  <small>{item.proficiency}</small>
                </Box>
              </Box>
            ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default HardSkills;
