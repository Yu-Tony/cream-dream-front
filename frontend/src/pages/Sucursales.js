/*--------------------------IMPORTS--------------------- */
import React, { useEffect, useState, useContext } from "react";
import "../App.css";

import * as API from "../services/Sucursal";

import { SucursalContext } from "../contexts/Sucursal";

import { Box, CssBaseline, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Santiago from "./images/Santiago.jpg";
import Serena from "./images/Serena.jpg";
import Cumbres from "./images/Cumbres.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";

import DescSucursal from "../components/DescSucursal";
import useDrawer from "../hooks/useDrawer";
import { createDrawer } from "../utils";

/*--------------------------FUNCIONES--------------------- */
const SucursalDrawer = ({ toggle, isOpen }) =>
  createDrawer(DescSucursal, toggle, isOpen);

const SucursalCard = ({ onClick, sucursal }) => (
  <Grid
    item
    xs={12}
    md={6}
    sx={{ display: "flex", justifyContent: "center", p: 5 }}
  >
    <Card
      sx={{ boxShadow: 15 }}
      onClick={() => {
        onClick(sucursal._id);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={sucursal.imagenes[0]}
          alt="imagen"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            color="primary"
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {sucursal.nombre}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ textAlign: "center" }}>
            {sucursal.direccion_corta}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

export default function Sucursales() {
  const sucursalDrawer = useDrawer();

  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    const fetchSucursales = async () => {
      const res = await API.GetAll();
      console.log(res);
      setSucursales(res.data);
    };

    fetchSucursales();
  }, []);

  const { selectSucursal } = useContext(SucursalContext);

  const handleOnClickItem = (id) => {
    sucursalDrawer.toggle();
    //console.log(id);
    selectSucursal(id);
  };

  /*--------------------------RETURN--------------------- */
  return (
    <>
      <SucursalDrawer {...sucursalDrawer} />
      <CssBaseline />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "background.main" }}
      >
        {/* TITULO */}
        <div className="backgroundImage">
          <h3 className="text">Sucursales</h3>
        </div>

        {/* CARDS */}
        <Grid container>
          {sucursales.map((sucursal, index) => (
            <SucursalCard
              key={index}
              onClick={handleOnClickItem}
              sucursal={sucursal}
            />
          ))}

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center", p: 5 }}
          >
            <Card sx={{ boxShadow: 15 }} onClick={sucursalDrawer.toggle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={Santiago}
                  alt="Villa de Santiago"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="primary"
                    component="div"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    VILLA DE SANTIAGO
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{ textAlign: "center" }}
                  >
                    SANTIAGO, NUEVO LEON
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center", p: 5 }}
          >
            <Card sx={{ boxShadow: 15 }} onClick={sucursalDrawer.toggle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={Cumbres}
                  alt="Cumbres"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="primary"
                    component="div"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    CUMBRES
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{ textAlign: "center" }}
                  >
                    MONTERREY, NUEVO LEON
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center", p: 5 }}
          >
            <Card sx={{ boxShadow: 15 }} onClick={sucursalDrawer.toggle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={Serena}
                  alt="Pueblo Serena"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h3"
                    color="primary"
                    component="div"
                    sx={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    PUEBLO SERENA
                  </Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{ textAlign: "center" }}
                  >
                    MONTERREY, NUEVO LEON
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
