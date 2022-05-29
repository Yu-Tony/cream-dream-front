import React, { useState,createRef } from "react";
import { Button,Typography, Grid, FormControl,InputAdornment, FormLabel,Alert, Container } from "@mui/material";
import { Box } from "@mui/system";
import { FileUploader } from "react-drag-drop-files";
import Boton from "../../../components/Carrito/Boton";
import { StyledTextField,useStyles } from "../styles";

import * as API from "../../../services/Comida";

function Comida() {
  const [formErrors, setformErrors] = useState({ });

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

  const [isSubmitComida, setIsSubmitComida] = useState(false);
  const [isSubmitComidaRight, setIsSubmitComidaRight] = useState(false);
  const onSubmitFood = async (event) => {
    event.preventDefault();
    console.log(data);
    setformErrors(ValidateComida(data));
    const res = await API.Create(data);
    console.log(res);

    if(res===false)
    {
     
      setIsSubmitComida(true);
      setIsSubmitComidaRight(false);
     
    }
    else{
     
      setIsSubmitComida(true);
      setIsSubmitComidaRight(true);
    }
  };

  const ValidateComida = (values) =>
  {
    const errors={}
    if(!values.nombre){errors.nombre = "Ingresar un nombre";}
    if(!values.cantidad){errors.cantidad = "Ingresar una cantidad de comida";}
    if(!values.descripcion){errors.descripcion = "Ingresar una descripcion de comida";}
    if(!values.precio){errors.precio = "Ingresar el precio de la comida";}
    if(!values.categoria){errors.categoria = "Ingresar una categoria";}
    return errors;
  }


  return (
    <Container>

      {(Object.keys(formErrors).length === 0 &&isSubmitComida && isSubmitComidaRight) &&  <Alert severity="success">Comida creada exitosamente</Alert>}
      {(Object.keys(formErrors).length === 0 &&isSubmitComida && !isSubmitComidaRight) &&  <Alert severity="error">Error al crear comida, intente de nuevo</Alert>}


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
              {formErrors.nombre && <Alert severity="error">{formErrors.nombre}</Alert>}    
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
               {formErrors.descripcion && <Alert severity="error">{formErrors.descripcion}</Alert>}    
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
             {formErrors.cantidad && <Alert severity="error">{formErrors.cantidad}</Alert>}    
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
             {formErrors.precio && <Alert severity="error">{formErrors.precio}</Alert>} 
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
             {formErrors.categoria && <Alert severity="error">{formErrors.categoria}</Alert>} 
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
    </Container>
   
  );
}

export default Comida;