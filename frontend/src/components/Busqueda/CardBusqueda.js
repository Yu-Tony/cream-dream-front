import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const cardHeigth = {
  height: {
    xs: "200px",
    sm: "215px",
    md: "160px",
    lg: "180px",
    xl: "150px",
  },
};

const descrStyle = {
  bgcolor: "",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-line-clamp": "5",
  "-webkit-box-orient": "vertical",
};

const precioMasBajo = (precios) => {
  var precioBajo = 999;
  for (let i = 0; i < precios.length; i++) {
    if (precioBajo > precios[i].precio) precioBajo = precios[i].precio;
  }

  return precioBajo;
};

function CardBusqueda({ _id, nombre, descripcion, precio, imagen, onClick }) {
  return (
    <Card
      sx={{ display: "flex" }}
      onClick={() => {
        onClick(_id);
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 165, ...cardHeigth, padding: "0.8rem" }}
        image={imagen}
        alt="imagen de pastel"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{ flex: "1 0 auto", padding: "0.8rem 0", position: "relative" }}
        >
          <Typography variant="h6" component="div">
            {nombre}
          </Typography>
          <Typography variant="body1" component="div" sx={descrStyle}>
            {descripcion}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              color: "primary.dark",
              fontWeight: "700",
              position: "absolute",
              bottom: "0",
              margin: "0.8rem 0",
            }}
          >
            Desde $ {precioMasBajo(precio)}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CardBusqueda;
