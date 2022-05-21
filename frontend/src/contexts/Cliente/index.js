import { createContext, useState, useEffect } from "react";

//import * as API from "../../services/Cliente";
import * as API from "../../services/Usuario";

export const ClienteContext = createContext();

const initialState = { id: "", tipo: -1 };

const ClienteState = (props) => {
  const [cliente, setCliente] = useState(initialState);

  const Delete = async () => {
    const res = await API.Delete(cliente.id);
    console.log(res);
  };

  const Login = async (data) => {
    const res = await API.Login(data);

    if (res.data) {
      setCliente(res.data);
      return res;
    }

    return false;
  };

  const Logout = () => {
    setCliente(initialState);
  };

  const isLog = () => {
    if (cliente.id != "") return true;
    return false;
  };

  return (
    <ClienteContext.Provider value={{ cliente, Login, Logout, Delete, isLog }}>
      {props.children}
    </ClienteContext.Provider>
  );
};

export default ClienteState;
