import Categorias from "./Categorias";
import BarraBusqueda from "./BarraBusqueda";
import CardBusqueda from "./CardBusqueda";

import { Box, Grid, Icon, Divider, Button } from "@mui/material";

import confetti from "../../assets/cakes/confetti.jpg";
import vainilla from "../../assets/cakes/vainilla.jpg";
import chocolate from "../../assets/cakes/chocolate.jpg";

const boxStyle = {
  bgcolor: "#ffeee6",
  width: {
    xs: "90vw",
    sm: "60vw",
    md: "50vw",
    lg: "40vw",
    xl: "35vw",
  },
};

const dividerStyle = {
  bgcolor: "primary.main",
  margin: " 1.5rem 2rem",
  height: "0.09rem",
  borderRadius: "5px",
};

const gridSizeAll12 = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

const busquedaItems = [
  {
    id: 1,
    nombre: "Pastel Confetti",
    descr:
      "Pastel de vainilla con confetti doblado en cada capa, cubierto con crema de mantequilla",
    precio: "50",
    imagen: confetti,
  },
  {
    id: 2,
    nombre: "Pastel de vainilla",
    descr:
      "Delicioso pastel de vainilla, rico y mantecoso con una miga ligera, cubierto con crema de mantequilla",
    precio: "65",
    imagen: vainilla,
  },
  {
    id: 3,
    nombre: "Pastel de chocolate",
    descr:
      "Tres capas de cremosa mantequilla de chocolate sedosa con chispas de vainilla",
    precio: "55",
    imagen: chocolate,
  },
];

function Busqueda({ toggleDrawer }) {
  return (
    <>
      <Box sx={boxStyle}>
        <Box sx={{ bgcolor: "" }}>
          <Grid container spacing={0}>
            <Grid
              {...gridSizeAll12}
              item
              sx={{ bgcolor: "transparent", padding: "0.5rem" }}
            >
              <Button onClick={toggleDrawer} sx={{ color: "text.primary" }}>
                <Icon>close</Icon>
              </Button>
            </Grid>

            <Grid
              {...gridSizeAll12}
              item
              sx={{
                bgcolor: "",
                padding: "0 2rem",
              }}
            >
              <BarraBusqueda sx={{ paddingBottom: "2rem" }} />
              <Categorias />
            </Grid>
          </Grid>
        </Box>

        <Divider variant="middle" sx={dividerStyle} />

        <Box sx={{ padding: "0 1.5rem" }}>
          <Grid container spacing={2}>
            {busquedaItems.map((item) => (
              <Grid
                {...gridSizeAll12}
                item
                sx={{ padding: "0 0" }}
                key={item.id}
              >
                <CardBusqueda {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Busqueda;
