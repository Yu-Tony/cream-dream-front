import { useContext } from "react";

import { CarritoContext } from "../../contexts/Carrito";

import { calcularSubtotal } from "../../utils";

import { Grid, Typography } from "@mui/material";
import Boton from "./Boton";
import { grid12All } from "../../responsiveConst";

const info = [
  {
    nombre: "Pastel Confetti",
    cantidad: 2,
    opcion: "R",
    precio: 100,
  },
  {
    nombre: "Pastel de Vainilla",
    cantidad: 1,
    opcion: "C",
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

const Item = ({ nombre, precio, cantidad, opcion, sx }) => (
  <>
    <Grid item {...itemResponsive} sx={sx}>
      <Typography variant="h6">
        {nombre} {opcion ? `${opcion}.` : null}{" "}
        {cantidad > 1 ? `(${cantidad})` : null} {}
      </Typography>
    </Grid>
    <Grid item textAlign="end" sx={sx}>
      <Typography variant="h6">
        $ {cantidad ? precio * cantidad : precio}
      </Typography>
    </Grid>
  </>
);

function Cuenta() {
  const { stateCarrito } = useContext(CarritoContext);

  return (
    <>
      <Grid container padding="0 2rem">
        <Grid item {...grid12All} textAlign="center" marginBottom="1rem">
          <Typography variant="h5" sx={{ fontWeight: "500" }}>
            Cuenta
          </Typography>
        </Grid>

        {stateCarrito.comidas.map((item) => {
          return item.ordenado ? <Item {...item} /> : null;
        })}

        <Item
          nombre={"Subtotal"}
          precio={calcularSubtotal(stateCarrito.comidas)}
          sx={{ marginTop: "1rem" }}
        />

        <Grid item {...grid12All}>
          <Boton bgcolor="primary.main">Pagar</Boton>
        </Grid>
      </Grid>
    </>
  );
}

export default Cuenta;
