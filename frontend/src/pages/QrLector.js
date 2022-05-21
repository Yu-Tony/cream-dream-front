/*--------------------------IMPORTS--------------------- */
import React, { useState, useRef, useContext, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

import { QrReader } from "react-qr-reader";
import "./css/menu.css";

import { ClienteContext } from "../contexts/Cliente";
import { CarritoContext } from "../contexts/Carrito";

import * as API from "../services/Pedido";

export default function QrLector() {
  const [qr, setQr] = useState();
  const { cliente } = useContext(ClienteContext);
  const { setMesaCliente, setIdPedido } = useContext(CarritoContext);

  useEffect(() => {
    if (qr) {
      switch (cliente.tipo) {
        case 0:
          console.log("Crear pedido");
          setMesaCliente(qr, cliente.id);

          const create = async () => {
            const res = await API.Update(0, { mesa: qr, cliente: cliente.id });
            console.log(res);
            setIdPedido(res.data._id);
          };
          create();
          break;

        case 1:
          console.log("Ver reservacion");
          break;
      }
    }
  }, [qr]);

  /*--------------------------RETURN--------------------- */
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "background.main" }}
      >
        <Grid container style={{ minHeight: "100vh", textAlign: "center" }}>
          {/*ESPACIO */}
          <Grid item md={2} xs={12}></Grid>

          {/*CAMARA QR-READER Y  DATA DECIFRADA*/}
          <Grid item md={8} xs={12}>
            <Typography variant="h1" class="title">
              {" "}
              RESERVACIÓN
            </Typography>

            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setQr(result?.text);
                }
              }}
              style={{ maxHeight: "50%" }}
            />
            <p>{qr}</p>
          </Grid>

          {/*ESPACIO */}
          <Grid item md={2} xs={12}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
