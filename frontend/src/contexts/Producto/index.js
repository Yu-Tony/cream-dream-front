import { createContext, useState, useEffect } from "react";
import useDrawer from "../../hooks/useDrawer";
import { createDrawer } from "../../utils";
import Producto from "../../components/Producto";

export const ProductoContext = createContext();

const ProductoDrawer = ({ toggle, isOpen }) =>
  createDrawer(Producto, toggle, isOpen);

const ProductoState = (props) => {
  const [productoId, setProductoId] = useState("");

  const productoDrawer = useDrawer();

  const selectProducto = (id) => {
    setProductoId(id);
  };

  return (
    <ProductoContext.Provider
      value={{
        productoId,
        selectProducto,
        toggleDrawer: productoDrawer.toggle,
      }}
    >
      <ProductoDrawer {...productoDrawer} />
      {props.children}
    </ProductoContext.Provider>
  );
};

export default ProductoState;
