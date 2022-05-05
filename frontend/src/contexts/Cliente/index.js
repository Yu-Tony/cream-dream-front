import { createContext, useState, useEffect } from "react";

import * as API from "../../services/Cliente";

export const ClienteContext = createContext();

const ClienteState = (props) => {
  const [clienteId, setClienteId] = useState("");

  useEffect(() => {
    console.log(clienteId);
  }, [clienteId]);

  const Delete = async () => {
    const res = await API.Delete(clienteId);
    console.log(res);
  };

  const Login = async (data) => {
    const res = await API.Login(data);
    console.log(res);
    if (res.data) setClienteId(res.data.id);
  };

  const Logout = () => {
    setClienteId("");
  };

  const isLog = () => {
    if ((clienteId = !"")) return false;
    return true;
  };

  return (
    <ClienteContext.Provider value={{ clienteId, Login, Logout, Delete }}>
      {props.children}
    </ClienteContext.Provider>
  );
};

export default ClienteState;
