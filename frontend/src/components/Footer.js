import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
//import BottomNavigation from "@mui/material/BottomNavigation";
//import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
//import { bgcolor, borderRadius, fontSize } from "@mui/system";
import { Container, Typography, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

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

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="backgroundColor"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" color="secondary" sx={{ ml: 5, mt: 3, mb: 3 }}>
          Horarios
          <br />
          <Typography variant="h4">
            Lunes <br />
            Martes
            <br />
            Miercoles
            <br />
            Jueves
            <br />
            Viernes
            <br />
          </Typography>
        </Typography>

        <Typography
          variant="h4"
          color="secondary"
          sx={{ mt: 15, mr: 5, textAlign: "right" }}
        >
          Siguenos en nuestras
          <br />
          redes sociales
          <br />
          <Link to="/">
            <Twitter color="secondary" fontSize="12" sx={{ mr: 3 }} />
          </Link>
          <Link to="/">
            <Instagram color="secondary" fontSize="12" sx={{ mr: 3 }} />
          </Link>
          <Link to="/">
            <Facebook color="secondary" fontSize="12" />
          </Link>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
