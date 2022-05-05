/*--------------------------IMPORTS--------------------- */
import React, { useState } from "react";
import { withStyles, makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";

import Boton from "../../components/Carrito/Boton";

import { Hidden } from "@mui/material";

import InfoPers from "./Components/InfoPers";
import InfoPago from "./Components/InfoPago";

export default function Perfil() {
  /*--------------------------FUNCIONES--------------------- */

  const [infoPersonal, setInfoPersonal] = React.useState(true);
  function personal() {
    setInfoPersonal(true);
    setInfoPago(false);
  }

  const [infoPago, setInfoPago] = React.useState(false);
  function pago() {
    setInfoPersonal(false);
    setInfoPago(true);
  }

  const [selected, setSelected] = React.useState("left");
  const handleAlignment = (event, newAlignment) => {
    setSelected(newAlignment);
  };

  /*--------------------------RETURN--------------------- */

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      sx={{ bgcolor: "#FEEEE5" }}
    >
      <Grid container style={{ minHeight: "100vh" }}>
        {/* OPCIONES */}
        <Grid item md={2} xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            p={"10px"}
          >
            <Button p={0} onClick={() => personal()}>
              <Boton bgcolor="primary.main">Informacion personal</Boton>
            </Button>

            <Button p={0} onClick={() => pago()}>
              <Boton bgcolor="primary.main">Información de Pago</Boton>
            </Button>
          </Grid>
        </Grid>

        {/* ESPACIO */}
        <Hidden mdDown implementation="css">
          <Grid item sm={2} p={"100px"}></Grid>
        </Hidden>

        {/* CONTENIDO */}
        <Grid item md={6} xs={12} p={"20px"}>
          <Box
            item
            sx={{
              p: 8,
              bgcolor: "white",
              paddingTop: "60px",
              paddingBottom: "60px",
              boxShadow: "-20px 20px #efd3c3",
            }}
          >
            {infoPersonal && <InfoPers />}

            {infoPago && <InfoPago />}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
