  /*--------------------------IMPORTS--------------------- */
import React from 'react';
import { FormControl, TextField, FormLabel,  Grid, Typography } from '@mui/material';

import { withStyles, makeStyles } from '@mui/styles';

import { Box } from '@mui/system';

import Boton from "../components/Carrito/Boton";

import "./css/menu.css";


  {/*--------------------------THEME--------------------- */}
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
        color: "#644838",
        "&:hover, &:focus, &:active, &:target": {
          color: "#FA8466",
          textDecoration: 'underline',
          cursor: "pointer"
        },

    }
  }));






{/*--------------------------INICIO LOGIN--------------------- */}
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

    <Boton bgcolor="secondary.main">Entrar</Boton>

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

    <Boton bgcolor="secondary.main">Registrarse</Boton>
   
 
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
    
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            sx={{bgcolor: 'background.main'}}  
        >


            <Box item xs={12} sx={{p:8,bgcolor: 'white', paddingTop: "60px", paddingBottom: "60px",  boxShadow: "-20px 20px #efd3c3"}}  >

          
              <Grid container  textAlign={'center'} spacing={2} pb={"60px"}>
                    <Grid item xs={12} sm={6}>
                      <a href='#'  onClick={() => signUp()}>
                          <Typography  variant="h4">REGISTRARSE</Typography>
                      </a>
                    </Grid>

                    <Grid item  xs={12} sm={6}>
                        <a href='#' onClick={() => login()}>
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





    )
}