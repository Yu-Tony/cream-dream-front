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

import Producto from "../components/Producto";
import useDrawer from "../hooks/useDrawer";
import { createDrawer } from "../utils";

const ProductoDrawer = ({ toggle, isOpen }) =>
  createDrawer(Producto, toggle, isOpen);

export default function Home() {
  const productoDrawer = useDrawer();

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

  return (
    <ThemeProvider theme={theme}>
      <ProductoDrawer {...productoDrawer} />
      <Box sx={{ backgroundColor: "background.main" }}>
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
            >
              Postres
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box id="BebidasM">
            <Box id="Cafe" sx={{ pb: 3 }}>
              <Box sx={{ ml: 12, mb: 1 }}>
                <Typography
                  style={TyStyV5PD9}
                  sx={{ textTransform: "uppercase" }}
                >
                  Café
                </Typography>
              </Box>
              <Box sx={{ pb: 4 }}>
                <Grid container sx={{ px: 3 }}>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        onClick={productoDrawer.toggle}
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Extracción pura de café con granos de la casa, balance
                          en acidez y dulzor (40ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Café clasico para disfrutar en cualquier momento. Agua
                          caliente y expresso (240ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Bebida con un mayor sabor dulce y la presencia de un
                          sutil sabor a expresso (250ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Combinación de la intensidad del espresso y suavidad
                          de la leche cremada (260ml)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box id="Té" sx={{ pb: 3 }}>
              <Box sx={{ ml: 12, mb: 1 }}>
                <Typography
                  style={TyStyV5PD9}
                  sx={{ textTransform: "uppercase" }}
                >
                  Té
                </Typography>
              </Box>
              <Box sx={{ pb: 4 }}>
                <Grid container sx={{ px: 3 }}>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD5P9}>Fruta Pasión</Typography>
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Delicia citrica elaborada con autenticos trozos de
                          frutos secos (350ml)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Aromaticas hojas de Jazmín, un sabor suave y fresco
                          para cualquier hora del día (350ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Bebida fria con un sutil sabor a frutos rojos (500ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Mezcla de la casa, especias y cítricos. Perfecta para
                          comenzar el día (260ml)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Box id="Frappés" sx={{ pb: 3 }}>
              <Box sx={{ ml: 12, mb: 1 }}>
                <Typography
                  style={TyStyV5PD9}
                  sx={{ textTransform: "uppercase" }}
                >
                  Frappés
                </Typography>
              </Box>
              <Box sx={{ pb: 4 }}>
                <Grid container sx={{ px: 3 }}>
                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Delicioso frappé sabor coco con crema y cucrijiente
                          coco rayado (650ml)
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Con pedazos de caramelo, una base de café y crema
                          (650ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
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
                        <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
                          Bebida dulce a base de leche y con el sabor puro de la
                          raiz Taro (500ml).
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
