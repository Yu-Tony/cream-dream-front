import React, { useState, useEffect, useContext } from "react";

import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";

import { StyledTextField, labelStyle } from "../styles";
import Boton from "../../../components/Carrito/Boton";
import { ClienteContext } from "../../../contexts/Cliente";
import * as API from "../../../services/Cliente";

function InfoPers(props) {
  const [data, setData] = useState({
    correo: "",
    contrasena: "contrasena",
    nombre: "",
    apellido: "",
  });

  const handleOnChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const { clienteId } = useContext(ClienteContext);
  useEffect(() => {
    const fetchCliente = async () => {
      const res = await API.GetById(clienteId);
      if (res.data) {
        let { data } = res;
        setData((prev) => ({ ...prev, ...data }));
      }
    };

    fetchCliente();
  }, []);

  const handleOnUpdate = async () => {
    console.log(data);
    const res = await API.Update(clienteId, data);
    console.log(res);
  };

  /*--------------------------RETURN--------------------- */
  return (
    <form>
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
      </Grid>
    </form>
  );
}

export default InfoPers;
