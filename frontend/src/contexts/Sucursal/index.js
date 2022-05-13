import { createContext, useState, useEffect } from "react";
import * as API from "../../services/Sucursal";

export const SucursalContext = createContext();

const SucursalState = (props) => {
  const [sucursal, setSucursal] = useState({});

  const selectSucursal = async (id) => {
    const res = await API.Get(id);
    setSucursal(res.data);
  };

  return (
    <SucursalContext.Provider value={{ sucursal, selectSucursal }}>
      {props.children}
    </SucursalContext.Provider>
  );
};

export default SucursalState;
