  /*--------------------------IMPORTS--------------------- */
import React, { useState } from "react";

import { withStyles, makeStyles} from "@mui/styles"
import { Button, Grid ,FormControl, TextField, FormLabel, Typography, InputAdornment, Select, MenuItem, Hidden} from "@mui/material"
import { Box } from '@mui/system';
import { FileUploader } from "react-drag-drop-files";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Boton from "../components/Carrito/Boton";

  /*--------------------------STYLES--------------------- */
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
      links:
      {
        
          color: "#644838",
          cursor: "pointer",
          "&:hover, &:focus, &:active, &:target": {
            color: "#FA8466",
            textDecoration: 'underline',
            cursor: "pointer"
          
          }
  
      }
     
  }));



export default function Create()
{

      /*--------------------------FUNCIONES--------------------- */
    const [comida, setComida] = React.useState(true);
    function Comida(props) {
    
        return( 
        <form>
            <Typography  variant="h4">AGREGAR COMIDA</Typography>
    
            <Grid container>
    
    
                {/*NOMBRE DE LA COMIDA*/}
                <Grid item xs={12}  xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <StyledTextField id="nombreComida" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>
    
                {/*DESCRIPCION DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Descripción</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField  multiline rows={2} maxRows={4} id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>
    
                {/*OPCIONES DE LA COMIDA*/}
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Opción</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                    <Grid container>
    
                        <Grid item xs={6}  p={"10px"}>
                            <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
                            <StyledTextField  id="opcionesComida1" InputLabelProps={{ shrink: true }}  />
                        </Grid>
                        <Grid item xs={6}  p={"10px"} >
                            <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Precio</FormLabel>
                            <StyledTextField  InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>,}} type="number" id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                        </Grid>
                        <Grid item xs={6}  p={"10px"}>
                            <StyledTextField  id="opcionesComida2" InputLabelProps={{ shrink: true }}  />
                        </Grid>
                        <Grid item xs={6}   p={"10px"}>
                            <StyledTextField InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>,}} type="number" id="DescripcionComida" InputLabelProps={{ shrink: true }}  />
                        </Grid>
                    </Grid>
                </Grid>
    
                {/*CATEGORIAS DE LA COMIDA*/}
                <Grid item xs={12}  xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Categoría</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                  
                        <StyledTextField  id="categoriasComida" InputLabelProps={{ shrink: true }}  InputProps={{endAdornment:<Button p={0} >     
                            <Box  className={useStyles().section}>
                            AGREGAR
                            <Box className={useStyles().fondo}></Box>
                            </Box>   
                        </Button>}} />

                    </FormControl>
                </Grid>
    
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Imagen</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={10} p={"10px"}  >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <FileUploader handleChange={handleChange}  multiple={true} name="file" types={fileTypes} />
                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                    </FormControl>
                </Grid>
    
                
    
                <Boton bgcolor="secondary.main">Guardar</Boton>
    
            </Grid>
    
            </form>)
    }

    function comidas()
    {
        setComida(true);
        setEmpleado(false);
        setMesa(false);
    }

    const [mesa, setMesa] = React.useState(false);
    function Mesa(props)
    {
        return(  <form>
            <Typography  variant="h4">AGREGAR MESA</Typography>

            <Grid container>

                {/*Numero de sillas*/ }
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sillas</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <StyledTextField  InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>,}} type="number" id="numeroSillas" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>

                {/*Sucursal de sillas */}
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sucursal</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
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

                {/*Empleado */}
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Empleado</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
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

                {/*Disponible Mesa */}
                <Grid item  xs={12} xl={2} p={"10px"}  >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Disponible</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item  xs={12} xl={10} p={"10px"}  >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <ToggleButtonGroup
                            color="primary"
                            value={selected}
                            exclusive
                            onChange={handleAlignment}
                            >
                            <ToggleButton value="web">Si</ToggleButton>
                            <ToggleButton value="android">No</ToggleButton>
                        </ToggleButtonGroup>
                    </FormControl>
                </Grid>

                <Boton bgcolor="secondary.main">Guardar</Boton>

            </Grid>
         
        </form>)
      
    }

    function mesas()
    {
        setComida(false);
        setEmpleado(false);
        setMesa(true);
    }


    const [empleado, setEmpleado] = React.useState(false);
    function Empleado(props)
    {
        return(
            <form>
            <Typography  variant="h4">AGREGAR EMPLEADO</Typography>

            <Grid container   >

                {/*NOMBRE DE EMPLEADO*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <StyledTextField id="nombreEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>

                {/*CORREO DE EMPLEADO*/}
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Correo</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField id="correoEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>

                {/*CONTRASENA DE EMPLEADO*/}
                <Grid item xs={12} xl={2} p={"10px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Contraseña</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
                <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField type="password" id="passwordEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
            
                </Grid>

                {/*SUCURSAL DE EMPLEADO*/}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sucursal</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"} >
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

                {/*EMPLEADO ADMIN */}
                <Grid item xs={12} xl={2} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Admin</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={12} xl={10} p={"10px"}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <ToggleButtonGroup
                            color="primary"
                            value={selected}
                            exclusive
                            onChange={handleAlignment}
                            >
                            <ToggleButton value="web">Si</ToggleButton>
                            <ToggleButton value="android">No</ToggleButton>
                        </ToggleButtonGroup>
                    </FormControl>
                </Grid>

                

                <Boton bgcolor="secondary.main">Guardar</Boton>

            </Grid>


        </form>
        )
      
    }

    function empleados()
    {
        setComida(false);
        setEmpleado(true);
        setMesa(false);
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

      /*--------------------------RETURN--------------------- */
    return (




        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            
            sx={{ backgroundColor: "background.main"}}  
        >
           
             <Grid container style={{ minHeight: '100vh' }} >
                 
                <Grid item md={2} xs={12}>
                 
                    <Grid container direction="column"  justifyContent="center"  alignItems="center" p={"10px"}>
        
                        <Button  p={0} onClick={() => comidas()}>     
                            <Boton bgcolor="primary.main">Comida</Boton>
                        </Button>
    

                                    
                        <Button  p={0} onClick={() => mesas()}>     
                            <Boton bgcolor="primary.main">Mesa</Boton>
                        </Button>
                    
                        
                    
                        <Button  p={0} onClick={() => empleados()}>     
                            <Boton bgcolor="primary.main">Empleado</Boton>
                        </Button>
                    </Grid>

                </Grid>

                <Hidden mdDown implementation="css">
                    <Grid item sm={2} p={"100px"}></Grid>
                </Hidden>

                <Grid item md={6} xs={12} p={"20px"}>
                    <Box item sx={{p:8,bgcolor: 'white', paddingTop: "60px", paddingBottom: "60px",  boxShadow: "-20px 20px #efd3c3"}}  >
       
                    {comida && <Comida></Comida>}
                    {mesa && <Mesa></Mesa> }
                    {empleado && <Empleado></Empleado>}

                      

                    </Box>
                </Grid>

 



            </Grid>
       

     



        </Grid>


        
    )

}