  /*--------------------------IMPORTS--------------------- */
import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Link,
  Paper,
  Button,
  Box,
  Grid,
  ThemeProvider,
  createTheme,
  Container,
} from "@mui/material";
import Image from "mui-image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./css/menu.css";

import Espresso from "./images/espresso.jpg";
import Americano from "./images/americano.jpg";
import Latte from "./images/latte.jpg";
import Cappuccino from "./images/cappuccino.jpg";
import Jazmin from "./images/Jazmin.jpg";
import FrutaPasion from "./images/FrutaPasión.jpg";
import NegroFR from "./images/NegroFR.jpg";
import FrappeC from "./images/FrappeC.jpg";
import Oolong from "./images/Oolong.jpg";
import FrappeCT from "./images/FrappeCT.jpg";
import FrappeT from "./images/FrappeT.jpg";
import HuevosDeli from "./images/HuevosDeli.jpg";
import HuevosD from "./images/HuevosD.jpg";
import Portobello from "./images/Portobello.jpg";
import Revolucionarios from "./images/Revolucionarios.jpg";
import OmeletteC from "./images/OmeletteC.jpg";
import RancherosQ from "./images/RancherosQ.jpg";
import ToastA from "./images/ToastA.jpg";
import BeyondS from "./images/BeyondS.jpg";
import PastaS from "./images/PastaS.jpg";
import PechugaN from "./images/PechugaN.jpg";
import BirthdayC from "./images/BirthdayC.jpg";
import CheesecakeV from "./images/CheesecakeV.jpg";
import PartyC from "./images/PartyC.jpg";
import CupcakeCP from "./images/CupcakeCP.jpg";
import CupcakeC from "./images/CupcakeC.jpg";

import Producto from "../components/Producto";
import useDrawer from "../hooks/useDrawer";
import { createDrawer } from "../utils";

{/*--------------------------DRAWER--------------------- */}
const ProductoDrawer = ({ toggle, isOpen }) =>
createDrawer(Producto, toggle, isOpen);


