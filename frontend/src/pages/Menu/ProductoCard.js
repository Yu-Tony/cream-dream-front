import React, { useContext } from "react";

import { Grid, Box, Button, Typography } from "@mui/material";
import Image from "mui-image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ProductoContext } from "../../contexts/Producto";

const TyStyProm = { fontSize: 20, color: "#644838", fontWeight: 700 };
const TyStyV5PD9 = { fontSize: 25, color: "#DE6D71", fontWeight: 900 };
const TyStyD5P9 = { fontSize: 15, color: "#644838", fontWeight: 900 };
const TyStyD2P6 = { fontSize: 12, color: "#644838", fontWeight: 600 };
const TyStyD4SS9 = { fontSize: 14, color: "#FFFFFF", fontWeight: 600 };

function ProductoCard({ producto }) {
  const { toggleDrawer, selectProducto } = useContext(ProductoContext);

  const handleOnClick = () => {
    toggleDrawer();
    //console.log(producto._id);
    selectProducto(producto._id);
  };

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      sx={{ display: "flex", justifyContent: "center", mb: 4 }}
      onClick={handleOnClick}
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
            Agregar
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
              src={producto.imagen}
              fit="cover"
              duration={0}
              height={140}
              width={140}
            />
          </Box>
          <Typography style={TyStyD5P9}>{producto.nombre}</Typography>
          <Typography style={TyStyD2P6} sx={{ lineHeight: 1.1 }}>
            {producto.descripcion}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductoCard;
