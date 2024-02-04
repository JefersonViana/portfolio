import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Footer() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [text_title, setTextTitle] = useState('');

  const handleChange = (setInput, value) => {
    setInput(value);
  };

  const handleOpen = (title, text) => {
    setTextTitle(title);
    setText(text);
    setOpen(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClean = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSendMessage = () => {
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      handleOpen('FALHA!!', 'Email inválido!');
      handleClose();
      return;
    }
    if (!name || !email || name.length < 3 || message.length < 3) {
      handleOpen('FALHA!!', 'Preencha todos os campos!');
      handleClose();
      return;
    }
    handleOpen('SUCESSO!!', 'Mensagem enviada com sucesso!');
    handleClose();
    emailjs.send('service_m9sfgln', 'template_b4l4vq8', {
      from_name: name,
      message: message,
      reply_to: email,
    }, 'lxHr1Rwp4TCdiNg6w')
    handleClean();
  };

  return (
    <Box className="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000010',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          margin: '20px',
        }}
      >Contate-me</Typography>
      <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        color="success"
        required
        value={name}
        onChange={(e) => handleChange(setName, e.target.value)}
        sx={{
          margin: '10px 0px',
          width: { xs: '90%', sm: '50%', md: '40%'},
          backgroundColor: '#ffffff20',
          borderRadius: '5px',
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        color="success"
        required
        value={email}
        onChange={(e) => handleChange(setEmail, e.target.value)}
        sx={{
          margin: '10px 0px',
          width: { xs: '90%', sm: '50%', md: '40%'},
          backgroundColor: '#ffffff20',
          borderRadius: '5px',
        }}
      />
      <TextField
        id="outlined-basic"
        label="Mensagem"
        variant="outlined"
        color="success"
        required
        value={message}
        onChange={(e) => handleChange(setMessage, e.target.value)}
        sx={{
          margin: '10px 0px',
          width: { xs: '90%', sm: '50%', md: '40%'},
          backgroundColor: '#ffffff20',
          borderRadius: '5px',
        }}
      />
      <Button
            variant="outline"
            sx={{
              border: "1px solid #39FF14",
              width: { xs: '60%', sm: '20%', md: '20%' },
              height: { xs: '2.8rem', sm: '2rem', md: '3.2rem' },
              borderRadius: 5,
              color: '#fff',
              margin: '2rem',
              fontSize: { xs: '.9rem', sm: '.5rem', md: '.8rem' },
              animation: 'alternate-reverse 1s linear infinite',
              '&:hover': {
                background: 'linear-gradient(to right bottom, #828282, #82828280)',
                color: '#fff',
                border: "1px solid #828282",
                transform: 'scale(1.1)',
              }
            }}
            onClick={() => handleSendMessage()}
          >
          Enviar Mensagem
          </Button>
          {open ? (
          <Box
            sx ={{
              width: { xs: '90%', sm: '50%', md: '40%'},
              height: '250px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '15px',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff20',
              position: 'relative',
              top: '-350px',
              zIndex: 1,
              color: 'white',
            }} 
          >
            <Typography
              variant="h4"
            >
              {text_title}
            </Typography>
            <Typography
              variant="p"
            >
              {text}
            </Typography>
          </Box>)
          : null }
          <Box
            id="contact"
          >
            <Typography
              variant="p"
              sx={{
                color: 'white',
                margin: '20px',
                width: '90%',
              }}
            >© Página criada por Jeferson Viana. Todos os direitos reservados.</Typography>
          </Box>
    </Box>
  );
}

export default Footer;