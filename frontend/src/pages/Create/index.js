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

  import MesaComp from "./components/Mesa";
  
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
                      {mesa && <MesaComp/> }
                      {empleado && <EmpleadoComp/>}
  
                        
  
                      </Box>
                  </Grid>
  
   
  
  
  
              </Grid>
         
  
       
  
  
  
          </Grid>
  
  
          
      )
  
  }