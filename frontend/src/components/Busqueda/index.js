import { useState, useEffect, useContext } from "react";

import Categorias from "./Categorias";
import BarraBusqueda from "./BarraBusqueda";
import CardBusqueda from "./CardBusqueda";
import { grid12All, drawerWidths } from "../../responsiveConst";

import { Box, Grid, Icon, Divider, Button, Paper } from "@mui/material";

import confetti from "../../assets/cakes/confetti.jpg";
import vainilla from "../../assets/cakes/vainilla.jpg";
import chocolate from "../../assets/cakes/chocolate.jpg";

import { ProductoContext } from "../../contexts/Producto";
import * as API from "../../services/Comida";

const paperParentStyle = {
  bgcolor: "background.main",
  ...drawerWidths,
  height: "100vh",
};

const dividerStyle = {
  bgcolor: "primary.main",
  margin: " 1.5rem 2rem",
  height: "0.09rem",
  borderRadius: "5px",
};

const busquedaItems = [
  {
    id: 1,
    nombre: "Pastel Confetti",
    descripcion:
      "Pastel de vainilla con confetti doblado en cada capa, cubierto con crema de mantequilla",
    precio: { porcion: "50" },
    imagen: confetti,
  },
  {
    id: 2,
    nombre: "Pastel de vainilla",
    descripcion:
      "Delicioso pastel de vainilla, rico y mantecoso con una miga ligera, cubierto con crema de mantequilla",
    precio: { porcion: "65" },
    imagen: vainilla,
  },
  {
    id: 3,
    nombre: "Pastel de chocolate",
    descripcion:
      "Tres capas de cremosa mantequilla de chocolate sedosa con chispas de vainilla",
    precio: { porcion: "55" },
    imagen: chocolate,
  },
];

function Busqueda({ toggleDrawer }) {
  var timer;
  var noTyping = 0;
  const [searchText, setSearchText] = useState("");
  const handleOnSearchTextChange = (event) => setSearchText(event.target.value);

  const [searchRes, setSearchRes] = useState([]);

  const handleOnSearchByText = async () => {
    const res = await API.GetByQuery(searchText, "N");
    //console.log(res);
    if (res.data) setSearchRes(res.data);
    else setSearchRes([]);
  };

  const handleOnClickCategoryChange = async (selected) => {
    //alert(selected);
    const res = await API.GetByQuery(selected, "C");
    if (res.data) setSearchRes(res.data);
    else setSearchRes([]);
  };

  useEffect(() => {
    if (searchText != "") {
      timer = setInterval(() => {
        noTyping += 1;
        console.log(noTyping);
        if (noTyping === 1) {
          handleOnSearchByText();
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [searchText]);

  const {
    selectProducto,
    productoId,
    toggleDrawer: toggleProducto,
  } = useContext(ProductoContext);
  const handleOnClickProducto = (id) => {
    selectProducto(id);
    toggleDrawer();
    toggleProducto();
  };

  return (
    <>
      <Paper sx={paperParentStyle}>
        <Box sx={{ bgcolor: "" }}>
          <Grid container spacing={0}>
            <Grid
              {...grid12All}
              item
              sx={{ bgcolor: "transparent", padding: "0.5rem" }}
            >
              <Button onClick={toggleDrawer} sx={{ color: "text.primary" }}>
                <Icon>close</Icon>
              </Button>
            </Grid>

            <Grid
              {...grid12All}
              item
              sx={{
                bgcolor: "",
                padding: "0 2rem",
              }}
            >
              <BarraBusqueda
                sx={{ paddingBottom: "2rem" }}
                value={searchText}
                onChange={handleOnSearchTextChange}
              />
              <Categorias onClick={handleOnClickCategoryChange} />
            </Grid>
          </Grid>
        </Box>

        <Divider variant="middle" sx={dividerStyle} />

        <Box sx={{ padding: "0 1.5rem" }}>
          <Grid container spacing={2}>
            {searchRes.map((item) => (
              <Grid {...grid12All} item sx={{ padding: "0 0" }} key={item._id}>
                <CardBusqueda {...item} onClick={handleOnClickProducto} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Busqueda;
