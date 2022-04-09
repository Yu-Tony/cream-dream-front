import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/login";
import Create from "./pages/create";
import Profile from "./pages/profile";
import Reservacion from "./pages/Reservacion";
import Sucursales from "./pages/Sucursales";
import Navbar from "./components/Navbar";
import "./theme.js";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Create" element={<Create />} />
        <Route exact path="/Profile" element={<Profile />} /> 
        <Route exact path="/Reservacion" element={<Reservacion />} />
        <Route exact path="/Sucursales" element={<Sucursales />} />
      </Routes>
    </Fragment>
  );
}

export default App;
