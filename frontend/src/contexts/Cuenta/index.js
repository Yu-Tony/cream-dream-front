import { createContext, useState, useEffect, useReducer } from "react";

export const CuentaContext = createContext();

const CuentaState = (props) => {
  const [cuenta, setCuenta] = useState([]);

  /**
   *
   * @param {Array} items
   */
  const addToCuenta = (items) => {
    setCuenta((prev) => [...prev, ...item]);
  };

  return (
    <CuentaContext.Provider value={{ cuenta, addToCuenta }}>
      {props.children}
    </CuentaContext.Provider>
  );
};

export default CuentaState;
