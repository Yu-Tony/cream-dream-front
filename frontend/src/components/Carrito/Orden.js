import { Grid, Button, Typography, Icon } from "@mui/material";
import { useContext, useEffect } from "react";
import { CarritoContext } from "../../contexts/Carrito";

import CardOrden from "./CardOrden";
import Boton from "./Boton";
import { grid12All } from "../../responsiveConst";

const scrollStyle = (theme) => ({
  overflowY: "auto",
  scrollbarColor: `${theme.palette.primary.main} white`,
  scrollbarWidth: "thin",
});

function Orden() {
  const { stateCarrito, removeFromCarrito, updateCantidad, ordenar } =
    useContext(CarritoContext);

  const handleOnClickOrdenar = () => {
    //console.log(stateOrden);
    ordenar();
  };

  return (
    <>
      <Grid item {...grid12All} textAlign="center">
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          Tu orden
        </Typography>
      </Grid>

      <Grid item {...grid12All} margin="0 2rem">
        <Grid container spacing={1} maxHeight="65vh" sx={scrollStyle}>
          {stateCarrito.comidas.map((orden, index) => {
            return !orden.ordenado ? (
              <Grid item {...grid12All} key={index}>
                <CardOrden
                  {...orden}
                  onRemove={removeFromCarrito}
                  updateCantidad={updateCantidad}
                />
              </Grid>
            ) : null;
          })}
        </Grid>
      </Grid>

      <Grid item {...grid12All}>
        <Boton bgcolor="secondary.main" onClick={handleOnClickOrdenar}>
          Ordenar
        </Boton>
      </Grid>
    </>
  );
}

export default Orden;
