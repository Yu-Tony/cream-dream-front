import React, { useState } from "react";
import { FormControl, FormLabel } from "@mui/material";

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

  const onSubmitSign = async (event) => {
    event.preventDefault();
    //console.log(data);

    const res = await API.Create(data);
    console.log(res);
  };

  return (
    <form>
      <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={labelStyle}>Correo Electrónico</FormLabel>
        <StyledTextField
          id="emailSign"
          name="correo"
          InputLabelProps={{ shrink: true }}
          onChange={handleOnChange}
        />
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
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={labelStyle}>Nombre</FormLabel>
        <StyledTextField
          id="nameSign"
          name="nombre"
          InputLabelProps={{ shrink: true }}
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={labelStyle}>Apellido</FormLabel>
        <StyledTextField
          id="lastnameSign"
          name="apellido"
          InputLabelProps={{ shrink: true }}
          onChange={handleOnChange}
        />
      </FormControl>

      <Boton bgcolor="secondary.main" onClick={onSubmitSign}>
        Registrarse
      </Boton>
    </form>
  );
}

export default Signup;
