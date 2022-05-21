import React, { useState,createRef } from "react";
import { Button,Typography, Grid, FormControl,InputAdornment, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import { FileUploader } from "react-drag-drop-files";
import Boton from "../../../components/Carrito/Boton";
import { StyledTextField,useStyles } from "../styles";

import * as API from "../../../services/Comida";

function Comida() {
  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    cantidad:0,
    precio: 0,
    baja: false,
    categoria: "",
    imagenes: [],
  });

  const imgs = createRef();

    const fileTypes = ["JPG", "PNG", "GIF"];
      const handleChange = () => {
        setData((prev) => ({ ...prev, imagenes: imgs.current.files }));
        
      };

  const handleOnChange = (event) => {
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitFood = async (event) => {
    event.preventDefault();
    console.log(data);

    const res = await API.Create(data);
    console.log(res);
  };

  return (
    <form>
      <Typography variant="h4">AGREGAR COMIDA</Typography>

      <Grid container>
        {/*NOMBRE DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel
              sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 20 }}
            >
              Nombre
            </FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              id="nombreComida"
              name="nombre"
              InputLabelProps={{ shrink: true }}
              onChange={handleOnChange}
            />
          </FormControl>
        </Grid>

        {/*DESCRIPCION DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel
              sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 20 }}
            >
              Descripción
            </FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              multiline
              rows={2}
              maxRows={4}
              id="DescripcionComida"
              name="descripcion"
              InputLabelProps={{ shrink: true }}
              onChange={handleOnChange}
            />
          </FormControl>
        </Grid>

         {/*CANTIDAD DE LA COMIDA*/}
         <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel
              sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 20 }}
            >
              Cantidad
            </FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              type="number"
              id="CantidadComida"
              name="cantidad"
              onChange={handleOnChange}
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Grid>

        {/*PRECIO DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel
              sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 20 }}
            >
              Precio
            </FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              type="number"
              id="DescripcionComida"
              name="precio"
              onChange={handleOnChange}
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        </Grid>

        {/*CATEGORIAS DE LA COMIDA*/}
        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel
              sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 20 }}
            >
              Categoría
            </FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} xl={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <StyledTextField
              id="categoriasComida"
              name="categoria"
              onChange={handleOnChange}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <Button p={0}>
                    <Box className={useStyles().section}>
                      AGREGAR
                      <Box className={useStyles().fondo}></Box>
                    </Box>
                  </Button>
                ),
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} xl={2} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <FormLabel
              sx={{ color: "#644838", fontFamily: "Outfit", fontSize: 20 }}
            >
              Imagen
            </FormLabel>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={10} p={"10px"}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <input type="file" multiple onChange={handleChange} ref={imgs} />
          </FormControl>
        </Grid>


        
        <Button onClick={onSubmitFood}>     
                <Boton bgcolor="secondary.main" >Guardar</Boton>
            </Button>
      </Grid>
    </form>
  );
}

export default Comida;