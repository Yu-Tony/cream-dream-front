import React, { useState } from "react";
import { ThemeProvider , withStyles, makeStyles , styled} from "@mui/styles"
import { Button, Grid ,FormControl, TextField, FormLabel, Typography, InputAdornment, Select, MenuItem} from "@mui/material"
import theme from '../theme';
import { Box } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from "@mui/material";

import Boton from "../components/Carrito/Boton";

import { Hidden } from '@mui/material';


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
    line:{

        borderBottomColor: '#644838',
        borderWidth: 0,
    borderRightWidth: 2,
        borderStyle: 'solid',
        height:"150vh"

 
    },
    section: {
        padding: "3%",
        cursor: "pointer",
        color: "#644838",
        "&:hover": {
         backgroundColor: "#FFEFB5"
         
        }
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
          "& $fondoOrange, $fondoYellow":
          {
            top: "5px",
            right: "10px"
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
      fondoYellow:{
        zIndex: "-1000",
        position: 'absolute',
        top: "15px",
        right: "-1px",
        borderRadius: 'inherit',
        backgroundColor:  "#FFEFB5",
        width: "85%",
        height: "75%",
   
      },
      fondoOrange:{
        zIndex: "-1000",
        position: 'absolute',
        top: "15px",
        right: "-1px",
        borderRadius: 'inherit',
        backgroundColor:  "#FA8466",
        width: "90%",
        height: "80%",
   
      },
      links:
      {
        color: "#644838",
        "&:hover, &:focus, &:active, &:target": {
          color: "#FA8466",
          textDecoration: 'underline'
        },
  
      }
     
  }));



export default function Create()
{

    const [infoPersonal, setInfoPersonal] = React.useState(true);
    function Personal(props) {
    
        return( <form>

<Typography sx={{color: '#644838'}} variant="h4">Información Personal</Typography>

              <Grid container>

          
    
    <Grid item xs={12} xl={2} p={"10px"}>
        <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Correo Electrónico</FormLabel>
        </FormControl>
    </Grid>
    <Grid item xs={12} xl={10} p={"10px"} >
            <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField id="nombreComida" InputLabelProps={{ shrink: true }}  />
            </FormControl>
    </Grid>

    
    <Grid item xs={12} xl={2} p={"10px"}>
        <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Contraseña</FormLabel>
        </FormControl>
    </Grid>
    <Grid item xs={12} xl={10} p={"10px"} >
            <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField type="password" id="passwordSign" InputLabelProps={{ shrink: true }}  />
            </FormControl>
    </Grid>


    <Grid item xs={12} xl={2} p={"10px"}>
        <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
        </FormControl>
    </Grid>
    <Grid item xs={12} xl={10} p={"10px"} >
            <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField  id="nameSign" InputLabelProps={{ shrink: true }}  />
            </FormControl>
    </Grid>




<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
<Grid item >
    <Button  p={0} >     
        <Boton bgcolor="secondary.main">Guardar</Boton>
    </Button>
</Grid>
</Grid>

              </Grid>

    
            </form>)
       

      
    }

    function personal()
    {
        setInfoPersonal(true);
        setInfoPago(false);

    }

    const [infoPago, setInfoPago] = React.useState(false);
    function Pago(props)
    {
        return(
            <form>
            <Typography sx={{color: '#644838'}} variant="h4">Información de Pago</Typography>

            <Grid container   >

                {/*NOMBRE DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Pago</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="tajeta" control={<Radio />} label="Tarjeta" />
                        <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                        <FormControlLabel value="cupon" control={<Radio />} label="Cupon" />
                    
                    </RadioGroup>
                                    </FormControl>
                </Grid>

                         

                {/*CATEGORIAS DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Tipo</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <Select
                        value={local}
                        onChange={handleChangeSelect}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Número</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField  InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>,}} type="number" id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>



                {/*DESCRIPCION DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField id="correoEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>

     


                {/*OPCIONES DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Valido hasta</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <Grid container>
                        <Grid item xs={6}  p={"10px"}>
                            <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Mes</FormLabel>
                            <StyledTextField  InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>,}} type="number" id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                        </Grid>
                        <Grid item xs={6}  p={"10px"}>
                            <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Año</FormLabel>
                            <StyledTextField  InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>,}} type="number" id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                        </Grid>
                    </Grid>
                </Grid>

                {/*DESCRIPCION DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>CCV</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField  id="nameSign" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>


                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Grid item >
                        <Button  p={0} >     
                            <Boton bgcolor="secondary.main">Guardar</Boton>
                        </Button>
                    </Grid>
                </Grid>



            </Grid>


        </form>
        )
      
    }

    function pago()
    {
        setInfoPersonal(false);
        setInfoPago(true);
     
    }



    const [local, setLocal] = React.useState('');

    const fileTypes = ["JPG", "PNG", "GIF"];
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };

    const handleChangeSelect = (event) => {
        setLocal(event.target.value);
      };


    const [selected, setSelected] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setSelected(newAlignment);
    };

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
           
           <Grid container style={{ minHeight: '100vh' }} >
                 
                 <Grid item md={2} xs={12}>
                  
                     <Grid container direction="column"  justifyContent="center"  alignItems="center" p={"10px"}>
         
                     <Button  p={0} onClick={() => personal()}>     
                         <Boton bgcolor="primary.main">Informacion personal</Boton>
                     </Button>
 

                                 
                     <Button  p={0} onClick={() => pago()}>     
                         <Boton bgcolor="primary.main">Información de Pago</Boton>
                     </Button>
                 

          
                </Grid>

             </Grid>

             <Hidden mdDown implementation="css">
                 <Grid item sm={2} p={"100px"}></Grid>
             </Hidden>


 
            <Grid item md={6} xs={12} p={"20px"}>
                <Box item sx={{p:8,bgcolor: 'white', paddingTop: "60px", paddingBottom: "60px",  boxShadow: "-20px 20px #efd3c3"}}  >
       
                
                {infoPersonal && <Personal></Personal>}
        
                {infoPago && <Pago></Pago>}

                  

                </Box>
            </Grid>




            </Grid>
       

     



        </Grid>


    </ThemeProvider>
    )

}