{/*--------------------------INICIO MENU--------------------- */}
export default function Menu() {
  const productoDrawer = useDrawer();

  {/*--------------------------THEME--------------------- */}
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FA8466",
        dark: "#DE6D71",
      },
      secondary: {
        main: "#FFEFB5",
        secondary: "#FFFFFF",
      },
      background: {
        main: "#FEEEE5",
        dark: "#EFD3C3",
      },
      text: {
        primary: "#644838",
        secondary: "#DE6D71",
        tertiary: "#FA8466",
      },
    },
    typography: {
      fontFamily: "Outfit",
    },
  });
  

  const TyStyProm = { fontSize: 20, color: "#644838", fontWeight: 700 };
  const TyStyV5PD9 = { fontSize: 25, color: "#DE6D71", fontWeight: 900 };
  const TyStyD5P9 = { fontSize: 15, color: "#644838", fontWeight: 900 };
  const TyStyD2P6 = { fontSize: 12, color: "#644838", fontWeight: 600 };
  const TyStyD4SS9 = { fontSize: 14, color: "#FFFFFF", fontWeight: 900 };

  {/*--------------------------FUNCIONES--------------------- */}
  {/*Bebidas */}
  const [bebida, setBebida] = React.useState(true);
  function Bebidas(props) {
  
      return( 
        
        <Container id="BebidasM" >
    
         <Box id="Cafe">
            <Box sx={{ ml: 6, mb: 1 }}>
                      <Typography style={TyStyV5PD9} sx={{ textTransform: "uppercase" }}>
                        Café
                      </Typography>
            </Box>
    
            <Grid container>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $68
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Espresso}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Espresso</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Extracción pura de café con granos de la casa,
                                balance en acidez y dulzor (40ml).
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $59
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Americano}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Espresso</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Café clasico para disfrutar en cualquier momento.
                                Agua caliente y expresso (240ml).
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $68
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Latte}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Latte</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Bebida con un mayor sabor dulce y la presencia de un
                                sutil sabor a expresso (250ml).
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $68
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Cappuccino}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Cappuccino italiano
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Combinación de la intensidad del espresso y suavidad
                                de la leche cremada (260ml)
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $68
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Cappuccino}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Cappuccino italiano
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Combinación de la intensidad del espresso y suavidad
                                de la leche cremada (260ml)
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $68
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Cappuccino}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Cappuccino italiano
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Combinación de la intensidad del espresso y suavidad
                                de la leche cremada (260ml)
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
                      <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                        <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $68
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Cappuccino}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Cappuccino italiano
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Combinación de la intensidad del espresso y suavidad
                                de la leche cremada (260ml)
                              </Typography>
                            </Box>
                        </Box>
                      </Grid>
    
            </Grid>
         </Box>
    
         <Box id="Té" sx={{ pb: 3 }}>
           <Box sx={{ ml: 6, mb: 1 }}>
                      <Typography
                        style={TyStyV5PD9}
                        sx={{ textTransform: "uppercase" }}
                      >
                        Té
                      </Typography>
           </Box>
           
           <Grid container>
    
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $89
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={FrutaPasion}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Fruta Pasión
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Delicia citrica elaborada con autenticos trozos de
                                frutos secos (350ml)
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $89
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Jazmin}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Jazmín</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Aromaticas hojas de Jazmín, un sabor suave y fresco
                                para cualquier hora del día (350ml).
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $105
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={NegroFR}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Negro Frutos Rojos
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Bebida fria con un sutil sabor a frutos rojos
                                (500ml).
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $105
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={Oolong}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>
                                Oolong Toronja
                              </Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Mezcla de la casa, especias y cítricos. Perfecta
                                para comenzar el día (260ml)
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
           </Grid>
                
         </Box>
    
         <Box id="Frappés" sx={{ pb: 3 }}>
            <Box sx={{ ml: 6, mb: 1 }}>
                      <Typography style={TyStyV5PD9}  sx={{ textTransform: "uppercase" }} >
                        Frappés
                      </Typography>
            </Box>
                        
            <Grid container>
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $115
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={FrappeC}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Coco</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Delicioso frappé sabor coco con crema y cucrijiente
                                coco rayado (650ml)
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $115
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={FrappeCT}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Coffe Toffe</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Con pedazos de caramelo, una base de café y crema
                                (650ml).
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
                        <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                          <Box>
                            <Box
                              sx={{
                                position: "absolute",
                                mt: 28.5,
                                width: 165,
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "primary.main",
                                  border: 1,
                                  borderColor: "text.primary",
                                  py: 0,
                                  px: 2,
                                }}
                                startIcon={<ShoppingCartOutlinedIcon />}
                                style={TyStyD4SS9}
                                variant="contained"
                              >
                                $115
                              </Button>
                            </Box>
    
                            <Box
                              sx={{
                                backgroundColor: "secondary.secondary",
                                borderRadius: 1,
                                width: 150,
                                height: 213,
                                textAlign: "center",
                                px: 1,
                                py: 1.5,
                              }}
                              className="cardMenu"
                            >
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Image
                                  src={FrappeT}
                                  fit="cover"
                                  duration={0}
                                  height={140}
                                  width={140}
                                />
                              </Box>
                              <Typography style={TyStyD5P9}>Taro</Typography>
                              <Typography
                                style={TyStyD2P6}
                                sx={{ lineHeight: 1.1 }}
                              >
                                Bebida dulce a base de leche y con el sabor puro de
                                la raiz Taro (500ml).
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
    
            </Grid>
                
         </Box>

        </Container>
  
     );
  }
  function bebidaTrue()
  {
    setBebida(true);
    setDesayuno(false);
    setComida(false);
    setPostre(false);
  
  }

  {/*Desayuno */}
  const [desayuno, setDesayuno] = React.useState(false);
  function Desayunos(props)
  {
      return(
        <Container id="DesaYAlmuM" >
     
          <Box sx={{ ml: 6, mb: 1 }}>
              <Typography
                style={TyStyV5PD9}
                sx={{ textTransform: "uppercase" }}
              >
                Huevo
              </Typography>
          </Box>
        
          <Grid container>
                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $96
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={HuevosDeli}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>Huevos Deli</Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Revueltos con salmon ahumado. Acompañados de un
                        crujiente bagel, queso crema y pepinillos.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $110
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={HuevosD}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Huevos Dueto
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Tres tacos de huevo a la mexicana, cubiertos con
                        salsa de frijol negro, verde y queso.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $128
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={Portobello}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>Portobello</Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Huevos cocinados con hongos portobello, pesto de
                        tomate y toque de parmesano.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $96
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={Revolucionarios}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Revolucionarios
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        2 huevos orgánicos estrellados sobre sopes de masa
                        de nopal, bañados en salsa.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $90
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={OmeletteC}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Omelette Caprese
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Queso mozzarella fresco, tomate deshidratado,
                        jitomate y un toque de pesto.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $134
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={RancherosQ}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Rancheros Quinoa
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Huevos estrellados con salsa roja sobre una base de
                        quinoa, frijol, kale, cilatro y aguacate.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $85
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={ToastA}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Toast de aguacate
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Dos rebanadas de pan ciabatta con aguacate, queso de
                        cabra, jitomate y huevo.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

          </Grid>

        </Container>
      )
    
  }
  function desayunoTrue()
  {
    setBebida(false);
    setDesayuno(true);
    setComida(false);
    setPostre(false);
  }

  {/*Comida */}
  const [comida, setComida] = React.useState(false);
  function Comidas(props)
  {
      return(
   
      <Container id="ComidaM" >
      
        <Box id="Pastas" sx={{ pb: 3 }}>
            <Box sx={{ ml: 6, mb: 1 }}>
              <Typography  style={TyStyV5PD9} sx={{ textTransform: "uppercase" }}>
                Pastas
              </Typography>
            </Box>

           
            <Grid container>
              <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $145
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={BeyondS}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Beyond Spaghetti
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Spaghetti con salsa pomodoro, calabaza italiana,
                        champiñón y albondiguitas de Beyond Beef.
                      </Typography>
                    </Box>
                  </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $125
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={PastaS}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Pasta salmón
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Fusilli con salsa cremosa de vino blanco, cilantro,
                        habanero y salmón a la plancha.
                      </Typography>
                    </Box>
                  </Box>
              </Grid>
            </Grid>
           
        </Box>

        <Box id="Pollo" sx={{ pb: 3 }}>
            <Box sx={{ ml: 6, mb: 1 }}>
              <Typography style={TyStyV5PD9} sx={{ textTransform: "uppercase" }}>
                Pollo
              </Typography>
            </Box>

         
            <Grid container>
              <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                  <Box>
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $99
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={PechugaN}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Pechuga Napoli
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Rellena con queso mozzarella, espinaca, tomate
                        deshidratado y albahaca. Pasta y espinaca.
                      </Typography>
                    </Box>
                  </Box>
              </Grid>
            </Grid>
       
        </Box>

      
      </Container>
      )
    
  }
  function comidaTrue()
  {
    setBebida(false);
    setDesayuno(false);
    setComida(true);
    setPostre(false);
  }

  {/*Postre */}
  const [postre, setPostre] = React.useState(false);
  function Postres(props)
  {
      return(
      <Container id="PostresM" >
      
        <Box id="Pasteles" sx={{ pb: 3 }}>
            <Box sx={{ ml: 6, mb: 1 }}>
              <Typography style={TyStyV5PD9} sx={{ textTransform: "uppercase" }}>
                Pasteles
              </Typography>
            </Box>

    
            <Grid container>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            
                  <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $260
                      </Button>
                  </Box>

                  <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={BirthdayC}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Birthday Cake
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Tres niveles de pastel de vainilla con motas de
                        arcoíris, glaseado cremoso y migas.
                      </Typography>
                  </Box>
                
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                 
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $245
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={CheesecakeV}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Cheesecake Velvet
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Pastel de queso con capas y glaseado Red Velvet de
                        doble chocolate, relleno de tarta de queso.
                      </Typography>
                    </Box>
                 
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
               
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $270
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={PartyC}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>Party Cake</Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Pastel con capas de vainilla rosa, confeti y
                        vainilla azul, cubiertas con crema de mantequilla.
                      </Typography>
                    </Box>
                
                </Grid>

            </Grid>
          
        </Box>

        <Box id="Magdalenas" sx={{ pb: 3 }}>
            <Box sx={{ ml: 6, mb: 1 }}>
              <Typography style={TyStyV5PD9} sx={{ textTransform: "uppercase" }}>
                Magdalenas
              </Typography>
            </Box>

        
              <Grid container>
                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
               
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $30
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={CupcakeCP}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>
                        Chocolate y Platano
                      </Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Pastel humedo de plátano cubierto con crema de
                        chocolate.
                      </Typography>
                    </Box>
                 
                </Grid>

                <Grid item xs={6} sm={4} md={3} lg={2} sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                 
                    <Box
                      sx={{
                        position: "absolute",
                        mt: 28.5,
                        width: 165,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          border: 1,
                          borderColor: "text.primary",
                          py: 0,
                          px: 2,
                        }}
                        startIcon={<ShoppingCartOutlinedIcon />}
                        style={TyStyD4SS9}
                        variant="contained"
                      >
                        $36
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: "secondary.secondary",
                        borderRadius: 1,
                        width: 150,
                        height: 213,
                        textAlign: "center",
                        px: 1,
                        py: 1.5,
                      }}
                      className="cardMenu"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={CupcakeC}
                          fit="cover"
                          duration={0}
                          height={140}
                          width={140}
                        />
                      </Box>
                      <Typography style={TyStyD5P9}>Caramelo</Typography>
                      <Typography
                        style={TyStyD2P6}
                        sx={{ lineHeight: 1.1 }}
                      >
                        Hecho con azucar morena y terminada con crema de
                        mantquilla de merengue acaramelado.
                      </Typography>
                    </Box>
                  
                </Grid>
              </Grid>
         
        </Box>
      
      </Container>
      )
    
  }
  function postresTrue()
  {
    setBebida(false);
    setDesayuno(false);
    setComida(false);
    setPostre(true);
  }

   {/*--------------------------RETURN--------------------- */}

  return (


      <Grid  container spacing={0}  direction="column" sx={{ backgroundColor: "background.main"}}  >
        
        {/*Categorias */}
        <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
          <Box sx={{ mx: 2 }}>
            <Typography
              id="Bebidas"
              style={TyStyProm}
              sx={{
                px: 1,
                mx: 1,
                display: "inline",
                borderBottom: 3,
                borderColor: "primary.dark",
                textTransform: "uppercase",
              }}
              className="TyBtn"
              onClick={() => bebidaTrue()}
              
            >
              Bebidas
            </Typography>

            <Typography
              id="DesaAlmu"
              style={TyStyProm}
              sx={{
                px: 1,
                mx: 1,
                display: "inline",
                textTransform: "uppercase",
              }}
              className="TyBtn"
              onClick={() => desayunoTrue()}
            >
              Desayunos y almuerzos
            </Typography>

            <Typography
              id="Comidas"
              style={TyStyProm}
              sx={{
                px: 1,
                mx: 1,
                display: "inline",
                textTransform: "uppercase",
              }}
              className="TyBtn"
              onClick={() => comidaTrue()}
            >
              Comidas
            </Typography>

            <Typography
              id="Postres"
              style={TyStyProm}
              sx={{
                px: 1,
                mx: 1,
                display: "inline",
                textTransform: "uppercase",
              }}
              className="TyBtn"
              onClick={() => postresTrue()}
            >
              Postres
            </Typography>
            
          </Box>
        </Box>

        {/*Contenido */}
        <Box style={{ minHeight: '100vh' }}>
         
          {bebida && <Bebidas></Bebidas>}
          {desayuno && <Desayunos></Desayunos>}
          {comida && <Comidas></Comidas>}
          {postre && <Postres></Postres>}

        </Box>

      </Grid>



  );
}
