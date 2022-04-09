import React from "react";
import "../App.css";
import { Box, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Santiago from "./Images/Santiago.jpg";
import Serena from "./Images/Serena.jpg";
import Cumbres from "./Images/Cumbres.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Footer from "../components/Footer";



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

export default function Sucursales() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="backgroundImage">
        <h3 className="text">Sucursales</h3>
      </div>
      <Box

        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "Wrap",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "35%", m: 10, boxShadow: 15 }}>
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

        <Card sx={{ width: "35%", m: 10, boxShadow: 15 }}>
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

        <Card sx={{ width: "35%", m: 10, boxShadow: 15 }}>
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
      </Box>
      <Footer/>
    </ThemeProvider>
  );
}
