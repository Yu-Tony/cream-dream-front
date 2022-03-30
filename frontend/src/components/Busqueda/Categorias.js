import { Typography, Box } from "@mui/material";

import CategoriaBoton from "./CategoriaBoton";

import { useState } from "react";

const categoriasTituloStyle = {
  fontWeight: "600",
  textTransform: "uppercase",
  marginBottom: "1rem",
  fontSize: "1.3rem",
};

function Categorias() {
  const [categorias, setCategorias] = useState([
    { key: 0, label: "Café" },
    { key: 1, label: "Pastel" },
    { key: 2, label: "Malteada" },
    { key: 3, label: "Galleta" },
    /*{ key: 4, label: "Café" },
    /*{ key: 5, label: "Pastel" },
    /*{ key: 6, label: "Malteada" },
    /*{ key: 7, label: "Galleta" },*/
  ]);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={categoriasTituloStyle}>Categorias</Typography>
      {categorias.map((categoria) => {
        return (
          <CategoriaBoton
            key={categoria.key}
            label={categoria.label}
            sx={{ marginRight: "2rem", marginTop: "0.5rem" }}
          />
        );
      })}
    </Box>
  );
}

export default Categorias;
