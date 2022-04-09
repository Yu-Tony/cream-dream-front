import React, { useState } from "react";
import { ThemeProvider , withStyles, makeStyles , styled} from "@mui/styles"
import { Button, Grid ,FormControl, TextField, FormLabel, Typography, InputAdornment, Select, MenuItem} from "@mui/material"
import theme from '../theme';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import { FileUploader } from "react-drag-drop-files";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



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
        color: theme.palette.text.primary,
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
        width: "85%",
        height: "75%",
   
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

    const [comida, setComida] = React.useState(true);
    function Comida(props) {
    
        return( <form>
            <Typography  variant="h4">AGREGAR COMIDA</Typography>
    
            <Grid container  >
    
                {/*NOMBRE DE LA COMIDA*/}
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
    
                {/*DESCRIPCION DE LA COMIDA*/}
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
    
                {/*OPCIONES DE LA COMIDA*/}
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Opciones</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
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
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Categorias</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <StyledTextField    id="categoriasComida" InputLabelProps={{ shrink: true }}  InputProps={{endAdornment:<Button type='Submit' p={0} >     
                            <Box  className={useStyles().section}>
                            AGREGAR
                            <Box className={useStyles().fondo}></Box>
                            </Box>   
                        </Button>}} />
                    </FormControl>
                </Grid>
    
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Imagenes</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <FileUploader handleChange={handleChange}  multiple={true} name="file" types={fileTypes} />
                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                    </FormControl>
                </Grid>
    
                
    
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Grid item >
                        <FormControl sx={{ m: 1 }} className={useStyles().button}>
                        <Button type='Submit' p={0} >     
                            <Box  className={useStyles().texto}>
                            Guardar
                            <Box className={useStyles().fondoYellow}></Box>
                            </Box>   
                        </Button>
                        </FormControl>
                    </Grid>
                </Grid>
    
            </Grid>
    
            </form>)
       

      
    }

    function comidas()
    {
        setComida(true);
        setEmpleado(false);
        setMesa(false);
    }

    const [empleado, setEmpleado] = React.useState(false);
    function Empleado(props)
    {
        return(
            <form>
            <Typography  variant="h4">AGREGAR EMPLEADO</Typography>

            <Grid container   >

                {/*NOMBRE DE LA COMIDA*/}
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Nombre</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <StyledTextField id="nombreEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>

                {/*DESCRIPCION DE LA COMIDA*/}
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Correo</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField id="correoEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
                </Grid>

                {/*OPCIONES DE LA COMIDA*/}
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Contraseña</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
                <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField type="password" id="passwordEmpleado" InputLabelProps={{ shrink: true }}  />
                    </FormControl>
            
                </Grid>

                {/*CATEGORIAS DE LA COMIDA*/}
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sucursal</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
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

                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Admin</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
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

                

                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Grid item >
                        <FormControl sx={{ m: 1 }} className={useStyles().button}>
                        <Button type='Submit' p={0} >     
                            <Box  className={useStyles().texto}>
                            Guardar
                            <Box className={useStyles().fondoYellow}></Box>
                            </Box>   
                        </Button>
                        </FormControl>
                    </Grid>
                </Grid>

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

    const [mesa, setMesa] = React.useState(false);
    function Mesa(props)
    {
        return(  <form>
            <Typography  variant="h4">AGREGAR MESA</Typography>

            <Grid container     >
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sillas</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField  InputProps={{startAdornment: <InputAdornment position="start"></InputAdornment>,}} type="number" id="numeroSillas" InputLabelProps={{ shrink: true }}  />

                    </FormControl>
                </Grid>
            </Grid>

            <Grid container    pb={"5px"} >
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Sucursal</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
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
            </Grid>

            <Grid container    pb={"5px"} >
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Empleado</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
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
            </Grid>

            <Grid container    pb={"5px"} >
                <Grid item xs={2}  p={"20px"} >
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Disponible</FormLabel>
                    </FormControl>
                </Grid>
                <Grid item xs={10}   p={"20px"} >
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
            </Grid>


            <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                    <Grid item >
                        <FormControl sx={{ m: 1 }} className={useStyles().button}>
                        <Button type='Submit' p={0} >     
                            <Box  className={useStyles().texto}>
                            Guardar
                            <Box className={useStyles().fondoYellow}></Box>
                            </Box>   
                        </Button>
                        </FormControl>
                    </Grid>
            </Grid>
        </form>)
      
    }

    function mesas()
    {
        setComida(false);
        setEmpleado(false);
        setMesa(true);
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
           
             <Grid container >
                <Grid item xs={2}  justifyContent="center"  direction="column" alignItems="center" className={useStyles().line} p={"20px"} >
                 
                    <Grid container >
                        <Grid item xs={12}  justifyContent="center"  direction="column" alignItems="center" >
                            <FormControl sx={{ m: 1 }} className={useStyles().button}>
                                <Button  p={0} onClick={() => comidas()}>     
                                    <Box  className={useStyles().texto}>
                                    Comida
                                    <Box className={useStyles().fondoOrange}></Box>
                                    </Box>   
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container >
                        <Grid item xs={12}  justifyContent="center"  direction="column" alignItems="center" >
                            <FormControl sx={{ m: 1 }} className={useStyles().button}>
                                <Button  p={0} onClick={() => mesas()}>     
                                    <Box  className={useStyles().texto}>
                                    Mesa
                                    <Box className={useStyles().fondoOrange}></Box>
                                    </Box>   
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                            
                    <Grid container >
                        <Grid item xs={12}  justifyContent="center"  direction="column" alignItems="center" >              
                            <FormControl sx={{ m: 1 }} className={useStyles().button}>
                                <Button  p={0} onClick={() => empleados()}>     
                                    <Box  className={useStyles().texto}>
                                    Empleado
                                    <Box className={useStyles().fondoOrange}></Box>
                                    </Box>   
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>

             

   
              
      
          
                </Grid>

                <Grid item xs={2} p={"80px"}></Grid>

                <Grid item xs={6} p={"80px"}>
                    <Box item xs={3} sx={{p:8,bgcolor: 'white', paddingTop: "60px", paddingBottom: "60px",  boxShadow: "-20px 20px #efd3c3"}}  >
       
                    {comida && <Comida></Comida>}
                    {mesa && <Mesa></Mesa> }
                    {empleado && <Empleado></Empleado>}

                      

                    </Box>
                </Grid>

 



            </Grid>
       

     



        </Grid>


    </ThemeProvider>
    )

}