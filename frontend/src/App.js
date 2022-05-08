import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Create from "./pages/create";
import Perfil from "./pages/Perfil";
import Reservacion from "./pages/Reservacion";
import Sucursales from "./pages/Sucursales";
import Navbar from "./components/Navbar";
import Busqueda from "./components/Busqueda";
import Carrito from "./components/Carrito";
import Pago from "./pages/pago";
import QrLector from "./pages/QrLector";
import Producto from "./components/Producto";
import Ayuda from "./pages/Ayuda";
import Reportes from "./pages/reportes";

import useDrawer from "./hooks/useDrawer";
import { createDrawer } from "./utils";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Routes, Route } from "react-router-dom";

import ClienteState from "./contexts/Cliente";
import ProductoState from "./contexts/Producto";

const BusquedaDrawer = ({ toggle, isOpen }) =>
  createDrawer(Busqueda, toggle, isOpen);

const CarritoDrawer = ({ toggle, isOpen }) =>
  createDrawer(Carrito, toggle, isOpen);

function App() {
  const busquedaDrawer = useDrawer();
  const carritoDrawer = useDrawer();

  return (
    <ThemeProvider theme={theme}>
      <ClienteState>
        <ProductoState>
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
            <Route exact path="/Perfil" element={<Perfil />} />
            <Route exact path="/Reportes" element={<Reportes />} />
            <Route exact path="/Reservacion" element={<Reservacion />} />
            <Route exact path="/Sucursales" element={<Sucursales />} />
            <Route exact path="/Pago" element={<Pago />} />
            <Route exact path="/QrLector" element={<QrLector />} />
            <Route exact path="/Ayuda" element={<Ayuda />} />
          </Routes>
        </ProductoState>
      </ClienteState>
    </ThemeProvider>
  );
}

export default App;
