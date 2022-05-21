import React, { useState, useEffect } from "react";

import { Grid, Box, Container } from "@mui/material";

import Opciones from "./Opciones";
import ListaProductos from "./ListaProductos";

import * as API from "../../services/Comida";

const opciones = ["café", "Pasteles", "prueba-categoria2", "prueba-categoria3"];

function Menu() {
  const [items, setItems] = useState([]);
  const [categoriaSelected, setCategoriaSelected] = useState(opciones[0]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.GetMenu(categoriaSelected);
      //console.log(res);
      setItems(res.data);
    };

    if (categoriaSelected != "") {
      fetchData();
      //console.log(categoriaSelected);
    }
  }, [categoriaSelected]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      sx={{ backgroundColor: "background.main" }}
    >
      <Container>
        <Grid item>
          <Opciones
            callbackOnClick={(label) => {
              setCategoriaSelected(label);
            }}
            data={opciones}
            state={[categoriaSelected, setCategoriaSelected]}
          />
        </Grid>

        <Grid item>
          <Box style={{ minHeight: "100vh" }}>
            <ListaProductos items={items} />
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Menu;
