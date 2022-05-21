import { createContext, useState, useEffect, useReducer } from "react";

import * as API from "../../services/Usuario";
import Reducer from "./Reducer";

export const ClienteContext = createContext();

const initialState = { id: "", tipo: -1 };

const ClienteState = (props) => {
  const [cliente, setCliente] = useState(initialState);

  const settingsInitialState = [{ label: "Iniciar Sesion", path: "Login" }];
  const [settings, dispatchSettings] = useReducer(
    Reducer,
    settingsInitialState
  );

  const Delete = async () => {
    const res = await API.Delete(cliente.id);
    console.log(res);
  };

  const Login = async (data) => {
    const res = await API.Login(data);

    if (res.data) {
      dispatchSettings({ type: res.data.tipo });
      setCliente(res.data);
      return res;
    }

    return {};
  };

  const Logout = () => {
    setCliente(initialState);
    dispatchSettings({ type: -1 });
  };

  const isLog = () => {
    if (cliente.id != "") return true;
    return false;
  };

  return (
    <ClienteContext.Provider
      value={{ cliente, Login, Logout, Delete, isLog, settings }}
    >
      {props.children}
    </ClienteContext.Provider>
  );
};

export default ClienteState;
