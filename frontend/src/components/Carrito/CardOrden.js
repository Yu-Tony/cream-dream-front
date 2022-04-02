import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";

import Contador from "./Contador";
import { grid12All } from "../../responsiveConst";

const imgWidth = {
  width: {
    xs: "90px",
    sm: "100%",
    md: "50%",
    lg: "70%",
    xl: "70%",
  },
};

const precioRespo = { xs: 3, sm: 3, md: 6, lg: 6, xl: 6 };
const contadorRespo = { xs: 9, sm: 9, md: 6, lg: 6, xl: 6 };

function CardOrden({ imagen, nombre, tipo, precio }) {
  return (
    <Card sx={{ display: "flex", margin: "0 0rem", bgcolor: "" }}>
      <CardMedia
        component="img"
        sx={{
          ...imgWidth,
          padding: "0.5rem 0 0.5rem 0.5rem",
        }}
        alt="Imagen"
        src={imagen}
      />
      <CardContent sx={{ bgcolor: "" }}>
        <Box height="100%" sx={{ bgcolor: "" }}>
          <Grid container position="relative" height="inherit">
            <Grid item {...grid12All} sx={{ bgcolor: "" }}>
              <Typography variant="h6" component="div">
                {nombre}
              </Typography>
            </Grid>

            <Grid item {...grid12All} height="50%" sx={{ bgcolor: "" }}>
              <Typography variant="h6" component="h6">
                {tipo}
              </Typography>
            </Grid>

            <Grid lg={12} container sx={{ bgcolor: "" }}>
              <Grid item {...precioRespo}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "primary.dark", fontWeight: "700" }}
                >
                  ${precio}
                </Typography>
              </Grid>

              <Grid item {...contadorRespo}>
                <Contador />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardOrden;
