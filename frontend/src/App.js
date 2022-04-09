import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/login";
import Create from "./pages/create";
import Profile from "./pages/profile";
import Reservacion from "./pages/Reservacion";
import Sucursales from "./pages/Sucursales";
import Navbar from "./components/Navbar";
import Busqueda from "./components/Busqueda";
import Carrito from "./components/Carrito";

import useDrawer from "./hooks/useDrawer";
import { createDrawer } from "./utils";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

const BusquedaDrawer = ({ toggle, isOpen }) =>
  createDrawer(Busqueda, toggle, isOpen);

const CarritoDrawer = ({ toggle, isOpen }) =>
  createDrawer(Carrito, toggle, isOpen);

function App() {
  const busquedaDrawer = useDrawer();
  const carritoDrawer = useDrawer();

  return (
    <ThemeProvider theme={theme}>
      <Navbar
        toggleBusqueda={busquedaDrawer.toggle}
        toggleCarrito={carritoDrawer.toggle}
      />
      <BusquedaDrawer {...busquedaDrawer} />
      <CarritoDrawer {...carritoDrawer} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Create" element={<Create />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Reservacion" element={<Reservacion />} />
        <Route exact path="/Sucursales" element={<Sucursales />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
