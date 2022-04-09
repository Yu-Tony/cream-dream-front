import { Grid, Typography, Rating } from "@mui/material";

import { grid12All } from "../../responsiveConst";

const comentarios = [
  {
    nombre: "Nahomi Soto",
    calif: 4,
    texto: "Me atendieron rápido, muy ricos los pasteles.",
  },
  {
    nombre: "Aaron Rodriguez",
    calif: 5,
    texto:
      "Fui a comer al patio como a las 4 de la tarde y no habia boneless de chipotle.",
  },
  {
    nombre: "Eduardo Granados",
    calif: 3,
    texto:
      "El lugar está padrisimo! Pero el servicio como el resto de México en Mega Super lento.",
  },
];

const nombreResponsive = {
  xl: 8,
  lg: 8,
  md: 8,
  sm: 8,
  xs: 8,
};

const ratingResponsive = {
  xl: 4,
  lg: 4,
  md: 4,
  sm: 4,
  xs: 4,
};

const Comentario = ({ nombre, calif, texto }) => (
  <Grid item {...grid12All} margin="0 1.5rem">
    <Grid
      container
      bgcolor="common.white"
      padding={2}
      sx={{ borderRadius: 1, boxShadow: 1 }}
    >
      <Grid item {...grid12All}>
        <Grid container>
          <Grid item {...nombreResponsive}>
            <Typography variant="h6">{nombre}</Typography>
          </Grid>
          <Grid item {...ratingResponsive} textAlign="right">
            <Rating name="read-only" value={calif} readOnly />
          </Grid>
        </Grid>
      </Grid>

      <Grid item {...grid12All}>
        <Typography variant="body1">{texto}</Typography>
      </Grid>
    </Grid>
  </Grid>
);

function Comentarios() {
  return (
    <Grid container spacing={2}>
      {comentarios.map((com, i) => (
        <Comentario key={i} {...com} />
      ))}
    </Grid>
  );
}

export default Comentarios;
