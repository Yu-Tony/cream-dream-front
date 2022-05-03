  /*--------------------------IMPORTS--------------------- */
import React from "react";
import "../App.css";

import { Box, CssBaseline, Typography } from "@mui/material";
import {  createTheme } from "@mui/material/styles";
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


  /*--------------------------STYLE--------------------- */
const theme = createTheme({
  palette: {
    primary: {
      main: "#644838",
    },
    secondary: {
      main: "#FFFFFF ",
    },
    background: {
      default: "#FEEEE5",
    },
  },
  typography: {
    fontFamily: "Outfit",
  },
});

  /*--------------------------FUNCIONES--------------------- */
const SucursalDrawer = ({ toggle, isOpen }) =>
  createDrawer(DescSucursal, toggle, isOpen);

export default function Sucursales() {
  const sucursalDrawer = useDrawer();

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
            sx={{ backgroundColor: "background.main"}}  
        >

          {/* TITULO */}
          <div className="backgroundImage">
            
            <h3 className="text">Sucursales</h3>
          </div>

          
           {/* CARDS */}
          <Grid container>
          
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" , p: 5}}>
              <Card
                sx={{ boxShadow: 15 }}
                onClick={sucursalDrawer.toggle}
              >
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

            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" , p: 5}}>
              <Card
                sx={{ boxShadow: 15 }}
                onClick={sucursalDrawer.toggle}
              >
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

            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" , p: 5}}>
              <Card
                sx={{ boxShadow: 15 }}
                onClick={sucursalDrawer.toggle}
              >
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
