import {
  Paper,
  Box,
  Grid,
  Icon,
  Button,
  Typography,
  CardMedia,
  Skeleton,
} from "@mui/material";

import { drawerWidths, grid12All } from "../../responsiveConst";
import Comentarios from "./Comentarios";

import Santiago from "../../assets/Santiago.jpg";

import { SucursalContext } from "../../contexts/Sucursal";

import { useState, useContext, useEffect } from "react";

const paperParentStyle = {
  ...drawerWidths,
  bgcolor: "background.main",
};

const imgsResponsive = {
  xl: 5,
  lg: 5,
  md: 5,
  sm: 12,
  xs: 12,
};

const domiResponsive = {
  xl: 7,
  lg: 7,
  md: 7,
  sm: 12,
  xs: 12,
};
const domiResponsivePadd = {
  xl: 0,
  lg: 0,
  md: 0,
  sm: "0 0 0 1.5rem",
  xs: "0 0 0 1.5rem",
};

const BotonClose = ({ toggleDrawer }) => (
  <Button onClick={toggleDrawer} sx={{ color: "text.primary" }}>
    <Icon>close</Icon>
  </Button>
);

function DescSucursal({ toggleDrawer }) {
  const { sucursal, selectSucursal } = useContext(SucursalContext);
  //const sucursal = undefined;

  useEffect(() => {
    return () => {
      console.log("cerrar");
      selectSucursal({});
    };
  }, []);

  return sucursal ? (
    <Paper sx={paperParentStyle}>
      <Grid container spacing={3}>
        <Grid item>
          <BotonClose toggleDrawer={toggleDrawer} />
        </Grid>

        <Grid item lg={12}>
          <Grid container spacing={2}>
            <Grid item {...grid12All} textAlign="center">
              <Typography variant="h4">{sucursal.nombre}</Typography>
            </Grid>
            <Grid item {...imgsResponsive}>
              <CardMedia
                component="img"
                image={sucursal.imagenes[0]}
                height="100%"
                alt="imagen"
              />
            </Grid>
            <Grid item {...domiResponsive} margin={domiResponsivePadd}>
              <Typography fontWeight="600" paddingBottom="0.2rem">
                {sucursal.direccion}
              </Typography>
              <Typography>Horario:</Typography>
              <Typography paddingBottom="0.2rem">
                Lunes a Domingo de 9:30 - 23:00 hrs
              </Typography>
              <Typography paddingBottom="0.2rem">
                Teléfono: {sucursal.telefono}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item {...grid12All}>
          <Grid container padding="0 3rem">
            <Grid item lg={12}>
              <Typography variant="h6">Ubicacion</Typography>
            </Grid>
            <Grid item {...grid12All}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height="300px"
              ></Skeleton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={12}>
          <Comentarios />
        </Grid>
      </Grid>
    </Paper>
  ) : null;
}

export default DescSucursal;
