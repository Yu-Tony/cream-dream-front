import React from 'react';
import { ThemeProvider , withStyles, makeStyles , styled} from "@mui/styles"
import { Button, Grid ,FormControl, TextField, FormLabel, Typography} from "@mui/material"
import theme from '../theme';
import { Box } from '@mui/system';


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

  const StyledButton = styled(Button)(`
  text-transform: none;
`);

  const useStyles = makeStyles((theme) => ({
    line:{

        borderBottomColor: '#644838',
        borderWidth: 0,
    borderRightWidth: 2,
        borderStyle: 'solid',
        height:"100vh"

 
    },
    section: {
        padding: "3%",
        cursor: "pointer",
        borderColor:"#644838",
        borderWidth: 0,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        "&:hover": {
         backgroundColor: "#FFEFB5"
         
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



export default function Create()
{

    
    const classes = useStyles();

    return (



        <ThemeProvider theme={theme}>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            sx={{bgcolor: '#FEEEE5'}}  
        >
           
             <Grid container   pb={"60px"} >
                <Grid item xs={4}  className={useStyles().line} p={"20px"} >

                <FormControl fullWidth sx={{ m: 1 }}  >
               

                 
                        <Box  className={useStyles().section}>
                            COMIDA
                         
                        </Box>   
                

                 
                        <Box  className={useStyles().section}>
                            MESA
                            
                        </Box>   
              

              
                        <Box  className={useStyles().section}>
                            EMPLEADO
                          
                        </Box>   
      

    
                </FormControl>
              
      
          
                </Grid>

                <Grid item xs={6} p={"80px"}>
                    <Box item xs={3} sx={{p:8,bgcolor: 'white', paddingTop: "60px", paddingBottom: "60px",  boxShadow: "-20px 20px #efd3c3"}}  >
                        <Typography  variant="h4">AGREGAR COMIDA</Typography>

                        <Grid container   pb={"60px"} >
                            <Grid item xs={2}  p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10}   p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <StyledTextField id="nombreComida" InputLabelProps={{ shrink: true }}  />
                                </FormControl>
                            </Grid>

                            <Grid item xs={2}  p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Descripción</FormLabel>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10}   p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                </FormControl>
                            </Grid>

                            
                            <Grid item xs={2}  p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Opciones</FormLabel>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10}   p={"20px"} >
                                <Grid container>
                      
                                    <Grid item xs={6}  p={"10px"}>
                                        <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                    </Grid>
                                    <Grid item xs={6}  p={"10px"} >
                                        <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                    </Grid>
                                    <Grid item xs={6}  p={"10px"}>
                                        <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                    </Grid>
                                    <Grid item xs={6}   p={"10px"}>
                                        <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={2}  p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                    <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Categorias</FormLabel>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10}   p={"20px"} >
                                <FormControl fullWidth sx={{ m: 1 }}>
                                <StyledTextField   multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                                </FormControl>
                            </Grid>

                            <Button>GUARDAR</Button>

                        </Grid>

                      


                      

                    </Box>
                </Grid>
            </Grid>
       

     



        </Grid>


    </ThemeProvider>
    )

}