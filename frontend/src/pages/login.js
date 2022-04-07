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
        borderRadius: 10,
        borderColor:"#644838",
        borderWidth: 2,
        borderStyle: 'solid',
        backgroundColor: "#ffefb5",
        padding: "10px 30px",
        fontSize: "18px",
        color: "#644838"
    },
    links:
    {
        color: theme.palette.text.primary
    }
  }));



export default function Session() {



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
                <a  className={useStyles().links}>
                    <Typography  variant="h4">REGISTRARSE</Typography>
                </a>
          
                </Grid>
                <Grid item xs={6}>
                    <a className={useStyles().links}>
                        <Typography variant="h4">INICIAR SESIÓN</Typography>
                    </a>
                    
                </Grid>
            </Grid>

      

                <form>

                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Correo Electrónico</FormLabel>
                        <StyledTextField  id="email" InputLabelProps={{ shrink: true }}  />
                    </FormControl>

                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Contraseña</FormLabel>
                        <StyledTextField  id="password" InputLabelProps={{ shrink: true }}  />
                    </FormControl>

                    <FormControl sx={{ m: 1 }}>


                        <Button p={0}>     
                        <Box  className={useStyles().button}>Entrar</Box>   
                        </Button>






                    </FormControl>

                            

                </form>
                       

            </Box>                       


        </Grid>


        </ThemeProvider>


    )
}