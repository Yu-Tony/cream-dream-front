import React, { useState } from "react";
import { FormControl, FormLabel, Alert, Container } from "@mui/material";

import Boton from "../../../components/Carrito/Boton";

import { StyledTextField, labelStyle } from "../styles";

//Importacion de la API
import * as API from "../../../services/Usuario";

function Signup() {
  const [data, setData] = useState({
    correo: "",
    contrasena: "",
    nombre: "",
    apellido: "",
    tipo: 0,
  });

  const handleOnChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const [formErrors, setformErrors] = useState({ });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitSign, setIsSubmitSign] = useState(false);
  const [isSubmitSignRight, setIsSubmitSignRight] = useState(false);

  const onSubmitSign = async (event) => {
    event.preventDefault();
    setformErrors(ValidateSign(data));

    const res = await API.Create(data);
    if(res===false)
    {
      
      setIsSubmitSign(true);
      setIsSubmitSignRight(false);
     
    }
    else{
      setIsSubmitSign(true);
      setIsSubmitSignRight(true);
    }
    console.log(res);
  };

  const ValidateSign = (values) =>
  {
    const errors={}
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
    if(!values.nombre){errors.nombre = "Ingresar un nombre";}
    if(!values.apellido){errors.apellido = "Ingresar un apellido";}
    if(!values.correo){errors.correo = "Ingresar un correo";}
    else if(!regexMail.test(values.correo)){errors.correo = "Ingresar un formato de correo correcto";}
    if(!values.contrasena){errors.contrasena = "Ingresar una contraseña";}
    else if (!regexPassword.test(values.contrasena)) {errors.contrasena = "La contraseña debe de tener minimo 8 caracteres, una letra, 1 numero y un caracter especial";} 
    return errors;
  };

  return (
    <Container>
      {(Object.keys(formErrors).length === 0 && isSubmitSign && isSubmitSignRight) &&  <Alert severity="success">Creación de usuario exitoso</Alert>}
      {(Object.keys(formErrors).length === 0 && isSubmitSign && !isSubmitSignRight) &&  <Alert severity="error">Error al crear usuario, intente de nuevo</Alert>}

      <form>
        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel sx={labelStyle}>Correo Electrónico</FormLabel>
          <StyledTextField
            id="emailSign"
            name="correo"
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
          />
          {formErrors.correo && <Alert severity="error">{formErrors.correo}</Alert>} 
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel sx={labelStyle}>Contraseña</FormLabel>
          <StyledTextField
            type="password"
            name="contrasena"
            id="passwordSign"
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
          />
            {formErrors.contrasena && <Alert severity="error">{formErrors.contrasena}</Alert>} 
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel sx={labelStyle}>Nombre</FormLabel>
          <StyledTextField
            id="nameSign"
            name="nombre"
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
          />
            {formErrors.nombre && <Alert severity="error">{formErrors.nombre}</Alert>} 
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel sx={labelStyle}>Apellido</FormLabel>
          <StyledTextField
            id="lastnameSign"
            name="apellido"
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
          />
            {formErrors.apellido && <Alert severity="error">{formErrors.apellido}</Alert>} 
        </FormControl>

        <Boton bgcolor="secondary.main" onClick={onSubmitSign}>
          Registrarse
        </Boton>
      </form>
    </Container>
  
  );
}

export default Signup;
