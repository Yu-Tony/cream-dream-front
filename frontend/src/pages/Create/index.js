  /*--------------------------IMPORTS--------------------- */
  import React, { useState } from "react";

  import { withStyles, makeStyles} from "@mui/styles"
  import { Button, Grid ,FormControl, TextField, FormLabel, Typography, InputAdornment, Select, MenuItem, Hidden} from "@mui/material"
  import { Box } from '@mui/system';
  import { FileUploader } from "react-drag-drop-files";
  import ToggleButton from '@mui/material/ToggleButton';
  import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
  import Boton from "../../components/Carrito/Boton";

  import { StyledTextField, useStyles } from "./styles";

  import EmpleadoComp from "./components/Empleado";
  
  import ComidaComp from "./components/Comida";
  
  export default function Create()
  {
  
        /*--------------------------FUNCIONES--------------------- */
      const [comida, setComida] = React.useState(true);
     
  
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
         
                      {comida && <ComidaComp/>}
                      {mesa && <Mesa></Mesa> }
                      {empleado && <EmpleadoComp/>}
  
                        
  
                      </Box>
                  </Grid>
  
   
  
  
  
              </Grid>
         
  
       
  
  
  
          </Grid>
  
  
          
      )
  
  }