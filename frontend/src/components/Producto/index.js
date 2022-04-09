import { Paper, Box, Grid, Button, Typography } from "@mui/material";

import Carousel from "./Carousel";

import { drawerWidths } from "../../responsiveConst";
import { grid12All } from "../../responsiveConst";
import Contador from "../Contador";
import TipoSelector from "./TipoSelector";

const paperParentStyle = {
  position: "relative",
  ...drawerWidths,
  overflowX: "hidden",
  bgcolor: "background.main",
  height: "100vh",
};

const botonStyle = (theme) => ({
  color: "common.white",
  bgcolor: "primary.main",
  padding: "0.5rem 1.5rem",
  border: `2px solid ${theme.palette.text.primary}`,
  boxSizing: "border-box",
  ":hover": { bgcolor: "primary.dark" },
});

const respTitulo = { xs: 9, sm: 9, md: 9, lg: 9, xl: 9 };
const respPrecio = { xs: 3, sm: 3, md: 3, lg: 3, xl: 3 };
const respContador = { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 };
const respBoton = { xs: 8, sm: 8, md: 8, lg: 8, xl: 8 };

function Producto() {
  return (
    <>
      <Paper sx={paperParentStyle}>
        <Grid container spacing={2}>
          <Grid item {...grid12All} bgcolor="">
            <Carousel width="100%" height="350px" padding="0" />
          </Grid>

          <Grid item {...grid12All}>
            <Grid container spacing={2} padding="0 2rem">
              <Grid item {...grid12All} bgcolor="">
                <Grid container>
                  <Grid item {...respTitulo}>
                    <Typography variant="h5" fontWeight={600}>
                      Latte
                    </Typography>
                  </Grid>
                  <Grid item {...respPrecio} textAlign="end">
                    <Typography
                      variant="h5"
                      color="primary.main"
                      fontWeight={600}
                    >
                      $ 68
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item {...grid12All} textAlign="center">
                <Typography variant="body1" fontWeight={500}>
                  Bebida con un mayor sabor dulce con la presencia de un sutil a
                  espresso (250ml). Está compuesto por 1oz de espresso y 7oz de
                  leche cremada
                </Typography>
              </Grid>
              <Grid item {...grid12All}>
                <TipoSelector />
              </Grid>
              <Grid item {...grid12All}>
                <Grid container spacing="0">
                  <Grid
                    item
                    {...respContador}
                    display="flex"
                    alignItems="center"
                  >
                    <Contador
                      bgcolor="background.dark"
                      justifyContent="center"
                    />
                  </Grid>
                  <Grid item {...respBoton} textAlign="right">
                    <Button sx={botonStyle}>Añadir al carrito</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Producto;
