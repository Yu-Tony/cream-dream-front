import React from 'react';
import { FormControl, TextField, FormLabel,  Grid, Button, Typography } from '@mui/material';

import { withStyles, makeStyles } from '@mui/styles';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Box } from '@mui/system';

import theme from '../theme';



  const StyledTextField = withStyles((theme) => ({
    root: {
//letra
      "& .MuiInputBase-root": {
        color: '#644838',
        height: 60, 
        fontFamily: 'Outfit',
      },
//label focus
      '& label.Mui-focused': {
        color: '#644838',
        fontFamily: 'Outfit',
       
      },
      "& .MuiFormLabel-root": {
        color: '#644838',
        fontFamily: 'Outfit',
        fontSize: 20, 
        transform: 'translate(0px, -28px)',
      },
  //normal outline
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#644838',
          borderWidth: "2px",
          
        },
        '&:hover fieldset': {
          borderColor: '#de6d71',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fa8466',
        },
      }, 
      
    }
  }))(TextField);


const useStyles = makeStyles((theme) => ({
    espacio: {
      marginTop: theme.spacing(3),
    },
    container: {
      backgroundColor: "rgb(50, 50, 50)",
    },
    button: {
      padding: "0%",
      position: "relative",
      cursor: "pointer",
      borderColor:"#644838",
      borderWidth: 2,
      borderStyle: 'solid',
      zIndex: "1000",
      "&:hover": {
        "& $fondo":
        {
          top: "-1px",
          right: "5px"
        }
       
      }
    },
    texto:{
      padding: "10px 30px",
      borderColor:"#644838",
      borderWidth: 2,
      borderStyle: 'solid',
      color: "rgb(58, 36, 36)",
      borderRadius: "5px",
     
    },
    fondo:{
      zIndex: "-1000",
      position: 'absolute',
      top: "10px",
      right: "-10px",
      borderRadius: 'inherit',
      backgroundColor:  "#ffefb5",
      width: "90%",
      height: "90%",
 
    },
    links:
    {
        color: theme.palette.text.primary,
        "&:hover, &:focus, &:active, &:target": {
          color: theme.palette.primary.main,
          textDecoration: 'underline'
        },

    }
  }));







export default function Session() {

  
  const [visible, setVisible] = React.useState(false);
  const [sign, setSign] = React.useState(true);

  function Login(props) {
    
    return   <form onSubmit={onSubmitLogin}>

    <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Correo Electrónico</FormLabel>
        <StyledTextField  id="emailLogin" InputLabelProps={{ shrink: true }}  />
    </FormControl>

    <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Contraseña</FormLabel>
        <StyledTextField type="password" id="passwordLogin" InputLabelProps={{ shrink: true }}  />
    </FormControl>

    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
      <Grid item >
        <FormControl sx={{ m: 1 }} className={useStyles().button}>
          <Button type='Submit' p={0} >     
            <Box  className={useStyles().texto}>
              Entrar
              <Box className={useStyles().fondo}></Box>
              </Box>   
          </Button>
        </FormControl>
      </Grid>
    </Grid>

</form>;
  }

  function SignUp(props) {
    return   <form onSubmit={onSubmitSign}>

    <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Correo Electrónico</FormLabel>
        <StyledTextField  id="emailSign" InputLabelProps={{ shrink: true }}  />
    </FormControl>

    <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Contraseña</FormLabel>
        <StyledTextField type="password" id="passwordSign" InputLabelProps={{ shrink: true }}  />
    </FormControl>

    <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
        <StyledTextField  id="nameSign" InputLabelProps={{ shrink: true }}  />
    </FormControl>

   
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
      <Grid item >
        <FormControl sx={{ m: 1 }} className={useStyles().button}>
          <Button type='Submit' p={0} >     
            <Box  className={useStyles().texto}>
              Registrarse
              <Box className={useStyles().fondo}></Box>
              </Box>   
          </Button>
        </FormControl>
      </Grid>
    </Grid>
 
</form>;
  }


  function signUp()
  {
    setVisible(false);
    setSign(true);
  }

  function login()
  {
    setVisible(true);
    setSign(false);
  
  }

  const onSubmitLogin=(event)=>
  {
    event.preventDefault();
    console.log("Login")
  }

  const onSubmitSign=(event)=>
  {
    event.preventDefault();
    console.log("Sign Up")
  }


    return (
        <ThemeProvider theme={theme}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            sx={{bgcolor: 'background.main'}}  
        >


            <Box item xs={3} sx={{p:8,bgcolor: 'white', paddingTop: "60px", paddingBottom: "60px",  boxShadow: "-20px 20px #efd3c3"}}  >

            <Grid container  textAlign={'center'} pb={"60px"}>
                <Grid item xs={6} >

                <a  className={useStyles().links} onClick={() => signUp()}>
                    <Typography  variant="h4">REGISTRARSE</Typography>
                </a>
          
                </Grid>
                <Grid item xs={6}>
                    <a className={useStyles().links} onClick={() => login()}>
                        <Typography variant="h4">INICIAR SESIÓN</Typography>
                    </a>
                    
                </Grid>
            </Grid>

            <Grid container >
            {visible && <Login></Login>}
            {sign && <SignUp></SignUp> }
            </Grid>
         
      


              
           

            



            </Box>                       


        </Grid>


        </ThemeProvider>


    )
}