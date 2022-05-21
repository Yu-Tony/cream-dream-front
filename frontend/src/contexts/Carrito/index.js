import { createContext, useState, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import * as API_Pedido from "../../services/Pedido";
import { calcularSubtotal } from "../../utils";

export const CarritoContext = createContext();

const CarritoState = (props) => {
  /*useEffect(() => {
    const alertUser = (event) => {
      console.log("Guardar orden");
    };

    window.addEventListener("beforeunload", alertUser);

    return () => window.removeEventListener("beforeunload", alertUser);
  }, []);*/

  /* ORDEN / PEDIDO */
  const initialStateCarrito = {
    comidas: [],
    combos: [],
    mesa: "",
    cliente: "",
  };
  const [stateCarrito, dispatchCarrito] = useReducer(
    Reducer,
    initialStateCarrito
  );

  const addToCarrito = (producto) => {
    dispatchCarrito({ type: "ADD_TO_CARRITO", payload: producto });
  };

  const removeFromCarrito = (productoId) => {
    dispatchCarrito({ type: "REMOVE_FROM_CARRITO", payload: productoId });
  };

  const updateCantidad = (productoId, opcion, cantidad) => {
    dispatchCarrito({
      type: "UPDATE_CANTIDAD",
      payload: { productoId, opcion, cantidad },
    });
  };

  const ordenar = () => {
    dispatchCarrito({ type: "ORDENAR" });
  };

  const emptyOrden = () => {
    dispatchCarrito({ type: "EMPTY_ORDEN" });
  };

  const saveOrden = () => {
    /* CREACION */
    API_Pedido.Update(0, {});
  };

  const getOrden = () => {};

  /* CUENTA */
  const [cuenta, setCuenta] = useState({
    _pedido: "",
    total: 0,
    propina: 0,
    metodo: "",
    cliente: "",
  });

  return (
    <CarritoContext.Provider
      value={{
        addToCarrito,
        removeFromCarrito,
        stateCarrito,
        updateCantidad,
        ordenar,
        cuenta,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
