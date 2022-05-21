import React, { useState,useEffect } from "react";
import {Button,Typography,Grid,FormControl,FormLabel,Select,MenuItem, Alert} from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Boton from "../../../components/Carrito/Boton";
import { StyledTextField } from "../styles";

import * as API from "../../../services/Usuario";
import * as API_S from "../../../services/Sucursal";

function Empleado()
{   

    const [formErrors, setformErrors] = useState({ });
    const [sucursal, setSucursal] = React.useState([]);

    useEffect(()=>{const fetch =async()=>{const res = await API_S.GetAll()
    console.log(res)
    setSucursal(res.data)}
    fetch()},[])

    const [selected, setSelected] = React.useState('left');
  
    const handleAlignment = (event, newAlignment) => {
        setData({
            ...data,
            tipo:newAlignment,
        });
    }


    const [isSubmitEmpleado, setIsSubmitEmpleado] = useState(false);

    const [data, setData] = useState({
        nombre: "",
        apellido:"",
        correo: "",
        contrasena: "",
        _sucursal:null,
        tipo:1
    });

    const onSubmitEmpleado = async (event) => {
        event.preventDefault();
        //console.log(data);
        setformErrors(ValidateEmpleado(data));
        setIsSubmitEmpleado(true);
        const res = await API.Create(data);
        console.log(data);
        console.log(res);
      };
      const ValidateEmpleado = (values) =>
      {
          
          const errors={}
          const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
          if(!values.nombre){errors.nombre = "Ingresar un nombre";}
          if(!values.apellido){errors.apellido = "Ingresar un nombre";}
          if(!values.correo){errors.correo = "Ingresar un correo";}
          else if(!regexMail.test(values.correo)){errors.correo = "Ingresar un formato de correo correcto";}
          if(!values.contrasena){errors.contrasena = "Ingresar una contraseña";}
          else if (!regexPassword.test(values.contrasena)) {errors.contrasena = "La contraseña debe de tener minimo 8 caracteres, una letra, 1 numero y un caracter especial";} 
          return errors;
      }

    const handleOnChange = (event) => {
        setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const [local, setLocal] = React.useState('');

    const handleChangeSelect = (event) => {
        setData({...data,
            _sucursal:event.target.value
        })

        console.log(data);
        
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
                    {formErrors.nombre && <Alert severity="error">{formErrors.nombre}</Alert>}  
                </FormControl>
            </Grid>

             {/*APELLIDO DE EMPLEADO*/}
             <Grid item xs={12} xl={2} p={"10px"}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <FormLabel sx={{ color: '#644838',fontFamily: 'Outfit',fontSize: 20,}}>Apellido</FormLabel>
                </FormControl>
            </Grid>
            <Grid item xs={12} xl={10} p={"10px"} >
                <FormControl fullWidth sx={{ m: 1 }}>
                    <StyledTextField id="apellidoEmpleado" 
                    name="apellido"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleOnChange}  />
                       {formErrors.apellido && <Alert severity="error">{formErrors.apellido}</Alert>}  
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
                {formErrors.correo && <Alert severity="error">{formErrors.correo}</Alert>}  
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
             {formErrors.contrasena && <Alert severity="error">{formErrors.contrasena}</Alert>}  
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
                    value={data._sucursal}
                    onChange={handleChangeSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >

                    {sucursal.map((item,index)=>( <MenuItem key={index} value={item._id}>{item.nombre}</MenuItem>))}

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
                        value={data.tipo}
                        exclusive
                        onChange={handleAlignment}
                        >
                        <ToggleButton value={2}>Si</ToggleButton>
                        <ToggleButton value={1}>No</ToggleButton>
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