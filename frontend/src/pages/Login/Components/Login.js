import { useState, useContext } from "react";

import { FormControl, FormLabel, Alert, Container } from "@mui/material";

import Boton from "../../../components/Carrito/Boton";

import { StyledTextField, labelStyle } from "../styles";

import { ClienteContext } from "../../../contexts/Cliente";

function Login() {
  const { Login } = useContext(ClienteContext);

  const [data, setData] = useState({ correo: "", contrasena: "" });
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

  const [isSubmitLogin, setIsSubmitLogin] = useState(false);
  const [isSubmitLoginRight, setIsSubmitLoginRight] = useState(false);
  const onSubmitLogin = async (event) => {
    event.preventDefault();
    setformErrors(ValidateLogin(data));

    const res = await Login(data);
    if(res.lenght === undefined)
    {
      //console.log("Error");
      setIsSubmitLogin(true);
      setIsSubmitLoginRight(false);
     
    }
    else{
      setIsSubmitLogin(true);
      setIsSubmitLoginRight(true);
    }
    console.log(res);
  };
  const ValidateLogin = (values) =>
  {
    const errors={}
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;
    if(!values.correo){errors.correo = "Ingresar un correo";}
    else if(!regexMail.test(values.correo)){errors.correo = "Ingresar un formato de correo correcto";}
    if(!values.contrasena){errors.contrasena = "Ingresar una contraseña";}
    else if (!regexPassword.test(values.contrasena)) {errors.contrasena = "La contraseña debe de tener minimo 8 caracteres, una letra, 1 numero y un caracter especial";} 
    return errors;
  }



  return (
    <Container>

      {(Object.keys(formErrors).length === 0 && isSubmitLogin && isSubmitLoginRight) &&  <Alert severity="success">Inicio de sesion hecho exitosamente</Alert>}
      {(Object.keys(formErrors).length === 0 && isSubmitLogin && !isSubmitLoginRight) &&  <Alert severity="error">Error al hacer inicio de sesion, intente de nuevo</Alert>}
      <form>
        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel sx={labelStyle}>Correo Electrónico</FormLabel>
          <StyledTextField
            id="emailLogin"
            InputLabelProps={{ shrink: true }}
            name="correo"
            onChange={handleOnChange}
          />
          {formErrors.correo && <Alert severity="error">{formErrors.correo}</Alert>} 
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
          {formErrors.contrasena && <Alert severity="error">{formErrors.contrasena}</Alert>} 
        </FormControl>

        <Boton bgcolor="secondary.main" onClick={onSubmitLogin}>
          Entrar
        </Boton>
      </form>
    </Container>

  );
}

export default Login;
