import { useState, useContext } from "react";

import { FormControl, FormLabel } from "@mui/material";

import Boton from "../../../components/Carrito/Boton";

import { StyledTextField, labelStyle } from "../styles";

import { ClienteContext } from "../../../contexts/Cliente";

function Login() {
  const { Login, clienteId } = useContext(ClienteContext);

  const [data, setData] = useState({ correo: "", contrasena: "" });
  const handleOnChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    //console.log(data);

    const res = await Login(data);
    //console.log(res);
  };

  return (
    <form>
      <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={labelStyle}>Correo Electrónico</FormLabel>
        <StyledTextField
          id="emailLogin"
          InputLabelProps={{ shrink: true }}
          name="correo"
          onChange={handleOnChange}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <FormLabel sx={labelStyle}>Contraseña</FormLabel>
        <StyledTextField
          type="password"
          id="passwordLogin"
          InputLabelProps={{ shrink: true }}
          name="contrasena"
          onChange={handleOnChange}
        />
      </FormControl>

      <Boton bgcolor="secondary.main" onClick={onSubmitLogin}>
        Entrar
      </Boton>
    </form>
  );
}

export default Login;
