import { Box, Button, Link, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background_liso from '../../../assets/background_1.png'
import projectsList from './projectsList';
import Slider from 'react-slick';

function ProjectsList() {
  const settings = {
    speed: 500,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <Box
      sx={{
        padding: '2rem',
        backgroundColor: '#000000cc',
      }}
    >
    <Slider {...settings}>
      {projectsList.map((item, index) => (
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
            width: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '200px',
                height: '200px',
                marginTop: '1.2rem',
                borderRadius: '1.5rem',
              }}
            />
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '50%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                display: 'flex',
                alignSelf: 'flex-start',
                marginLeft: '1.2rem',
                marginTop: '.8rem',
                color: '#39FF14',
                fontWeight: 'bold',
              }}
            >{item.name}</Typography>
            <Typography
              sx={{
                display: 'flex',
                alignSelf: 'flex-start',
                marginLeft: '1.2rem',
                color: '#FFF',
              }}
            >{item.description}</Typography>
            <Link
              href={item.link}
              target='_blank'
              rel='noreferrer'
              underline='none'
              sx={{
                display: 'flex',
                alignSelf: 'center',
                marginTop: '.8rem',
                marginBottom: '.8rem',
              }}
            >
              <Button variant='contained' sx={{
                background: 'linear-gradient(to right bottom, #39FF1488, #39FF1410)',
                '&:hover': {
                  background: '#39FF14',
                },
              }}>{
                item.name === 'Aguarde...' ? 'Github' : 'Ver mais'
              }</Button>
            </Link>
          </Box>
        </Box>
  ))}
    </Slider>
    </Box>
  )
}

export default ProjectsList;