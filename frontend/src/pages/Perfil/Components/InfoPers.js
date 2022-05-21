import React, { useState, useEffect, useContext } from "react";

import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  Typography,
  Alert,
  Container
} from "@mui/material";

import { StyledTextField, labelStyle } from "../styles";
import Boton from "../../../components/Carrito/Boton";
import { ClienteContext } from "../../../contexts/Cliente";
import * as API from "../../../services/Usuario";

function InfoPers(props) {
  const [data, setData] = useState({
    correo: "",
    contrasena: "",
    nombre: "",
    apellido: "",
  });

  const handleOnChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

   
  };

  const { cliente } = useContext(ClienteContext);
  useEffect(() => {
    const fetchCliente = async () => {
      const res = await API.GetById(cliente.id);
      if (res.data) {
        let { data } = res;
        setData((prev) => ({ ...prev, ...data }));
       
      }
    };

    fetchCliente();
  }, []);

  const handleOnUpdate = async () => {
    console.log(data);
    const res = await API.Update(cliente.id, data);
    if(res===false)
    {
      setIsSubmitPersonal(false);
    }
    else{
      setIsSubmitPersonal(true);
    }
    setformErrors(ValidatePersonal(data));
    console.log(res);
  };

  const handleDelete = async () => {
    console.log(data);
    const res = await API.Delete(cliente.id);
    if(res===false)
    {
      setIsSubmitPersonal(false);
    }
    else{
      setIsSubmitPersonal(true);
    }

    console.log(res);
   
  };


  const [formErrors, setformErrors] = useState({ });

  const [isSubmitPersonal, setIsSubmitPersonal] = useState(false);

  const ValidatePersonal = (values) =>
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
  }


  /*--------------------------RETURN--------------------- */
  return (
    <Container>
       {(Object.keys(formErrors).length === 0 && isSubmitPersonal ) &&<Alert severity="success">Cambio de Información exitoso</Alert> }
       {(Object.keys(formErrors).length !== 0 && !isSubmitPersonal ) &&<Alert severity="error">Error al editar la informacion. Intente de nuevo</Alert> }

        <form >
          <Typography sx={{ color: "text.primary" }} variant="h4">
            Información Personal
          </Typography>

          <Grid container>
            <Grid item xs={12} xl={2} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <FormLabel sx={labelStyle}>Correo Electrónico</FormLabel>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={10} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField
                  id="nombreComida"
                  InputLabelProps={{ shrink: true }}
                  name="correo"
                  onChange={handleOnChange}
                  value={data.correo}
                />
                {formErrors.correo && <Alert severity="error">{formErrors.correo}</Alert>}
              </FormControl>
            </Grid>

            <Grid item xs={12} xl={2} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <FormLabel sx={labelStyle}>Contraseña</FormLabel>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={10} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField
                  type="password"
                  id="passwordSign"
                  InputLabelProps={{ shrink: true }}
                  name="contrasena"
                  onChange={handleOnChange}
                  value={data.contrasena}
                />
                {formErrors.contrasena && <Alert severity="error">{formErrors.contrasena}</Alert>}

              </FormControl>
            </Grid>

            <Grid item xs={12} xl={2} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <FormLabel sx={labelStyle}>Nombre</FormLabel>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={10} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField
                  id="nameSign"
                  InputLabelProps={{ shrink: true }}
                  name="nombre"
                  onChange={handleOnChange}
                  value={data.nombre}
                />
                {formErrors.nombre && <Alert severity="error">{formErrors.nombre}</Alert>}
              </FormControl>
            </Grid>

            <Grid item xs={12} xl={2} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <FormLabel sx={labelStyle}>Apellido</FormLabel>
              </FormControl>
            </Grid>
            <Grid item xs={12} xl={10} p={"10px"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <StyledTextField
                  id="lastnameSign"
                  InputLabelProps={{ shrink: true }}
                  name="apellido"
                  onChange={handleOnChange}
                  value={data.apellido}
                />
                {formErrors.apellido && <Alert severity="error">{formErrors.apellido}</Alert>}
              </FormControl>
            </Grid>

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Button p={0}>
                  <Boton bgcolor="secondary.main" onClick={handleOnUpdate}>
                    Guardar
                  </Boton>
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Button p={0}>
                  <Boton bgcolor="primary.main" onClick={handleDelete}>
                    Borrar Cuenta
                  </Boton>
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </form>
    </Container>
  
  );
}

export default InfoPers;
