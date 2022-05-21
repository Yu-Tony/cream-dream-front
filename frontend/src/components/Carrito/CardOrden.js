import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  Icon,
  Button,
} from "@mui/material";

import Contador from "../Contador";
import { grid12All } from "../../responsiveConst";

const imgWidth = {
  width: {
    xs: "90px",
    sm: "20%",
    md: "40%",
    lg: "40%",
    xl: "50%",
  },
};

const precioRespo = { xs: 3, sm: 3, md: 6, lg: 6, xl: 6 };
const contadorRespo = { xs: 9, sm: 9, md: 6, lg: 6, xl: 6 };

function CardOrden({
  _id,
  imagen,
  nombre,
  opcion,
  precio,
  cantidad,
  onRemove,
  updateCantidad,
}) {
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
                <Button
                  sx={{ color: "text.primary", float: "right" }}
                  onClick={() => onRemove(_id)}
                >
                  <Icon>close</Icon>
                </Button>
              </Typography>
            </Grid>

            <Grid item {...grid12All} height="50%" sx={{ bgcolor: "" }}>
              <Typography variant="h6" component="h6">
                {opcion}
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
                <Contador
                  initialValue={cantidad}
                  onChange={(value) => {
                    updateCantidad(_id, opcion, value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CardOrden;
