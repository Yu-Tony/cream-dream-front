import { Grid, Typography } from "@mui/material";
import Boton from "./Boton";
import { grid12All } from "../../responsiveConst";

const info = [
  {
    nombre: "Pastel Confetti",
    unidad: 2,
    tipo: "R",
    precio: 100,
  },
  {
    nombre: "Pastel de Vainilla",
    unidad: 1,
    tipo: "C",
    precio: 390,
  },
];

const subtotal = { nombre: "Subtotal", precio: 490 };

const itemResponsive = {
  xs: 10,
  sm: 10,
  md: 10,
  lg: 10,
  xl: 10,
};

const Item = ({ nombre, precio, unidad, tipo, sx }) => (
  <>
    <Grid item {...itemResponsive} sx={sx}>
      <Typography variant="h6">
        {nombre} {tipo ? `${tipo}.` : null} {unidad > 1 ? `(${unidad})` : null}{" "}
        {}
      </Typography>
    </Grid>
    <Grid item textAlign="end" sx={sx}>
      <Typography variant="h6">${precio}</Typography>
    </Grid>
  </>
);

function Cuenta() {
  return (
    <>
      <Grid container padding="0 2rem">
        <Grid item {...grid12All} textAlign="center" marginBottom="1rem">
          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            Cuenta
          </Typography>
        </Grid>

        {info.map((item) => (
          <Item {...item} />
        ))}

        <Item {...subtotal} sx={{ marginTop: "1rem" }} />

        <Grid item {...grid12All}>
          <Boton bgcolor="primary.main">Pagar</Boton>
        </Grid>
      </Grid>
    </>
  );
}

export default Cuenta;
