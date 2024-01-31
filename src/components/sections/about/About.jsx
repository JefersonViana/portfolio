import { Box, Typography } from "@mui/material"
import './about.css';

function About () {
  return (
    <Box
      sx={{
        color: 'white',
        backgroundColor: '#000000cc',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid #39FF14',
        borderBottom: '1px solid #39FF14',
        paddingBottom: '2rem',
      }}
    >
      <Typography
        variant="h4"
        className="title-sobre-mim"
        sx={{
          fontWeight: 'bold',
          marginTop: '3rem',
          marginBottom: '15px',
        }}
      >Sobre mim</Typography>
      <Typography
        component="p"
        className="p-sobre-mim"
        sx={{
          width: { xs: '85%', sm: '70%', md: '50%' },
          textAlign: 'justify',
          textJustify: 'inter-word',
        }}
      >
        Desenvolvedor Fullstack apaixonado por desafios e inovação. Formado na Trybe com foco nas liguagens de programação: Python, Typescript e Javascript. No meu Github é possível ver mais de +40 projetos desenvolvidos na Trybe. Minhas habilidades abrangem desde tecnologias como Node.js, React, Redux, Context API até práticas como testes unitários e/ou integração e arquitetura em camadas. Com uma abordagem técnica e ágil, complemento meu perfil com soft skills, como comunicação e trabalho em equipe. Determinado a ser reconhecido não só pelo conhecimento técnico, mas também pela liderança e resolução eficaz de problemas. Pronto para enfrentar desafios e contribuir para o sucesso do seu projeto. Vamos criar algo incrível juntos!
      </Typography>
    </Box>
  )
}

export default About