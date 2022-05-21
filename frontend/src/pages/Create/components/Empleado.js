import React, { useState } from "react";
import {Button,Typography,Grid,FormControl,FormLabel,Select,MenuItem} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Boton from "../../../components/Carrito/Boton";
import { StyledTextField } from "../styles";

import * as API from "../../../services/Empleado";

function Empleado()
{   

    const [selected, setSelected] = React.useState('left');
  
    const handleAlignment = (event, newAlignment) => {
        setData({
            ...data,
            admin:newAlignment,
        });
    }

    const [data, setData] = useState({
        nombre: "",
        apellido:"Granados",
        correo: "",
        contrasena: "",
        admin:false
    });

    const onSubmitEmpleado = async (event) => {
        event.preventDefault();
        //console.log(data);
    
        const res = await API.Create(data);
        console.log(data);
        console.log(res);
      };


    const handleOnChange = (event) => {
        setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const [local, setLocal] = React.useState('');

    const handleChangeSelect = (event) => {
        setLocal(event.target.value);
        
    };

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
                    <StyledTextField id="nombreEmpleado" 
                    name="nombre"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleOnChange}  />
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
                <StyledTextField id="correoEmpleado" 
                name="correo"
                InputLabelProps={{ shrink: true }}
                onChange={handleOnChange}  />
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
            <StyledTextField type="password" 
            id="passwordEmpleado" 
            name="contrasena"
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}  />
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
                        value={data.admin}
                        exclusive
                        onChange={handleAlignment}
                        >
                        <ToggleButton value={true}>Si</ToggleButton>
                        <ToggleButton value={false}>No</ToggleButton>
                    </ToggleButtonGroup>
                </FormControl>
            </Grid>

            
            <Button onClick={onSubmitEmpleado}>     
                <Boton bgcolor="secondary.main" >Guardar</Boton>
            </Button>
            

        </Grid>


    </form>
    )
  
}

export default Empleado;