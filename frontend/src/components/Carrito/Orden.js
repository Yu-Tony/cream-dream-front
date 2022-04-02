import { Grid, Button, Typography, Icon } from "@mui/material";

import CardOrden from "./CardOrden";
import Boton from "./Boton";
import confetti from "../../assets/cakes/confetti.jpg";
import vainilla from "../../assets/cakes/vainilla.jpg";
import { grid12All } from "../../responsiveConst";

const ordenes = [
  {
    key: 1,
    imagen: confetti,
    nombre: "Pastel Confetti",
    tipo: "Rebanada",
    precio: 50,
  },
  {
    key: 2,
    imagen: vainilla,
    nombre: "Pastel Vainilla",
    tipo: "Completo",
    precio: 390,
  },
  /*{
    key: 3,
    imagen: confetti,
    nombre: "Pastel Confetti",
    tipo: "Rebanada",
    precio: 50,
  },
  {
    key: 4,
    imagen: vainilla,
    nombre: "Pastel Vainilla",
    tipo: "Completo",
    precio: 390,
  },*/
];

const scrollStyle = (theme) => ({
  overflowY: "auto",
  scrollbarColor: `${theme.palette.primary.main} white`,
  scrollbarWidth: "thin",
});

function Orden() {
  return (
    <>
      <Grid item {...grid12All} textAlign="center">
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          Tu orden
        </Typography>
      </Grid>

      <Grid item {...grid12All} margin="0 2rem">
        <Grid container spacing={1} maxHeight="65vh" sx={scrollStyle}>
          {ordenes.map((orden) => (
            <Grid item {...grid12All} key={orden.key}>
              <CardOrden {...orden} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item {...grid12All}>
        <Boton bgcolor="secondary.main">Ordenar</Boton>
      </Grid>
    </>
  );
}

export default Orden;
