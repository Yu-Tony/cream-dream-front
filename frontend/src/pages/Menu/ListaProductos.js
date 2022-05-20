import React from "react";

import ProductoCard from "./ProductoCard";

import { Grid } from "@mui/material";

function ListaProductos({ items }) {
  return (
    <Grid container>
      {items.map((item, index) => (
        <ProductoCard key={index} producto={item} />
      ))}
    </Grid>
  );
}

export default ListaProductos;
